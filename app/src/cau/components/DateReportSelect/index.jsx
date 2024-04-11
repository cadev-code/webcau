import { useEffect, useState } from 'react'

export const DateReportSelect = ({ 
  dateReport,
  noSerie,
  datesReportChanges,
  setDatesReportChanges
}) => {

  const [dateReportState, setDateReportState] = useState('')

  const dateOnChange = ({ target }) => {

    if(target.value === '') {
      const allChangesWithout = datesReportChanges.length !== 0
        ? datesReportChanges.filter(date => date.noSerie !== noSerie)
        : []
      
      setDateReportState(dateReport)
      setDatesReportChanges(allChangesWithout)
      return
    }

    setDateReportState(target.value)
    const newDate = {
      noSerie,
      newDate: target.value
    }
    
    const allChanges = datesReportChanges.length === 0
      ? [newDate]
      : datesReportChanges.filter(date => date.noSerie === noSerie).length === 0
        ? [...datesReportChanges, newDate]
        : datesReportChanges.map( date => 
            date.noSerie === noSerie
              ? newDate
              : date
          )

    setDatesReportChanges(allChanges)
  }

  useEffect(() => {
    setDateReportState(dateReport)
  }, [])

  return (
    <input
      type="date"
      value={ dateReportState }
      onChange={ dateOnChange }
      style={{
        marginBottom: '5px',
        padding: '5px',
        fontSize: '16px',
        color: 'white',
        backgroundColor: 'rgba(24,45,64,1)',
        border: 'none'
      }}
    />
  )
}