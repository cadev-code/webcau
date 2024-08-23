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

// models

export const getModels = async() =>
  await axios.get(`${URL}/models`)

export const addModel = async(data) =>
  await axios.post(`${URL}/models`, data)

export const updateModel = async(data) =>
  await axios.put(`${URL}/models`, data)

export const deleteModel = async(id) =>
  await axios.delete(`${URL}/models?id_model=${id}`)

// assignments

export const getAssignments = async() =>
  await axios.get(`${URL}/assignments`)

export const addAssignment = async(data) =>
  await axios.post(`${URL}/assignments`, data)

export const updateAssignment = async(data) =>
  await axios.put(`${URL}/assignments`, data)

export const deleteAssignment = async(id) =>
  await axios.delete(`${URL}/assignments?id_assignment=${id}`)