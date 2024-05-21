import axios from 'axios'

const url = `${import.meta.env.VITE_URL_API_WEBCAU_DB}/cmdb/computers`

export const getAreas = async() =>
  await axios.get(`${url}/areas`)

export const addArea = async(data) =>
  await axios.post(`${url}/areas`, data)

export const updateArea = async(data) =>
  await axios.put(`${url}/areas`, data)

export const deleteArea = async(id) =>
  await axios.delete(`${url}/areas?id_area=${id}`)



export const getLicenses = async() =>
  await axios.get(`${url}/licenses`)

export const addLicense = async(data) =>
  await axios.post(`${url}/licenses`, data)

export const updateLicense = async(data) =>
  await axios.put(`${url}/licenses`, data)

export const deleteLicense = async(id) =>
  await axios.delete(`${url}/licenses?id_license=${id}`)

