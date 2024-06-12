import axios from 'axios'

const url = `${import.meta.env.VITE_URL_API_WEBCAU_DB}/cmdb/whitelists`

// zones

export const getZones = async() =>
  await axios.get(`${url}/zones`)

export const addZone = async(data) =>
  await axios.post(`${url}/zones`, data)

export const updateZone = async(data) =>
  await axios.put(`${url}/zones`, data)