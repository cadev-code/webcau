import { useState, useEffect } from 'react'

import { 
  Container, 
  Dashboard 
} from './styled'
import { ListMenu } from '../../components/DashboardWhitelist'

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

  useEffect(() => {
    console.log(zonesData)
  }, [userData])
  
  return (
    <Container>
      <Dashboard>
        <ListMenu 
          listData={[]}
        />
      </Dashboard>
    </Container>
  )
}
