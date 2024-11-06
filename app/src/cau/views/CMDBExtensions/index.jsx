import React, { useEffect, useState } from 'react'
import { TitleActionBar } from '../../components'
import { DataCRUD, OptionsManager } from '../../components/TableData'
import { extensionsDataRequest } from './extensionsDataRequest'
import { addArea, addSite, addType, deleteArea, deleteSite, deleteType, updateArea, updateSite, updateType } from '../../api/cmdbExtensions.api'
import { extensionsTableColumns } from './defaultColumns'

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

  const [openAddAction, setOpenAddAction] = useState({action: () => {}})

  const [defaultColumns, setDefaultColumns] = useState(extensionsTableColumns)

  useEffect(() => {
    setDefaultColumns(prevColumns => prevColumns.map(column => (
      column.accessorKey === 'area'
        ? {...column, meta: { ...column.meta, options: ['Todo', ...areasData.map(({area}) => area)] }}
        : column
      )))
  }, [areasData])

  useEffect(() => {
    setDefaultColumns(prevColumns => prevColumns.map(column => (
      column.accessorKey === 'type'
        ? {...column, meta: { ...column.meta, options: ['Todo', ...typesData.map(({type}) => type)] }}
        : column
      )))
  }, [typesData])

  useEffect(() => {
    setDefaultColumns(prevColumns => prevColumns.map(column => (
      column.accessorKey === 'site'
        ? {...column, meta: { ...column.meta, options: ['Todo', ...sitesData.map(({site}) => site)] }}
        : column
      )))
  }, [sitesData])

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
          addOptionMethod={addSite}
          updateOptionMethod={updateSite}
          deleteOptionMethod={deleteSite}
          refreshOptions={getSitesData}
          close={() => setShowSites(false)}
          userIsAdmin={true}
        />
      )}
      <DataCRUD 
        defaultColumns={defaultColumns}
        tableData={[]}
        addRowMethod={() => {}}
        updateRowMethod={() => {}}
        deleteRowMethod={() => {}}
        refreshData={() => {}}
        setOpenAddAction={setOpenAddAction}
        filenameToExport="cmdb_Extensions"
        userIsAdmin={true}
      />
    </>
  )
}
