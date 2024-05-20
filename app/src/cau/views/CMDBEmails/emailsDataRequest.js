import { 
  getAreas, 
  getLists, 
  getRegisters, 
} from '../../api/cmdbEmails.api'


export const emailsDataRequest = (
  setAreasData, 
  setListsData, 
  setRegistersData
) => {
  const getAreasData = async() => {
    const { data } = await getAreas()
    console.log(data)
    setAreasData(data)
  }

  const getListsData = async() => {
    const { data } = await getLists()
    setListsData(data)
  }

  const getRegistersData = async() => {
    const { data } = await getRegisters()
    setRegistersData(data)
  }

  return {
    getAreasData,
    getListsData,
    getRegistersData
  }
}
