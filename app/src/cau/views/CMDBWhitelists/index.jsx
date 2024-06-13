import { useState, useEffect } from 'react'

import { Container, Dashboard, Main } from './styled'
import { ListMenu, ListName } from '../../components/DashboardWhitelist'

import { getZones } from '../../api/cmdbWhitelists'

export const CMDBWhitelists = ({ userData }) => {
  const [zonesData, setZonesData] = useState([])

  const getZonesData = async() => {
    const { data } = await getZones()
    setZonesData(data)
  }

  useEffect(() => {
    getZonesData()
  }, [])

  const [zoneSelected, setZoneSelected] = useState({})
  useEffect(() => { // corregir
    setZoneSelected(zonesData[0])
  }, [zonesData])

  useEffect(() => {
    console.log(zoneSelected)
  }, [zoneSelected])
  
  
  return (
    <Container>
      <Dashboard>
        <ListMenu
          zonesData={zonesData}
          refreshData={getZonesData}
          zoneSelected={zoneSelected}
          setZoneSelected={setZoneSelected}
        />
        <Main>
          <ListName 
            zoneSelected={zoneSelected}
            refreshData={getZonesData}
          />
        </Main>
      </Dashboard>
    </Container>
  )
}
