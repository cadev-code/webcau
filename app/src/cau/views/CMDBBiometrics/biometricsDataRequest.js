import { getAssignments, getCampaigns, getMarks, getModels } from '../../api/cmdbBiometrics.api'

export const biometricsDataRequest = (setCampaignsData, setMarksData, setModelsData, setAssignmentsData) => {

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

  const getAssignmentData = async() => {
    const { data } = await getAssignments()
    setAssignmentsData(data)
  }
  
  return {
    getCampaignsData,
    getMarksData,
    getModelsData,
    getAssignmentData
  }
}
