import axios from 'axios'

const url = `${import.meta.env.VITE_URL_API_WEBCAU_DB}/cmdb/computers`

// areas

export const getAreas = async(site) =>
  await axios.get(`${url}/areas?site=${site}`)

export const addArea = async(data, site) =>
  await axios.post(`${url}/areas`, {...data, site})

export const updateArea = async(data) =>
  await axios.put(`${url}/areas`, data)

export const deleteArea = async(id) =>
  await axios.delete(`${url}/areas?id_area=${id}`)

// licenses

export const getLicenses = async(site) =>
  await axios.get(`${url}/licenses?site=${site}`)

export const addLicense = async(data, site) =>
  await axios.post(`${url}/licenses`, {...data, site})

export const updateLicense = async(data) =>
  await axios.put(`${url}/licenses`, data)

export const deleteLicense = async(id) =>
  await axios.delete(`${url}/licenses?id_license=${id}`)

// models

export const getModels = async(site) =>
  await axios.get(`${url}/models?site=${site}`)

export const addModel = async(data, site) =>
  await axios.post(`${url}/models`, {...data, site})

export const updateModel = async(data) =>
  await axios.put(`${url}/models`, data)

export const deleteModel = async(id) =>
  await axios.delete(`${url}/models?id_model=${id}`)

// origins

export const getOrigins = async(site) =>
  await axios.get(`${url}/origins?site=${site}`)

export const addOrigin = async(data, site) =>
  await axios.post(`${url}/origins`, {...data, site})

export const updateOrigin = async(data) =>
  await axios.put(`${url}/origins`, data)

export const deleteOrigin = async(id) =>
  await axios.delete(`${url}/origins?id_origin=${id}`)

// registers

export const getRegisters = async(site) =>
  await axios.get(`${url}/registers?site=${site}`)

export const addRegister = async(data, site) => 
  await axios.post(`${url}/registers`, {...data, site})

export const updateRegister = async(data) =>
  await axios.put(`${url}/registers`, data)

export const deleteRegister = async(data) =>
  await axios.delete(`${url}/registers`, {data})