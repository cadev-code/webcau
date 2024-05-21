import { 
  getAreas, 
  getLicenses, 
  getModels
} from '../../api/cmdbComputers.api'

export const computersDataRequest = (
  setAreasData,
  setLicensesData,
  setModelsData
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

  return {
    getAreasData,
    getLicensesData,
    getModelsData
  }
}