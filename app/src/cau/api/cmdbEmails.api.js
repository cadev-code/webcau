import axios from 'axios'

const url = `${import.meta.env.VITE_URL_API_WEBCAU_DB}/cmdb/emails`

export const getAreas = async() =>
  await axios.get(`${url}/areas`)

export const getRegisters = async() =>
  await axios.get(`${url}/registers/all`)

  export const getRegistersByArea = async(id_area) =>
  await axios.get(`${url}/registers?id_area=${ id_area }`)