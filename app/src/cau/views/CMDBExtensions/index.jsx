import React, { useEffect, useState } from 'react'
import { TitleActionBar } from '../../components'
import { OptionsManager } from '../../components/TableData'
import { extensionsDataRequest } from './extensionsDataRequest'
import { addArea, deleteArea, updateArea } from '../../api/cmdbExtensions.api'

export const CMDBExtensions = () => {

  const [areasData, setAreasData] = useState([])

  const [showAreas, setShowAreas] = useState(false)

  const {
    getAreasData
  } = extensionsDataRequest(setAreasData)

  useEffect(() => {
    getAreasData()
  }, [])

  return (
    <>
      <TitleActionBar 
        title="CMDB Extensiones"
        buttons={
          <>
            <button
              onClick={() => setShowAreas(true)}
            >
              Areas
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
    </>
  )
}
