import React, { useEffect, useState } from 'react'
import { TitleActionBar } from '../../components'
import { DataCRUD, OptionsManager } from '../../components/TableData'
import { extensionsDataRequest } from './extensionsDataRequest'
import { addArea, addExtension, addSite, addType, deleteArea, deleteExtension, deleteSite, deleteType, updateArea, updateExtension, updateSite, updateType } from '../../api/cmdbExtensions.api'
import { extensionsTableColumns } from './defaultColumns'

export const CMDBExtensions = ({ userData }) => {

  const [userIsAdmin, setUserIsAdmin] = useState(false)

  useEffect(() => {
    setUserIsAdmin(userData.permissions.includes('extensions_cmdb'))
  }, [userData])

  const [areasData, setAreasData] = useState([])
  const [typesData, setTypesData] = useState([])
  const [sitesData, setSitesData] = useState([])
  const [extensionsData, setExtensionsData] = useState([])

  const [showAreas, setShowAreas] = useState(false)
  const [showTypes, setShowTypes] = useState(false)
  const [showSites, setShowSites] = useState(false)

  const {
    getAreasData,
    getTypesData,
    getSitesData,
    getExtensionsData
  } = extensionsDataRequest(setAreasData, setTypesData, setSitesData, setExtensionsData)

  useEffect(() => {
    getAreasData()
    getTypesData()
    getSitesData()
    getExtensionsData()
  }, [])

  const [openAddAction, setOpenAddAction] = useState({action: () => {}})

  const [defaultColumns, setDefaultColumns] = useState(extensionsTableColumns)

  useEffect(() => {
    if(userIsAdmin && defaultColumns.filter(column => column.accessorKey === 'authcode').length === 0) {
      const columns = defaultColumns
      columns.splice(4,0,{ header: 'Authcodes', accessorKey: 'authcode', size: 200, required: true })
      setDefaultColumns(columns)
    }
  }, [userIsAdmin])

  useEffect(() => {
    if(!userIsAdmin && defaultColumns.length !== 0 && extensionsData[0]?.authcode) {
      setExtensionsData(prevData => prevData.map(({authcode, ...rest}) => rest))
    }
  }, [extensionsData])

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
            {userIsAdmin && (
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
                <button className="blue"
                  onClick={openAddAction.action}
                >
                  Agregar Extensión
                </button>
              </>
            )}
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
          userIsAdmin={userIsAdmin}
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
          userIsAdmin={userIsAdmin}
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
          userIsAdmin={userIsAdmin}
        />
      )}
      <DataCRUD 
        defaultColumns={defaultColumns}
        tableData={extensionsData}
        addRowMethod={addExtension}
        updateRowMethod={updateExtension}
        deleteRowMethod={deleteExtension}
        refreshData={getExtensionsData}
        setOpenAddAction={setOpenAddAction}
        filenameToExport="cmdb_Extensions"
        userIsAdmin={userIsAdmin}
      />
    </>
  )
}
