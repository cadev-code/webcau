import axios from 'axios'

const url = `${import.meta.env.VITE_URL_API_WEBCAU_DB}/cmdb/extensions`

// areas

export const getAreas = async() =>
  await axios.get(`${url}/areas`)

export const addArea = async(data) =>
  await axios.post(`${url}/areas`, data)

export const updateArea = async(data) =>
  await axios.put(`${url}/areas`, data)

export const deleteArea = async(id) =>
  await axios.delete(`${url}/areas?id_area=${id}`)

// types

export const getTypes = async() =>
  await axios.get(`${url}/types`)

export const addType = async(data) =>
  await axios.post(`${url}/types`, data)

export const updateType = async(data) =>
  await axios.put(`${url}/types`, data)

export const deleteType = async(id) =>
  await axios.delete(`${url}/types?id_type=${id}`)

// sites

export const getSites = async() =>
  await axios.get(`${url}/sites`)

export const addSite = async(data) =>
  await axios.post(`${url}/sites`, data)

export const updateSite = async(data) =>
  await axios.put(`${url}/sites`, data)

export const deleteSite = async(id) =>
  await axios.delete(`${url}/sites?id_site=${id}`)