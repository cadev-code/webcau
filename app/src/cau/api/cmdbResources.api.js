import axios from 'axios'

const url = `${import.meta.env.VITE_URL_API_WEBCAU_DB}/cmdb/resources`

export const getResources = async() =>
  await axios.get(url)

export const addResource = async(data) => 
  await axios.post(url, data)

export const updateResource = async(data) =>
  await axios.put(url, data)

export const deleteResource = async(data) =>
  await axios.delete(url, {data})