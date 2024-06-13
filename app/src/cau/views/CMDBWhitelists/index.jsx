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
  
  return (
    <Container>
      <Dashboard>
        <ListMenu
          zonesData={zonesData}
          refreshData={getZonesData}
        />
        <Main>
          <ListName />
        </Main>
      </Dashboard>
    </Container>
  )
}
