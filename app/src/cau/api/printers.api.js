import axios from 'axios'

const url = `${import.meta.env.VITE_URL_API_WEBCAU_DB}/printers`

export const getPrintersYears = async() => 
  await axios.get(`${ url }/years`)

export const getPrintersDates = async({ year, month }) =>
  await axios.get(`${ url }/dates?year=${ year }&month=${ month }`)

export const getPrinters = async() => 
  await axios.get(`${ url }`)

export const getToners = async(noSerie) => 
  await axios.get(`${ url }/toners?noserie=${ noSerie }`)

export const updateToners = async(updates) =>
  await axios.put(`${ url }/toners/update`, updates)

export const getRegisters = async(date, noSerie) =>
  await axios.get(`${ url }/registers?year=${ date.year }&month=${ date.month }&noserie=${ noSerie }`)

export const updateRegisters = async(updates) =>
  await axios.put(`${ url }/registers/update`, updates)

export const updateDatesReport = async(updates) =>
  await axios.put(`${ url }/dates_report/update`, updates)