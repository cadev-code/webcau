import React, { useEffect, useState } from 'react'
import { TitleActionBar } from '../../components'
import { OptionsManager } from '../../components/TableData'
import { extensionsDataRequest } from './extensionsDataRequest'
import { addArea, addType, deleteArea, deleteType, updateArea, updateType } from '../../api/cmdbExtensions.api'

export const CMDBExtensions = () => {

  const [areasData, setAreasData] = useState([])
  const [typesData, setTypesData] = useState([])
  const [sitesData, setSitesData] = useState([])

  const [showAreas, setShowAreas] = useState(false)
  const [showTypes, setShowTypes] = useState(false)
  const [showSites, setShowSites] = useState(false)

  const {
    getAreasData,
    getTypesData,
    getSitesData
  } = extensionsDataRequest(setAreasData, setTypesData, setSitesData)

  useEffect(() => {
    getAreasData()
    getTypesData()
    getSitesData()
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
            <button
              onClick={() => setShowTypes(true)}
            >
              Tipos de Extensión
            </button>
            <button
              onClick={() => setShowSites(true)}
            >
              Edificios
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
      {showTypes && (
        <OptionsManager 
          title="Tipos de Extensión"
          options={typesData.map(({id_type, type}) => ({id: id_type, text: type}))}
          addOptionMethod={addType}
          updateOptionMethod={updateType}
          deleteOptionMethod={deleteType}
          refreshOptions={getTypesData}
          close={() => setShowTypes(false)}
          userIsAdmin={true}
        />
      )}
      {showSites && (
        <OptionsManager 
          title="Edificios"
          options={sitesData.map(({id_site, site}) => ({id: id_site, text: site}))}
          addOptionMethod={() => {}}
          updateOptionMethod={() => {}}
          deleteOptionMethod={() => {}}
          refreshOptions={() => {}}
          close={() => setShowSites(false)}
          userIsAdmin={true}
        />
      )}
    </>
  )
}
