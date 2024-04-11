export const reduceDatesReg = (response) => {

  const datesReg = response.data
    .map( ({ date_r }) =>  date_r)
  
  const dates = datesReg
    .filter( (item, i) =>  
      datesReg.indexOf(item) === i
    )

  const newResponse = []

  dates.forEach(() => {
    newResponse.push([])
  })

  response.data.forEach((register) => {
    const { date_r } = register

    dates.forEach((date, i) => {
      if(date_r === date) newResponse[i].push(register)
    })
  })

  return newResponse

}
