import { 
  getAreas, 
  getSites,
  getLists, 
  getRegisters, 
} from '../../api/assetsEmails.api'


export const emailsDataRequest = (
  setAreasData, 
  setSitesData,
  setListsData, 
  setRegistersData
) => {
  const getAreasData = async() => {
    const { data } = await getAreas()
    setAreasData(data)
  }

  const getSitesData = async() => {
    const { data } = await getSites()
    setSitesData(data)
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
    getSitesData,
    getListsData,
    getRegistersData
  }
}
