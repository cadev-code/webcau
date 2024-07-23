import { getAreas, getDomains, getPositions, getUO, getUsers } from '../../api/cmdbDirectory.api'

export const directoryDataRequest = (
  setUoData,
  setDomainsData,
  setAreasData,
  setPositionsData,
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

  const getPositionsData = async() => {
    const { data } = await getPositions()
    setPositionsData(data)
  }

  const getUsersData = async() => {
    const { data } = await getUsers()
    setUsersData(data)
  }

  return {
    getUOData,
    getDomainsData,
    getAreasData,
    getPositionsData,
    getUsersData
  }
}
