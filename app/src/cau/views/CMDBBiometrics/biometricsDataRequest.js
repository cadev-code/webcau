import { getCampaigns, getMarks, getModels } from '../../api/cmdbBiometrics.api'

export const biometricsDataRequest = (setCampaignsData, setMarksData, setModelsData) => {

  const getCampaignsData = async() => {
    const { data } = await getCampaigns()
    setCampaignsData(data)
  }

  const getMarksData = async() => {
    const { data } = await getMarks()
    setMarksData(data)
  }

  const getModelsData = async() => {
    const { data } = await getModels()
    setModelsData(data)
  }
  
  return {
    getCampaignsData,
    getMarksData,
    getModelsData
  }
}
