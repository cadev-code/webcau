// react tools imports
import { useEffect, useState } from 'react'

// components imports
import { 
  PeriodModifier, 
  PrintersRow 
} from '../../components'
import { Alert } from '../../../components'
import { 
  Box, 
  Button 
} from '@mui/material'

// styles imports
import {
  CardPeople, 
  NavInformer, 
  PrintersBody, 
  PrintersBodyEdit, 
  PrintersContainter, 
  PrintersHeader, 
  PrintersMain, 
  PrintersTable 
} from './styled'

// helpers imports
import { dataPeriodModifier } from '../../helpers'

// apis imports
import { 
  getPrinters, 
  getPrintersDates, 
  updateDatesReport, 
  updateRegisters, 
  updateToners
} from '../../api/printers.api'
import { PrintersRowEdit } from '../../components/PrintersRowEdit'


export const Printers = ({ userData }) => {

  // User login data
  const { permissions, agent } = userData

  // Period modifier helper
  const { monthData, date, setDate } = dataPeriodModifier()

  // Dates
  const [datesPrinters, setDatesPrinters] = useState([])

  const loadDates = async() => {
    const response = await getPrintersDates({
      year: date.year,
      month: date.month
    })
    const dates = response.data.map( ({ date_ }) => date_ )
    setDatesPrinters(dates)
  }

  useEffect(() => {
    loadDates()
  }, [ date ])

  // Printers
  const [printers, setPrinters] = useState([])

  const loadPrinters = async() => {
    const response = await getPrinters()
    const printers = response.data
    setPrinters(printers)
  }

  // permissions
  const [edit, setEdit] = useState(false)

  useEffect(() => {
    loadPrinters()
  }, [edit])

  // data changes
  const [tonersChanges, setTonersChanges] = useState([])
  const [registersChanges, setRegistersChanges] = useState([])
  const [datesReportChanges, setDatesReportChanges] = useState([])

  // boolean alerts
  const [showAlertSucc, setShowAlertSucc] = useState(false)
  const [showAlertError, setShowAlertError] = useState(false)
  const [showAlertWarning, setShowAlertWarning] = useState(false)

  const activeAlertSuccess = () => {
    setShowAlertSucc(true)
    setTimeout(() => {
      setShowAlertSucc(false)
    }, 5000)
  }

  const activeAlertError = () => {
    setShowAlertError(true)
    setTimeout(() => {
      setShowAlertError(false)
    }, 5000)
  }

  const activeAlertWarning = () => {
    setShowAlertWarning(true)
    setTimeout(() => {
      setShowAlertWarning(false)
    }, 5000)
  }

  const closeEdit = () => {
    setRegistersChanges([])
    setTonersChanges([])
    setEdit(!edit)
  }

  // submit edit
  const editSubmit = async() => {

    let existTonersChanges = tonersChanges.length !== 0
    let existRegistersChanges = registersChanges.length !== 0
    let existDatesReportChanges = datesReportChanges.length !== 0

    if(existRegistersChanges) {
      const validate = registersChanges.filter(change => Number(change.percent) > 100 || Number(change.percent) < 0)
      
      if(validate.length !== 0) {
        activeAlertWarning()
        return
      }
    }

    if(existTonersChanges || existRegistersChanges || existDatesReportChanges) {

      if(existTonersChanges) {
        try {
          await updateToners(tonersChanges)
        } catch (error) {
          activeAlertError()
        }

        setRegistersChanges([])
      }
      
      if(existRegistersChanges) {
        try {
          await updateRegisters(registersChanges)
        } catch (error) {
          activeAlertError()
        }

        setTonersChanges([])
      }

      if(existDatesReportChanges) {
        try {
          await updateDatesReport(datesReportChanges)
        } catch (error) {
          activeAlertError()
        }

        setDatesReportChanges([])
      }

      activeAlertSuccess()
      closeEdit()

      return
    }

    closeEdit()
  }

  return (
    <PrintersContainter>

      {
        permissions.includes('printers') && !edit &&
        <Button
          variant="contained" 
          sx={{ position: 'absolute', top: 10, right: 50 }}
          onClick={() => setEdit(!edit)}
        >
          Editar
        </Button>
      }

      <NavInformer>
        <CardPeople>
          <div sx={{ display: 'flex', gap: 2, justifyContent: 'space-between' }}>
            <p>Responsable</p>
            <p>JORGE</p>
          </div>

          <Box color="var(--c-primary)" fontWeight={ 800 }>|</Box>

          <div sx={{ display: 'flex', gap: 2 }}>
            <p>Back Up</p>
            <p>RICARDO</p>
          </div>
        </CardPeople>

        <PeriodModifier 
          setDate={ setDate }
          monthData={ monthData }
          date={ date }
          disabled={ edit }
        />

      </NavInformer>

      <PrintersMain>
        <PrintersTable>
          <PrintersHeader>

            <Box 
              className='label-border label-t-center' 
              sx={{ width: '15%', border: '2px solid var(--c-border-table)' }}
            >
              <h3>Impresora</h3>
            </Box>

            <Box 
              className='label-border label-t-center' 
              sx={{ width: '10%', border: '2px solid var(--c-border-table)'}}
            >
              <h3>Color de Toner</h3>
            </Box>

            <Box 
              className='label-border label-t-center' 
              sx={{ width: '5%', border: '2px solid var(--c-border-table)'}}
            >
              <h3>Stock</h3>
            </Box>

            <Box 
              sx={{ width: '70%', border: '2px solid var(--c-border-table)' }}
            >
              <Box 
                className='label-border label-t-center'
                sx={{ width: '100%', height: 40 }}
              >
                <h3>Fecha</h3>
              </Box>

              <Box sx={{ widht: '100%', display: 'flex', height: 40 }}>
                {
                  datesPrinters.map( day => (
                    <Box
                      key={ day }
                      className='label-border label-t-center'
                      sx={{ width: `${ 100 / datesPrinters.length }%`, border: '2px solid var(--c-border-table)' }}
                    >
                      <h3>{ day }</h3>
                    </Box>
                  ))
                }
              </Box>

            </Box>
          </PrintersHeader>

          {
            !edit
            ? <PrintersBody>
              {
                printers.map( printer => (
                  <PrintersRow
                    key={ printer.noSerie } 
                    printerData={ printer }
                    date={ date }
                  />
                ))
              }
            </PrintersBody>
            : <PrintersBodyEdit>
              {
                printers.map( printer => (
                  printer.status === 'Activo' &&
                    <PrintersRowEdit
                      key={ printer.noSerie } 
                      printerData={ printer }
                      agent={ agent }
                      date={ date } 
                      tonersChanges={ tonersChanges }
                      setTonersChanges={ setTonersChanges }
                      registersChanges={ registersChanges }
                      setRegistersChanges={ setRegistersChanges }
                      datesReportChanges={ datesReportChanges }
                      setDatesReportChanges={ setDatesReportChanges }
                    />
                ))
              }
            </PrintersBodyEdit>
          }

        </PrintersTable>
      </PrintersMain>

      {
        permissions.includes('printers') && edit &&
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'end' }}>
          <Button
            sx={{ marginRight: 2 }}
            variant="contained"
            color='error' 
            onClick={ () => {
              closeEdit()
            }}
          >
            Cancelar
          </Button>
          <Button
            variant="contained" 
            onClick={ editSubmit }
          >
            Guardar
          </Button>
        </Box>
      }

      <Alert
        showAlert={ showAlertSucc } 
        setShowAlert={ setShowAlertSucc } 
        text="Datos actualizados correctamente."  
        severity="success"
      />

      <Alert
        showAlert={ showAlertError } 
        setShowAlert={ setShowAlertError }
        text="Hubo un problema al intentar actualizar los datos en la base."  
        severity="error"
      />

      <Alert
        showAlert={ showAlertWarning } 
        setShowAlert={ setShowAlertWarning }
        text="El valor de porcentaje debe estar en un rango de 0 a 100." 
        severity="error"
      />

    </PrintersContainter>
  )
}
