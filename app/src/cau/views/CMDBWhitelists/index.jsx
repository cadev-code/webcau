import { useState, useEffect } from 'react'

import { Container, Dashboard, Main } from './styled'
import { ListMenu, ListName } from '../../components/DashboardWhitelist'

import { getZones } from '../../api/cmdbWhitelists'

export const CMDBWhitelists = ({ userData }) => {
  const [zonesData, setZonesData] = useState([])

  const getZonesData = async() => {
    const { data } = await getZones()
    setZonesData(data)
    setZoneSelected(data[0])
  }

  const refreshZonesData = async(actionType) => {
    const { data } = await getZones()
    setZonesData(data)

    if(actionType === 'update') {
      setZoneSelected(data.filter(zone => zone.id_zone === zoneSelected.id_zone)[0])
    }
  }

  useEffect(() => {
    getZonesData()
  }, [])

  const [zoneSelected, setZoneSelected] = useState({})

  useEffect(() => {
    console.log(zoneSelected)
  }, [zoneSelected])
  
  
  return (
    <Container>
      <Dashboard>
        <ListMenu
          zonesData={zonesData}
          refreshData={refreshZonesData}
          zoneSelected={zoneSelected}
          setZoneSelected={setZoneSelected}
        />
        <Main>
          <ListName 
            zoneSelected={zoneSelected}
            refreshData={refreshZonesData}
          />
        </Main>
      </Dashboard>
    </Container>
  )
}
