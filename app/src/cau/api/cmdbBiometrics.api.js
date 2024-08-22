import axios from 'axios'

const URL = `${import.meta.env.VITE_URL_API_WEBCAU_DB}/cmdb/biometrics`

// campaigns

export const getCampaigns = async() =>
  await axios.get(`${URL}/campaigns`)

export const addCampaign = async(data) =>
  await axios.post(`${URL}/campaigns`, data)

export const updateCampaign = async(data) =>
  await axios.put(`${URL}/campaigns`, data)

export const deleteCampaign = async(id) =>
  await axios.delete(`${URL}/campaigns?id_campaign=${id}`)

// marks

export const getMarks = async() =>
  await axios.get(`${URL}/marks`)

export const addMark = async(data) =>
  await axios.post(`${URL}/marks`, data)

export const updateMark = async(data) =>
  await axios.put(`${URL}/marks`, data)

export const deleteMark = async(id) =>
  await axios.delete(`${URL}/marks?id_mark=${id}`)