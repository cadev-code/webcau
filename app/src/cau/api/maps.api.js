import axios from 'axios'

const url = `${import.meta.env.VITE_URL_API_WEBCAU_DB}/maps`

export const getMaps = async() =>
  await axios.get(url)

export const uploadMap = async(mapData) =>
  await axios.post(`${url}/upload`, mapData)

export const updateMap = async(changesData) =>
  await axios.put(`${url}/update`, changesData)

export const deleteMap = async({id, path}) =>
  await axios.delete(`${url}/delete?id=${id}&path=${path}`)

export const getMapOrder = async() => 
  await axios.get(`${url}/order`)

export const updateMapOrder = async(newOrder) =>
  await axios.put(`${url}/order/update`, newOrder)