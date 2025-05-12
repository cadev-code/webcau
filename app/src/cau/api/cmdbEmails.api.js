import axios from 'axios'

const url = `${import.meta.env.VITE_URL_API_WEBCAU_DB}/cmdb/emails`

// areas

export const getAreas = async(site) =>
  await axios.get(`${url}/areas?site=${site}`)

export const addArea = async(data, site) =>
  await axios.post(`${url}/areas`, {...data, site})

export const updateArea = async(data) =>
  await axios.put(`${url}/areas`, data)

export const deleteArea = async(id) =>
  await axios.delete(`${url}/areas?id_area=${id}`)

// lists

export const getLists = async(site) =>
  await axios.get(`${url}/lists?site=${site}`)

export const addList = async(data, site) =>
  await axios.post(`${url}/lists`, {...data, site})

export const updateList = async(data) =>
  await axios.put(`${url}/lists`, data)

export const deleteList = async(id) =>
  await axios.delete(`${url}/lists?id_list=${id}`)

// registers

export const getRegisters = async(site) =>
  await axios.get(`${url}/registers/all?site=${site}`)

export const addRegister = async(data, site) =>
  await axios.post(`${url}/registers`, {...data, site})

export const updateRegister = async(data) =>
  await axios.put(`${url}/registers`, data)

export const deleteRegister = async(data) =>
  await axios.delete(`${url}/registers`, {data})