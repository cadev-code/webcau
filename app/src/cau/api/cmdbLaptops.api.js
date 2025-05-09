import axios from 'axios'

const url = `${import.meta.env.VITE_URL_API_WEBCAU_DB}/cmdb/laptops`

export const getAreas = async() =>
  await axios.get(`${url}/areas`)

export const addArea = async(data) =>
  await axios.post(`${url}/areas`, data)

export const updateArea = async(data) =>
  await axios.put(`${url}/areas`, data)

export const deleteArea = async(id) =>
  await axios.delete(`${url}/areas?id_area=${id}`)


export const getMarks = async() =>
  await axios.get(`${url}/marks`)

export const addMark = async(data) =>
  await axios.post(`${url}/marks`, data)

export const updateMark = async(data) =>
  await axios.put(`${url}/marks`, data)

export const deleteMark = async(id) =>
  await axios.delete(`${url}/marks?id_mark=${id}`)


export const getLaptops = async() =>
  await axios.get(url)

export const addLaptop = async(data) =>
  await axios.post(url, data)

export const updateLaptop = async(data) =>
  await axios.put(url, data)

export const deleteLaptop = async(data) =>
  await axios.delete(url, {data})


export const getNotes = async(id_laptop) =>
  await axios.get(`${url}/notes?id_laptop=${id_laptop}`)

export const addNote = async(data) =>
  await axios.post(`${url}/notes`, data)

export const updateNote = async(data) =>
  await axios.put(`${url}/notes`, data)

export const deleteNote = async(id_note) =>
  await axios.delete(`${url}/notes?id_note=${id_note}`)