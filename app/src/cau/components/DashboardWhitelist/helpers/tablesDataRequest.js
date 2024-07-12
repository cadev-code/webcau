import { getComputers, getCustomersEmails, getLocalEmails } from '../../../api/cmdbWhitelists'

export const tablesDataRequest = (
  setComputersData,
  setLocalEmailsData,
  setCustomersEmailsData
) => {
  const getComputersData = async(id_zone) => {
    const { data } = await getComputers(id_zone)
    setComputersData(data)
  }  
  
  const getLocalEmailsData = async(id_zone) => {
    const { data } = await getLocalEmails(id_zone)
    setLocalEmailsData(data)
  }  
  
  const getCustomersEmailsData = async(id_zone) => {
    const { data } = await getCustomersEmails(id_zone)
    setCustomersEmailsData(data)
  }

  return {
    getComputersData,
    getLocalEmailsData,
    getCustomersEmailsData,
  }
}