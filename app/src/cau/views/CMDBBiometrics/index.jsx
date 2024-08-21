import { useState } from 'react'
import { TitleActionBar } from '../../components'
import { OptionsManager } from '../../components/TableData/OptionsManager'

export const CMDBBiometrics = () => {

  const [showCampaigns, setShowCampaigns] = useState(true)

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
