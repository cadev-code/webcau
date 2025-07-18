import axios from 'axios'

const url = `${import.meta.env.VITE_URL_API_WEBCAU_DB}/assets/emails`

// areas

export const getAreas = async() =>
  await axios.get(`${url}/areas`)

export const addArea = async(data) =>
  await axios.post(`${url}/areas`, data)

export const updateArea = async(data) =>
  await axios.put(`${url}/areas`, data)

export const deleteArea = async(id) =>
  await axios.delete(`${url}/areas?id_area=${id}`)

// sites

export const getSites = async() =>
  await axios.get(`${url}/sites`)

export const addSite = async(data) =>
  await axios.post(`${url}/sites`, data)

export const updateSite = async(data) =>
  await axios.put(`${url}/sites`, data)

export const deleteSite = async(id) =>
  await axios.delete(`${url}/sites?id_site=${id}`)

// lists

export const getLists = async() =>
  await axios.get(`${url}/lists`)

export const addList = async(data) =>
  await axios.post(`${url}/lists`, data)

export const updateList = async(data) =>
  await axios.put(`${url}/lists`, data)

export const deleteList = async(id) =>
  await axios.delete(`${url}/lists?id_list=${id}`)

// registers

export const getRegisters = async() =>
  await axios.get(`${url}/registers/all`)

export const addRegister = async(data) =>
  await axios.post(`${url}/registers`, data)

export const updateRegister = async(data) =>
  await axios.put(`${url}/registers`, data)

export const deleteRegister = async(data) =>
  await axios.delete(`${url}/registers`, {data})

// registers lists

export const getRegisterLists = async(id_register) =>
  await axios.get(`${url}/register/lists?id_register=${id_register}`)

export const addEmailToList = async(data) =>
  await axios.post(`${url}/register/list`, data)

export const removeMailFromList = async(id) =>
  await axios.delete(`${url}/register/list?id=${id}`)