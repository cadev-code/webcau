import { useEffect, useState } from 'react'
import { TitleActionBar } from '../../components'
import { OptionsManager } from '../../components/TableData/OptionsManager'
import { biometricsDataRequest } from './biometricsDataRequest'
import { addCampaign, deleteCampaign, updateCampaign } from '../../api/cmdbBiometrics.api'

export const CMDBBiometrics = () => {

  const [campaignsData, setCampaignsData] = useState([])

  const [showCampaigns, setShowCampaigns] = useState(false)
  const [showMarks, setShowMarks] = useState(true)

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
            <button onClick={() => setShowMarks(true)}>
              Marcas
            </button>
          </>
        }
      />
      {
        showCampaigns &&
          <OptionsManager 
            title="Campañas"
            options={campaignsData.map(({id_campaign, campaign}) => ({id: id_campaign, text: campaign}))}
            addOptionMethod={addCampaign}
            updateOptionMethod={updateCampaign}
            deleteOptionMethod={deleteCampaign}
            refreshOptions={getCampaignsData}
            close={() => setShowCampaigns(false)}
            userIsAdmin={true}
          />
      }
      {
        showMarks &&
          <OptionsManager 
            title="Marcas"
            options={[]}
            refreshOptions={() => {}}
            close={() => setShowMarks(false)}
            userIsAdmin={true}
          />
      }
    </>
  )
}
