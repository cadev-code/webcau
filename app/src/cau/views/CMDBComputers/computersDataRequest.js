import { 
  getAreas, 
  getLicenses 
} from '../../api/cmdbComputers.api'

export const computersDataRequest = (
  setAreasData,
  setLicensesData
) => {

  const getAreasData = async() => {
    const { data } = await getAreas()
    setAreasData(data)
  }

  const getLicensesData = async() => {
    const { data } = await getLicenses()
    setLicensesData(data)
  }

  return {
    getAreasData,
    getLicensesData
  }
}