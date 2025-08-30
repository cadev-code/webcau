import { 
  getAreas, 
  getSites,
  getLists, 
  getRegisters, 
} from '../../api/baseEmails.api'


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
    setRegistersData(
      data.map(register => (
        {...register, creation_date: new Date(register.creation_date).toISOString().slice(0, 10)}
      ))
    )
  }

  return {
    getAreasData,
    getSitesData,
    getListsData,
    getRegistersData
  }
}
