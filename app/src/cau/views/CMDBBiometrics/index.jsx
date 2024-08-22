import { useEffect, useState } from 'react'
import { TitleActionBar } from '../../components'
import { OptionsManager } from '../../components/TableData/OptionsManager'
import { biometricsDataRequest } from './biometricsDataRequest'

export const CMDBBiometrics = () => {

  const [campaignsData, setCampaignsData] = useState([])

  const [showCampaigns, setShowCampaigns] = useState(true)

  const { 
    getCampaignsData
  } = biometricsDataRequest(setCampaignsData)

  useEffect(() => {
    getCampaignsData()
  }, [])

  return (
    <>
      <TitleActionBar 
        title="CMDB Biométricos"
        buttons={
          <>
            <button onClick={() => setShowCampaigns(true)}>
              Campañas
            </button>
          </>
        }
      />
      {
        showCampaigns &&
          <OptionsManager 
            title="Campañas"
            close={() => setShowCampaigns(false)}
            userIsAdmin={true}
          />
      }
    </>
  )
}
