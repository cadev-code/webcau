import { useEffect, useState } from 'react'
import { TitleActionBar } from '../../components'
import { OptionsManager } from '../../components/TableData/OptionsManager'
import { biometricsDataRequest } from './biometricsDataRequest'
import { addCampaign, addMark, deleteCampaign, deleteMark, updateCampaign, updateMark } from '../../api/cmdbBiometrics.api'

export const CMDBBiometrics = () => {

  const [campaignsData, setCampaignsData] = useState([])
  const [marksData, setMarksData] = useState([])
  const [modelsData, setModelsData] = useState([])

  const [showCampaigns, setShowCampaigns] = useState(false)
  const [showMarks, setShowMarks] = useState(false)
  const [showModels, setShowModels] = useState(true)

  const { 
    getCampaignsData,
    getMarksData
  } = biometricsDataRequest(setCampaignsData, setMarksData)

  useEffect(() => {
    getCampaignsData()
    getMarksData()
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
            <button onClick={() => setShowModels(true)}>
              Modelos
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
            options={marksData.map(({id_mark, mark}) => ({id: id_mark, text: mark}))}
            addOptionMethod={addMark}
            updateOptionMethod={updateMark}
            deleteOptionMethod={deleteMark}
            refreshOptions={getMarksData}
            close={() => setShowMarks(false)}
            userIsAdmin={true}
          />
      }
      {
        showModels &&
          <OptionsManager 
            title="Modelos"
            options={[]}
            refreshOptions={() => {}}
            close={() => setShowModels(false)}
            userIsAdmin={true}
          />
      }
    </>
  )
}
