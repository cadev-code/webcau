import { useEffect, useState } from 'react'

import { TitleActionBar } from '../../components/TitleActionBar'
import { OptionsManager } from '../../components/TableData'

import { 
  addArea, 
  addLicense, 
  deleteArea, 
  deleteLicense, 
  updateArea, 
  updateLicense 
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

  const {
    getAreasData,
    getLicensesData
  } = computersDataRequest(
    setAreasData,
    setLicensesData
  )

  useEffect(() => {
    getAreasData()
    getLicensesData()
  }, [])

  const [showAreasManager, setShowAreasManager] = useState(false)
  const [showLicensesManager, setShowLicensesManager] = useState(false)

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
    </>
  )
} 