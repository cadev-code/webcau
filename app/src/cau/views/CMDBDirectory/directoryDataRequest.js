import { getUO } from '../../api/cmdbDirectory.api'

export const directoryDataRequest = (
  setUoData
) => {
  
  const getUOData = async() => {
    const { data } = await getUO()
    setUoData(data)
  }

  return {
    getUOData
  }
}
