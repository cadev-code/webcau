import { getDomains, getUO } from '../../api/cmdbDirectory.api'

export const directoryDataRequest = (
  setUoData,
  setDomainsData
) => {
  
  const getUOData = async() => {
    const { data } = await getUO()
    setUoData(data)
  }

  const getDomainsData = async() => {
    const { data } = await getDomains()
    setDomainsData(data)
  }

  return {
    getUOData,
    getDomainsData
  }
}
