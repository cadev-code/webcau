import { getAreas, getDomains, getUO, getUsers } from '../../api/cmdbDirectory.api'

export const directoryDataRequest = (
  setUoData,
  setDomainsData,
  setAreasData,
  setUsersData
) => {
  
  const getUOData = async() => {
    const { data } = await getUO()
    setUoData(data)
  }

  const getDomainsData = async() => {
    const { data } = await getDomains()
    setDomainsData(data)
  }

  const getAreasData = async() => {
    const { data } = await getAreas()
    setAreasData(data)
  }

  const getUsersData = async() => {
    const { data } = await getUsers()
    setUsersData(data)
  }

  return {
    getUOData,
    getDomainsData,
    getAreasData,
    getUsersData
  }
}
