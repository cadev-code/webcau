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

export const getComputers = async(id_zone) =>
  await axios.get(`${url}/computers?id_zone=${id_zone}`)

export const addComputer = async(data) =>
  await axios.post(`${url}/computers`, data)

export const updateComputer = async(data) =>
  await axios.put(`${url}/computers`, data)

export const deleteComputer = async(data) =>
  await axios.delete(`${url}/computers?id_computer=${data.id_computer}`)

// local emails

export const getLocalEmails = async(id_zone) =>
  await axios.get(`${url}/emails/local?id_zone=${id_zone}`)

export const addLocalEmail = async(data) =>
  await axios.post(`${url}/emails/local`, data)

export const updateLocalEmail = async(data) =>
  await axios.put(`${url}/emails/local`, data)

export const deleteLocalEmail = async(data) =>
  await axios.delete(`${url}/emails/local?id_email=${data.id_email}`)

// customers emails

export const getCustomersEmails = async(id_zone) =>
  await axios.get(`${url}/emails/customers?id_zone=${id_zone}`)

export const addCustomersEmail = async(data) =>
  await axios.post(`${url}/emails/customers`, data)

export const updateCustomersEmail = async(data) =>
  await axios.put(`${url}/emails/customers`, data)

export const deleteCustomersEmail = async(data) =>
  await axios.delete(`${url}/emails/customers?id_email=${data.id_email}`)