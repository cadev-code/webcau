import { 
  getAreas, 
  getLists, 
  getRegisters, 
} from '../../api/cmdbEmails.api'


export const emailsDataRequest = (
  setAreasData, 
  setListsData, 
  setRegistersData,
  site
) => {
  const getAreasData = async() => {
    const { data } = await getAreas(site)
    setAreasData(data)
  }

  const getListsData = async() => {
    const { data } = await getLists(site)
    setListsData(data)
  }

  const getRegistersData = async() => {
    const { data } = await getRegisters(site)
    setRegistersData(data)
  }

  return {
    getAreasData,
    getListsData,
    getRegistersData
  }
}
