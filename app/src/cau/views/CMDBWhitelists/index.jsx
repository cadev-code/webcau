import { useState, useEffect } from 'react'
import { Container, Dashboard, Main } from './styled'
import { ListMenu, ListName, ListTables } from '../../components/DashboardWhitelist'
import { getZones } from '../../api/cmdbWhitelists'
import { exportData } from './exportData'

export const CMDBWhitelists = ({ userData }) => {
  const [userIsAdmin, setUserIsAdmin] = useState(false)

  useEffect(() => {
    setUserIsAdmin(userData.permissions.includes('whitelists'))
  }, [userData])

  const [zonesData, setZonesData] = useState([])
  const [zoneSelected, setZoneSelected] = useState({})
  const [activeForm, setActiveForm] = useState(false)

  const getZonesData = async() => {
    const { data } = await getZones()
    setZonesData(data)
    data.length > 0 && setZoneSelected(data[0])
  }

  useEffect(() => {
    getZonesData()
  }, [])

  const refreshZonesData = async(actionType, newZoneData = {}) => {
    const { data } = await getZones()
    setZonesData(data)

    if(actionType === 'add') {
      setZoneSelected(data.filter(zone => zone.id_zone === newZoneData.id_zone)[0])
    } else {
      setZoneSelected(data.filter(zone => zone.id_zone === zoneSelected.id_zone)[0])
    }
  }

  // export data
  const [exportingData, setExportingData] = useState(false)
  
  return (
    <Container>
      <Dashboard>
        <ListMenu
          userIsAdmin={userIsAdmin}
          zonesData={zonesData}
          refreshData={refreshZonesData}
          zoneSelected={zoneSelected}
          setZoneSelected={setZoneSelected}
          activeForm={activeForm}
          setActiveForm={setActiveForm}
        />
        {
          zonesData.length > 0 &&
            <Main>
              <ListName
                userIsAdmin={userIsAdmin}
                zoneSelected={zoneSelected}
                refreshData={refreshZonesData}
                activeForm={activeForm}
                setActiveForm={setActiveForm}
                setExportingData={setExportingData}
              />
              <ListTables 
                userIsAdmin={userIsAdmin}
                zoneSelected={zoneSelected}
                activeForm={activeForm}
                setActiveForm={setActiveForm}
                exportingData={exportingData}
                setExportingData={setExportingData}
                exportData={exportData}
              />
            </Main>
        }
      </Dashboard>
    </Container>
  )
}
