// react tools imports
import { useEffect, useState } from 'react'

// components imports
import { Box, Typography } from '@mui/material'
import { blue, grey } from '@mui/material/colors'

// apis imports
import { 
  getToners,
  getRegisters 
} from '../../api/printers.api'

import { reduceDatesReg } from '../../helpers'

export const PrintersRow = ({ printerData, date }) => {

  const { IP, area, model, noSerie, dateReport } = printerData

  // Toners
  const [toners, setToners] = useState([])
  
  const loadToners = async() => {
    const response = await getToners(noSerie)
    const toners = response.data

    setToners(toners)
  }

  const tonerFilter = (c_key) =>
    toners.filter( ({ color_key }) => color_key === c_key )[0]

  useEffect(() => {
    loadToners()
  }, [])

  // Modified Date
  const modifiedDateReport = dateReport.split('-').reverse().join('-')

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

  return (
    <Box
      sx={{ width: '100%', display: 'flex', backgroundColor: '#031f3a', border: '3px solid var(--c-border-table)' }}
    >
      <Box
        className="label-border label-t-center"
        sx={{ width: '15%', textAlign: 'center', border: '2px solid var(--c-border-table)' }}
      >
        <Typography
          color={ blue[200] } 
          sx={{ fontSize: 20, fontWeight: 600, cursor: 'pointer' }}
          onClick={() => window.open(`http://${IP}`, '_blank') }
        >{ model }</Typography>
        <Typography color={ grey.A400 }>{ noSerie }</Typography>
        <Typography color={ grey.A400 }>{ IP }</Typography>
        <Typography sx={{ fontWeight: 600, fontSize: 18 }}>{ area }</Typography>
        <Typography color={ grey.A400 } sx={{ padding: '0 5px', margin: '5px 0', backgroundColor: '#182d40' }}>Último servicio: <span style={{ color: 'white', fontWeight: '500' }}>{ modifiedDateReport }</span></Typography>
      </Box>
      <Box
        sx={{ width: '10%', border: '2px solid var(--c-border-table)' }}
      >
        {
          toners.map( ({ color, color_key,}) => (
              <Box
                key={ color_key } 
                className="label-border label-t-center" 
                sx={{ height: 38, display: 'flex', alignItems: 'center' }}
              >
                { color }
              </Box>
            ))
        }
      </Box>
      <Box
        sx={{ width: '5%', border: '2px solid var(--c-border-table)' }}
      >
        <Box className="label-border label-t-center" sx={{ height: 38 }}>
          { 
            tonerFilter('K')?.amount 
          }
        </Box>
        <Box className="label-border label-t-center" sx={{ height: 38 }}>
          { 
            tonerFilter('C')?.amount 
          }
        </Box>
        <Box className="label-border label-t-center" sx={{ height: 38 }}>
          { 
            tonerFilter('M')?.amount 
          }
        </Box>
        <Box className="label-border label-t-center" sx={{ height: 38 }}>
          { 
            tonerFilter('Y')?.amount 
          }
        </Box> 
      </Box>
      <Box sx={{ width: '70%', display: 'flex', backgroundColor: '#52525245', border: '2px solid var(--c-border-table)' }}>
        {
          registers.map( (reg, i) => (
            <Box key={ i } sx={{ width: `${ 100 / registers.length }%` }}>
              {
                reg.map( ({ agent, percent }, i) => (
                  <Box key={ i } sx={{ width: '100%', display: 'flex', height: 38, border: '1px solid var(--c-border-table)' }}> 
                    <Box
                      className="label-border label-t-center"
                      sx={{ width: '50%' }}
                    >
                      { percent !== '' ? `${percent} %` : percent }
                    </Box>
                    <Box
                      className="label-border label-t-center" 
                      sx={{ width: '50%' }}
                    >
                      { agent }
                    </Box>
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
