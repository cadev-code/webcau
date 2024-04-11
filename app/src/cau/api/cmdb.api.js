import axios from 'axios'

const url = `${import.meta.env.VITE_URL_API_WEBCAU_DB}/cmdb`

export const addData = async(newData) =>
  await axios.post(`${url}/data/add`, newData)

export const updateData = async(editData) =>
  await axios.put(`${url}/data/update`, editData)

export const deleteData = async(id) =>
  await axios.delete(`${url}/data/delete/${id}`)

export const getDataGeneralFilter = async(search) =>
  await axios.get(`${url}/data/general/${ search }`)

export const getDataSpecificFilter = async(filters) =>
  await axios.get(`${url}/data/specific?${ Object.keys(filters).map(key => `${key}=${filters[key]}`).join('&')}`)