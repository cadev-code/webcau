import { useState, useEffect } from 'react'
import { Container, Dashboard, Main } from './styled'
import { ListMenu, ListName, ListTables } from '../../components/DashboardWhitelist'
import { getZones } from '../../api/cmdbWhitelists'

export const CMDBWhitelists = ({ userData }) => {
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

  const refreshZonesData = async(actionType) => {
    const { data } = await getZones()
    setZonesData(data)

    if(actionType === 'add') {
      setZoneSelected(data[0])
    }

    if(actionType === 'update') {
      setZoneSelected(data.filter(zone => zone.id_zone === zoneSelected.id_zone)[0])
    }
  }
  
  return (
    <Container>
      <Dashboard>
        <ListMenu
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
                zoneSelected={zoneSelected}
                refreshData={refreshZonesData}
                activeForm={activeForm}
                setActiveForm={setActiveForm}
              />
              <ListTables />
            </Main>
        }
      </Dashboard>
    </Container>
  )
}
