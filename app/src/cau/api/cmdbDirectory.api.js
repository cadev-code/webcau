import axios from 'axios'

const url = `${import.meta.env.VITE_URL_API_WEBCAU_DB}/cmdb/directory`

// uo's

export const getUO = async() =>
  await axios.get(`${url}/uo`)

export const addUO = async(data) =>
  await axios.post(`${url}/uo`, data)

export const updateUO = async(data) =>
  await axios.put(`${url}/uo`, data)

export const deleteUO = async(id) =>
  await axios.delete(`${url}/uo?id_uo=${id}`)

// domains

export const getDomains = async() =>
  await axios.get(`${url}/domains`)

export const addDomain = async(data) =>
  await axios.post(`${url}/domains`, data)

export const updateDomain = async(data) =>
  await axios.put(`${url}/domains`, data)

export const deleteDomain = async(id) =>
  await axios.delete(`${url}/domains?id_domain=${id}`)

// areas

export const getAreas = async() =>
  await axios.get(`${url}/areas`)

export const addArea = async(data) =>
  await axios.post(`${url}/areas`, data)

export const updateArea = async(data) =>
  await axios.put(`${url}/areas`, data)

export const deleteArea = async(id) =>
  await axios.delete(`${url}/areas?id_area=${id}`)

// positions

export const getPositions = async() => 
  await axios.get(`${url}/positions`)

export const addPosition = async(data) =>
  await axios.post(`${url}/positions`, data)

export const updatePosition = async(data) =>
  await axios.put(`${url}/positions`, data)

export const deletePosition = async(id) => 
  await axios.delete(`${url}/positions?id_position=${id}`)

// users

export const getUsers = async() =>
  await axios.get(`${url}/users`)

export const addUser = async(data) =>
  await axios.post(`${url}/users`, data)

export const updateUser = async(data) =>
  await axios.put(`${url}/users`, data)

export const deleteUser = async(data) =>
  await axios.delete(`${url}/users`, {data})

// user_resources
export const getResources = async() =>
  await axios.get(`${url}/resources`)

export const getUserResources = async(id_user) =>
  await axios.get(`${url}/users/resources?id_user=${id_user}`)

export const addUserResource = async(data) =>
  await axios.post(`${url}/users/resources`, data)

export const deleteUserResource = async(id) => 
  await axios.delete(`${url}/users/resources?id=${id}`)