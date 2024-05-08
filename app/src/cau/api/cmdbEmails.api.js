import axios from 'axios'

const url = `${import.meta.env.VITE_URL_API_WEBCAU_DB}/cmdb/emails`

export const getAreas = async() =>
  await axios.get(`${url}/areas`)

export const getRegisters = async() =>
  await axios.get(`${url}/registers/all`)

export const addRegister = async(data) =>
  await axios.post(`${url}/registers`, data)

export const updateRegister = async(data) =>
  await axios.put(`${url}/registers`, data)