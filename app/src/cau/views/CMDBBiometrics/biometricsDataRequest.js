import { getCampaigns, getMarks } from '../../api/cmdbBiometrics.api'

export const biometricsDataRequest = (setCampaignsData, setMarksData) => {

  const getCampaignsData = async() => {
    const { data } = await getCampaigns()
    setCampaignsData(data)
  }

  const getMarksData = async() => {
    const { data } = await getMarks()
    setMarksData(data)
  }
  
  return {
    getCampaignsData,
    getMarksData
  }
}
