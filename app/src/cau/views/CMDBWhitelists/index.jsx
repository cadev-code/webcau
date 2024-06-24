import { useState, useEffect } from 'react'
import { Container, Dashboard, Main } from './styled'
import { ListMenu, ListName, ListTables } from '../../components/DashboardWhitelist'
import { getZones } from '../../api/cmdbWhitelists'

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
              />
              <ListTables 
                userIsAdmin={userIsAdmin}
                zoneSelected={zoneSelected}
                activeForm={activeForm}
                setActiveForm={setActiveForm}
              />
            </Main>
        }
      </Dashboard>
    </Container>
  )
}
