import { getCampaigns } from '../../api/cmdbBiometrics.api'

export const biometricsDataRequest = (setCampaignsData) => {

  const getCampaignsData = async() => {
    const { data } = await getCampaigns()
    setCampaignsData(data)
  }
  
  return {
    getCampaignsData
  }
}
