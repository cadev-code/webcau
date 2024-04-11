import axios from 'axios'

const url = `${import.meta.env.VITE_URL_API_WEBCAU_DB}/office`

// licenses methods
export const getLicenses = async() => 
  await axios.get(`${url}/licenses`)

export const getLicense = async(licensID) => 
  await axios.get(`${url}/license/${licensID}`)

export const addLicense = async(newLicense) =>
  await axios.post(`${url}/licenses/add`, newLicense)

export const editLicense = async(id, updateLicense) => 
  await axios.put(`${url}/licenses/edit/${id}`, updateLicense)

export const deleteLicense = async(id) =>
  await axios.delete(`${url}/licenses/delete/${id}`)

export const updateAmountLicense = async(id, newAmount) =>
  await axios.put(`${url}/licenses/amount_update/${id}`, newAmount)

  // users methods
export const getUsers = async(id) =>
  await axios.get(`${url}/users/${id}`)

export const addUser = async(newUser) =>
  await axios.post(`${url}/users/add`, newUser)

export const editUser = async(id, updateUser) =>
  await axios.put(`${url}/users/edit/${id}`, updateUser)

export const deleteUser = async(id) =>
  await axios.delete(`${url}/users/delete/${id}`)

export const deleteUsersByLicense = async(id) =>
  await axios.delete(`${url}/users/delete_license/${id}`)

export const getUsersByName = async(name) =>
  await axios.get(`${url}/users/search/${ name }`)