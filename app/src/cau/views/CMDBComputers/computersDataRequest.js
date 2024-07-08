import { 
  getAreas, 
  getLicenses, 
  getModels,
  getOrigins,
  getRegisters
} from '../../api/cmdbComputers.api'

export const computersDataRequest = (
  setAreasData,
  setLicensesData,
  setModelsData,
  setRegistersData,
  setOriginData
) => {

  const getAreasData = async() => {
    const { data } = await getAreas()
    setAreasData(data)
  }

  const getLicensesData = async() => {
    const { data } = await getLicenses()
    setLicensesData(data)
  }

  const getModelsData = async() => {
    const { data } = await getModels()
    setModelsData(data)
  }

  const getRegistersData = async() => {
    const { data } = await getRegisters()
    setRegistersData(data)
  }  
  
  const getOriginData = async() => {
    const { data } = await getOrigins()
    setOriginData(data)
  }

  return {
    getAreasData,
    getLicensesData,
    getModelsData,
    getRegistersData,
    getOriginData
  }
}