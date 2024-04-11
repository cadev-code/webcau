import { useState } from 'react'

export const dataPeriodModifier = () => {

  const monthData = [ 'Enero', 'Febrero', 'Marzo','Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ]

  const [ date, setDate ] = useState({
    year: new Date().getFullYear(),
    month: monthData[new Date().getMonth()]
  })

  return {
    monthData,
    date,
    setDate
  }

}
