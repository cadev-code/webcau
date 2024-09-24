import { useEffect, useState } from 'react'
import { TitleActionBar } from '../../components'
import { OptionsManager } from '../../components/TableData'
import { laptopsDataRequest } from './laptopsDataRequest'
import { addArea, deleteArea, updateArea } from '../../api/cmdbLaptops.api'

export const CMDBLaptops = () => {

  const [areasData, setAreasData] = useState([])
  const [marksData, setMarksData] = useState([])

  const [showAreas, setShowAreas] = useState(false)
  const [showMarks, setShowMarks] = useState(true)

  const { getAreasData, getMarksData } = laptopsDataRequest(
    setAreasData,
    setMarksData
  )

  useEffect(() => {
    getAreasData()
    getMarksData()
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
            <button onClick={() => setShowMarks(true)}>
              Marcas
            </button>
          </>
        }
      />
      {showAreas && (
        <OptionsManager
          title="Áreas"
          options={areasData.map(({id_area, area}) => ({id: id_area, text: area}))}
          addOptionMethod={addArea}
          updateOptionMethod={updateArea}
          deleteOptionMethod={deleteArea}
          refreshOptions={getAreasData}
          close={() => setShowAreas(false)}
          userIsAdmin={true}
        />
      )}
      {showMarks && (
        <OptionsManager 
          title="Marcas"
          options={marksData.map(({id_mark, mark}) => ({id: id_mark, text: mark}))}
          close={() => setShowMarks(false)}
          userIsAdmin={true}
        />
      )}
    </>
  )
}