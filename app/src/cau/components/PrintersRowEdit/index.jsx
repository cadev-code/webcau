// react tools imports
import { useEffect, useState } from 'react'

// components imports
import { 
  Box, 
  MenuItem, 
  Select, 
  Typography 
} from '@mui/material'
import { 
  blue, 
  grey 
} from '@mui/material/colors'

// apis imports
import { 
  getToners,
  getRegisters 
} from '../../api/printers.api'

import { reduceDatesReg } from '../../helpers'

// components imports
import { Input, InputPercent } from './styled'
import { DateReportSelect } from '..'

export const PrintersRowEdit = ({ 
  printerData,
  agent,
  date,
  tonersChanges, 
  setTonersChanges,
  registersChanges,
  setRegistersChanges,
  datesReportChanges,
  setDatesReportChanges
}) => {

  const { IP, area, model, noSerie, dateReport } = printerData
  
  // Toners
  const [toners, setToners] = useState([])
  // state de solo stock, para antes de modificar la db
  const [tonersStock, setTonersStock] = useState([])
  
  const loadToners = async() => {
    const response = await getToners(noSerie)
    const toners = response.data
    
    const tonersReduce = toners.map( ({ color_key, amount }) => ({ color_key, amount }) )
    
    setToners(toners)
    setTonersStock(tonersReduce)
  }

  
  // al existir cambio en un input crea un nuevo arreglo mutado del state de stock, y lo inserta
  const changeTonerStock = (e) => { 
    const { value, name } = e.target
    const newTonersStock = tonersStock.map(t => t.color_key === name ? { color_key: name, amount: value } : t )
    setTonersStock(newTonersStock)

    const newChange = {
      noSerie,
      color_key: name,
      amount: value
    }

    const allChanges = tonersChanges.length === 0 // valida longitud de arreglo
    ? [newChange] // en caso de estar vacio solo lo agrega
    : tonersChanges.filter(change => change.color_key === name && change.noSerie === noSerie).length === 0 // de no ser valida un cambio anterior al mismo lugar
      ? [newChange, ...tonersChanges] // si no hubo un cambio solo lo suma al arreglo existente
      : tonersChanges.map( change => // de ser así reemplaza el cambio con misma referencia
        change.color_key === name && change.noSerie === noSerie // busca el objeto con misma referencia
          ? newChange // cuando lo encuentra lo reemplaza
          : change // si no es regresa el ya existente
          )
            
    setTonersChanges(allChanges)
  }

  useEffect(() => {
    loadToners()
  }, [])
  
  // Registers
  const [registers, setRegisters] = useState([])

  const loadRegisters = async() => {
    const response = await getRegisters(date, noSerie)

    const registers = reduceDatesReg(response)
    setRegisters(registers)
  }

  useEffect(() => {
    loadRegisters()
  }, [date])
  
  // register
  const registerChange = (e, id) => {
    const { value, name } = e.target

    const newRegisters = registers.map( dates => { // itera sobre cada arreglo(fecha) [[]*4] 
      return dates.map( reg => { // itera sobre cada objeto(registro) dentro de cada arreglo(fecha) [[{}*4]*4] 
        if(reg.id === id) { // busca el objeto(registro) que contenga 
          return { ...reg, percent: value } // en caso de encontrarlo lo reemplaza
        }
        return reg // de no encontrarlo solo devuelve el ya existente
      })
    })

    const newChange = value !== ""
      ? { percent: value, agent, id }
      : { percent: value, agent: "", id }

    const allChanges = registersChanges.length === 0 // valida si existen changes
      ? [newChange] //  en caso de no haber, valida si el registro a cambiar es "percent"
      : registersChanges.filter(change => change.id === id).length === 0 // de haber cambios valida si existe uno con la misma referencia
        ? [...registersChanges, newChange] // en caso de no haber un registro con ese id
        : registersChanges.map(change => change.id === id // de existir lo reemplaza
            ? newChange
            : change
          )

    setRegisters(newRegisters)
    setRegistersChanges(allChanges)
  }

  // show style focus input
  const [inputFocus, setInputFocus] = useState()

  return (
    <Box
      sx={{ width: '100%', display: 'flex', backgroundColor: '#031f3a', border: '3px solid var(--c-border-table)' }}
    >
      <Box
        className="label-border label-t-center"
        sx={{ width: '15%', textAlign: 'center', border: '2px solid var(--c-border-table)' }}
      >
        <Typography color={ blue[200] } sx={{ fontSize: 20, fontWeight: 600 }}>{ model }</Typography>
        <Typography color={ grey.A400 }>{ noSerie }</Typography>
        <Typography color={ grey.A400 }>{ IP }</Typography>
        <Typography sx={{ fontWeight: 600, fontSize: 18 }}>{ area }</Typography>
        <DateReportSelect
          dateReport={ dateReport }
          noSerie={ noSerie }
          datesReportChanges={ datesReportChanges }
          setDatesReportChanges={ setDatesReportChanges }
        />
      </Box>
      <Box
        sx={{ width: '10%', border: '2px solid var(--c-border-table)' }}
      >
        {
          toners.map( ({ color, color_key,}) => (
              <Box
                key={ color_key } 
                className="label-border label-t-center" 
                sx={{ height: 36, display: 'flex', alignItems: 'center' }}
              >
                { color }
              </Box>
            ))
        }
      </Box>
      <Box
        sx={{ width: '5%', border: '2px solid var(--c-border-table)' }}
      >
        {
          tonersStock.map( ({ color_key, amount }) => (
            <Select
              key={ color_key }
              name={ color_key }
              className="label-border"
              value={ amount }
              sx={{ 
                  width: '100%', 
                  height: 36, 
                  borderRadius: 0, 
                  fontSize: 16, 
                  color: 'white',
                  border: 'none'
              }}
              onChange={ changeTonerStock }
            >
              {
                [0,1,2,3,4,5,6,7,8,9,10].map( n => (
                  <MenuItem key={ n } value={ n }>{ n }</MenuItem>
                ))
              }
            </Select>
          ))
        }
      </Box>
      <Box sx={{ width: '70%', display: 'flex', backgroundColor: '#031f3a', border: '2px solid var(--c-border-table)' }}>
        {
          registers.map( (reg, i) => (
            <Box key={ i } sx={{ width: `${ 100 / registers.length }%` }}>
              {
                reg.map( ({ id, percent }, i) => (
                  <Box key={ i } sx={{ width: '100%', display: 'flex', justifyContent: 'center',height: 36, border: '1px solid var(--c-border-table)' }}>
                    {/* perncent input */}
                    <InputPercent
                      htmlFor={`percent${ id }`}
                      $focus={ inputFocus === id }
                    >
                        <Input 
                          id={`percent${ id }`}
                          name="percent"
                          onChange={ (e) => registerChange(e, id, percent ) }
                          type="number"
                          max="100"
                          min="0"
                          value={ percent }
                          onFocus={() => setInputFocus(id)}
                          onBlur={() => setInputFocus('')}
                        />
                        %
                    </InputPercent>
                  </Box>
                ))
              }
            </Box>
          ))
        }
      </Box>
    </Box>
  )
}
