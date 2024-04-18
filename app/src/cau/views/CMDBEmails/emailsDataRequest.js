import { 
  getAreas, 
  getRegisters, 
  getRegistersByArea 
} from '../../api/cmdbEmails.api'


export const emailsDataRequest = (setAreasData, setRegistersData) => {
  const getAreasData = async() => {
    const { data } = await getAreas()
    setAreasData(data)
  }

  const getRegistersData = async() => {
    const { data } = await getRegisters()
    setRegistersData(data)
  }

  const getRegistersByAreaData = async(id_area) => {
    const { data } = await getRegistersByArea(id_area)
    setRegistersData(data)
  }

  return {
    getAreasData,
    getRegistersData,
    getRegistersByAreaData
  }
}
