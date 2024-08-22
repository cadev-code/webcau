import axios from 'axios'

const URL = `${import.meta.env.VITE_URL_API_WEBCAU_DB}/cmdb/biometrics`

export const getCampaigns = async() =>
  await axios.get(`${URL}/campaigns`)

export const addCampaign = async(data) =>
  await axios.post(`${URL}/campaigns`, data)

export const updateCampaign = async(data) =>
  await axios.put(`${URL}/campaigns`, data)

export const deleteCampaign = async(id) =>
  await axios.delete(`${URL}/campaigns?id_campaign=${id}`)