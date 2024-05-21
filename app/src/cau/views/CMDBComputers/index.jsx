import { useEffect, useState } from 'react'

import { TitleActionBar } from '../../components/TitleActionBar'
import { OptionsManager } from '../../components/TableData'

import { 
  addArea, 
  addLicense, 
  addModel, 
  deleteArea, 
  deleteLicense, 
  deleteModel, 
  updateArea, 
  updateLicense, 
  updateModel
} from '../../api/cmdbComputers.api'
import { computersDataRequest } from './computersDataRequest'

// import { dataToExcel } from '../../helpers/dataToExcel'

export const CMDBComputers = ({ userData }) => {

  const [userIsAdmin, setUserIsAdmin] = useState(false)

  useEffect(() => {
    setUserIsAdmin(userData.permissions.includes('cmdb'))
  }, [userData])
  
  const [areasData, setAreasData] = useState([])
  const [licensesData, setLicensesData] = useState([])
  const [modelsData, setModelsData] = useState([])

  const {
    getAreasData,
    getLicensesData,
    getModelsData
  } = computersDataRequest(
    setAreasData,
    setLicensesData,
    setModelsData
  )

  useEffect(() => {
    getAreasData()
    getLicensesData()
    getModelsData()
  }, [])

  const [showAreasManager, setShowAreasManager] = useState(false)
  const [showLicensesManager, setShowLicensesManager] = useState(false)
  const [showModelsManager, setShowModelsManager] = useState(false)

  return (
    <>
      <TitleActionBar
        title="CMDB Equipos"
        buttons={
          <>
            <button
              onClick={() => setShowLicensesManager(true)}
            >
              Licencias Siphone
            </button>
            <button
              onClick={() => setShowModelsManager(true)}
            >
              Modelos de Equipo
            </button>
            {
              userIsAdmin &&
                <>
                  <button
                    onClick={() => setShowAreasManager(true)}
                  >
                    Áreas
                  </button>
                  <button className="blue">
                    Agregar Equipo
                  </button> 
                </>
            }
          </>
        }
      />
      {
        showAreasManager &&
          <OptionsManager
            title="Áreas"
            options={ areasData.map(area => ({id: area.id_area, text: area.area})) }
            addOptionMethod={ addArea }
            updateOptionMethod={ updateArea }
            deleteOptionMethod={ deleteArea }
            refreshOptions={() => {
              getAreasData()
              // añadir actualización de registros
            }}
            userIsAdmin={ userIsAdmin }
            close={() => setShowAreasManager(false)}
          />
      }
      {
        showLicensesManager &&
          <OptionsManager 
            title="Licencias Siphone"
            options={ licensesData.map(license => ({id: license.id_license, text: license.license})) }
            addOptionMethod={ addLicense }
            updateOptionMethod={ updateLicense }
            deleteOptionMethod={ deleteLicense }
            refreshOptions={() => {
              getLicensesData()
              // añadir actualización de registros
            }}
            userIsAdmin={ userIsAdmin }
            close={() => setShowLicensesManager(false)}
          />
      }
      {
        showModelsManager &&
          <OptionsManager 
            title="Modelos de Equipo"
            options={ modelsData.map(model => ({id: model.id_model, text: model.model})) }
            addOptionMethod={ addModel }
            updateOptionMethod={ updateModel }
            deleteOptionMethod={ deleteModel }
            refreshOptions={() => {
              getModelsData()
              // añadir actualización de registros
            }}
            userIsAdmin={ userIsAdmin }
            close={() => setShowModelsManager(false)}
          />
      }
    </>
  )
} 