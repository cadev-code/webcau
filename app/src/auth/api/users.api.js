import axios from 'axios'

const url = import.meta.env.VITE_URL_API_USERS

export const getUser = async(data) =>
  await axios.get(`${ url }/user?username=${ data.username }&password=${ data.password }`)

export const getAuthenticatedUser = async(token) =>
  await axios.get(`${ url }/user/verify?token=${ token }`)