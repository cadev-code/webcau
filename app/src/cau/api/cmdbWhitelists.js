import axios from 'axios'

const url = `${import.meta.env.VITE_URL_API_WEBCAU_DB}/cmdb/whitelists`

// zones

export const getZones = async() =>
  await axios.get(`${url}/zones`)

export const addZone = async(data) =>
  await axios.post(`${url}/zones`, data)

export const updateZone = async(data) =>
  await axios.put(`${url}/zones`, data)

// computers

export const getComputers = async() =>
  await axios.get(`${url}/computers`)

export const addComputer = async(data) =>
  await axios.post(`${url}/computers`, data)

export const updateComputer = async(data) =>
  await axios.put(`${url}/computers`, data)

export const deleteComputer = async(id_computer) =>
  await axios.delete(`${url}/computers?id_computer=${id_computer}`)

// local emails

export const getLocalEmails = async() =>
  await axios.get(`${url}/emails/local`)

export const addLocalEmail = async(data) =>
  await axios.post(`${url}/emails/local`, data)

export const updateLocalEmail = async(data) =>
  await axios.put(`${url}/emails/local`, data)

export const deleteLocalEmail = async(id_email) =>
  await axios.delete(`${url}/emails/local?id_email=${id_email}`)

// customers emails

export const getCustomersEmails = async() =>
  await axios.get(`${url}/emails/customers`)

export const addCustomersEmail = async(data) =>
  await axios.post(`${url}/emails/customers`, data)

export const updateCustomersEmail = async(data) =>
  await axios.put(`${url}/emails/customers`, data)

export const deleteCustomersEmail = async(id_email) =>
  await axios.delete(`${url}/emails/customers?id_email=${id_email}`)