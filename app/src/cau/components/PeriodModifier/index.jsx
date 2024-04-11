// react tools imports
import { useEffect, useState } from 'react'

// components imports
import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { Dialog, FormSelect, Period } from './styled'

// apis imports
import { getPrintersYears } from '../../api/printers.api'

export const PeriodModifier = ({ date, setDate, monthData, disabled }) => {
  const { year, month } = date
  const [open, setOpen] = useState(false)
  const [yearsData, setYearsData] = useState([])
  const [dateSelect, setDateSelect] = useState()

  const handleClick = () => {
    setOpen(!open)

    setDateSelect({
      year,
      month
    })
  }

  const onSubmit = () => {
    handleClick()

    setDate(dateSelect)
  }

  useEffect(() => {
    
    async function loadYears() {
      const response = await getPrintersYears()
      const years = response.data.map( year => year.year_s )
      setYearsData(years)
    }

    loadYears()

  }, [])

  return (
    <>
      <Period>
        <p>Periodo:</p>
        <Button
          onClick={ handleClick }  
          sx={{ padding: '5px 10px', fontSize: 16  }}
          disabled={ disabled }
        >
          { year } / { month }
        </Button>
      </Period>

      {
        open &&
        <Dialog>
          <FormSelect>
            <h5>Periodo de Datos</h5>
            <FormControl
              sx={{ width: 100 }}
            >
              <InputLabel id="year">Año</InputLabel>
              <Select
                label="Año"
                value={ dateSelect.year }
                onChange={ e => setDateSelect({
                  ...dateSelect,
                  year: e.target.value
                })}
              >
                {
                  yearsData.map( year => (
                    <MenuItem 
                      value={ year } 
                      key={ year }
                    >
                      { year }
                    </MenuItem>
                  ))
                }
              </Select>
            </FormControl>

            <FormControl
              sx={{ width: 140, ml: 2 }}
            >
              <InputLabel id="month">Mes</InputLabel>
              <Select
                label="Mes"
                value={ dateSelect.month }
                onChange={ e => setDateSelect({
                  ...dateSelect,
                  month: e.target.value
                })}
              >
                {
                  monthData.map( month => (
                    <MenuItem 
                      value={ month } 
                      key={ month }
                    >
                      { month }
                    </MenuItem>
                  ))
                }
              </Select>
            </FormControl>
            
            <Box 
              sx={{
                mt: 3,
                display: 'flex',
                justifyContent: 'end',
                gap: 1
              }}
            >
              <Button 
                variant="contained"
                onClick={ handleClick }
              >
                Cancelar
              </Button>
              <Button 
                variant="contained"
                onClick={ onSubmit }
              >
                Guardar
              </Button>
            </Box>
          </FormSelect>

        </Dialog>
      }

    </>
  )
}
