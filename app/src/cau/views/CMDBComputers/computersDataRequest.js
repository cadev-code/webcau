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
  setOriginData,
  site
) => {

  const getAreasData = async() => {
    const { data } = await getAreas(site)
    setAreasData(data)
  }

  const getLicensesData = async() => {
    const { data } = await getLicenses(site)
    setLicensesData(data)
  }

  const getModelsData = async() => {
    const { data } = await getModels(site)
    setModelsData(data)
  }

  const getRegistersData = async() => {
    const { data } = await getRegisters(site)
    setRegistersData(data)
  }  
  
  const getOriginData = async() => {
    const { data } = await getOrigins(site)
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