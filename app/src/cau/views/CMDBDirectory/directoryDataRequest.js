import { getAreas, getDomains, getUO } from '../../api/cmdbDirectory.api'

export const directoryDataRequest = (
  setUoData,
  setDomainsData,
  setAreasData
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

  return {
    getUOData,
    getDomainsData,
    getAreasData
  }
}
