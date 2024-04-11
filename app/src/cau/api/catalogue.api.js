import axios from 'axios'

const URL = `${import.meta.env.VITE_URL_API_WEBCAU_DB}/catalogue`

export const getCatalogue = async() => 
  await axios.get(`${URL}`)