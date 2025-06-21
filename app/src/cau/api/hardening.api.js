import axios from 'axios'

const url = `${import.meta.env.VITE_URL_API_WEBCAU_DB}/hardening`

export const getGPOs = async() =>
  await axios.get(`${url}/gpos`)

export const getPolicies = async(data) =>
  await axios.get(`${url}/policies?gpo="${data}"`)

export const updatePolicyCheck = async(data) =>
  await axios.put(`${url}/update-policy`, data)