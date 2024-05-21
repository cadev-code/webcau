import { useEffect, useState } from 'react'

import { TitleActionBar } from '../../components/TitleActionBar'
import { OptionsManager } from '../../components/TableData'

import { addArea, deleteArea, updateArea } from '../../api/cmdbComputers.api'
import { computersDataRequest } from './computersDataRequest'

// import { dataToExcel } from '../../helpers/dataToExcel'

export const CMDBComputers = ({ userData }) => {

  const [userIsAdmin, setUserIsAdmin] = useState(false)

  useEffect(() => {
    setUserIsAdmin(userData.permissions.includes('cmdb'))
  }, [userData])
  
  const [areasData, setAreasData] = useState([])

  const {
    getAreasData
  } = computersDataRequest(setAreasData)

  useEffect(() => {
    getAreasData()
  }, [])

  const [showAreasManager, setShowAreasManager] = useState(false)

  return (
    <>
      <TitleActionBar
        title="CMDB Equipos"
        buttons={
          <>
            <button>
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
    </>
  )
} 