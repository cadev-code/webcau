import { useEffect, useState } from 'react'
import { TitleActionBar } from '../../components'
import { OptionsManager } from '../../components/TableData'
import { laptopsDataRequest } from './laptopsDataRequest'

export const CMDBLaptops = () => {

  const [areasData, setAreasData] = useState([])

  const [showAreas, setShowAreas] = useState(true)

  const { getAreasData } = laptopsDataRequest(
    setAreasData,
  )

  useEffect(() => {
    getAreasData()
  }, [])

  return (
    <>
      <TitleActionBar 
        title="CMDB Laptops"
        buttons={
          <>
            <button onClick={() => setShowAreas(true)}>
              Áreas
            </button>
          </>
        }
      />
      {showAreas && (
        <OptionsManager
          title="Áreas"
          options={areasData.map(({id_area, area}) => ({id: id_area, text: area}))}
          close={() => setShowAreas(false)}
          userIsAdmin={true}
        />
      )}
    </>
  )
}