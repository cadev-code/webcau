import axios from 'axios'

const url = `${import.meta.env.VITE_URL_API_WEBCAU_DB}/cmdb/directory`

export const getUO = async() =>
  await axios.get(`${url}/uo`)

export const addUO = async(data) =>
  await axios.post(`${url}/uo`, data)

export const updateUO = async(data) =>
  await axios.put(`${url}/uo`, data)

export const deleteUO = async(id) =>
  await axios.delete(`${url}/uo?id_uo=${id}`)