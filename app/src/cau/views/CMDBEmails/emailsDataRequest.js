import { 
  getAreas, 
  getRegisters, 
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

  return {
    getAreasData,
    getRegistersData
  }
}
