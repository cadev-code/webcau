import { useEffect, useState } from 'react'
import { TitleActionBar } from '../../components'
import { DataCRUD, OptionsManager } from '../../components/TableData'
import { resourcesTableColumns } from './defaultColumns'
import { resourcesDataRequest } from './resourcesDataRequest'
import { addArea, addResource, deleteArea, deleteResource, updateArea, updateResource } from '../../api/cmdbResources.api'

export const CMDBResources = ({ userData }) => {

  const [userIsAdmin, setUserIsAdmin] = useState(false)
  useEffect(() => {
    setUserIsAdmin(userData.permissions.includes('resources_cmdb'))
  }, [userData])

  const [defaultColumns, setDefaultColumns] = useState(resourcesTableColumns)

  const [areasData, setAreasData] = useState([])
  const [resourcesData, setResourcesData] = useState([])

  const {
    getResourcesData,
    getAreasData
  } = resourcesDataRequest(
    setResourcesData,
    setAreasData
  )

  useEffect(() => {
    getResourcesData()
    getAreasData()
  }, [])

  useEffect(() => {
    setDefaultColumns(prevColumns => prevColumns.map(column => 
      column.accessorKey === 'area'
        ? { ...column, meta: { ...column.meta, options: ['Todo', ...areasData.map(({area}) => area)] } }
        : column  
    ))
  }, [areasData])

  const [showAreasOptions, setShowAreasOptions] = useState(false)
  const [openAddAction, setOpenAddAction] = useState({ action: () => {} })

  return (
    <>
      <TitleActionBar 
        title="CMDB Recursos Compartidos"
        buttons={
          <>
            <button
              onClick={() => setShowAreasOptions(true)}
            >
              Áreas
            </button>
            {
              userIsAdmin &&
                <button className="blue"
                  onClick={openAddAction.action}
                >
                  Agregar Recurso
                </button>
            }
          </>
        }
      />
      {
        showAreasOptions &&
          <OptionsManager
            title="Áreas"
            options={areasData.map(area => ({id: area.id_area, text: area.area}))}
            close={() => setShowAreasOptions(false)}
            addOptionMethod={addArea}
            updateOptionMethod={updateArea}
            deleteOptionMethod={deleteArea}
            refreshOptions={() => {
              getAreasData()
              getResourcesData()
            }}
            userIsAdmin={userIsAdmin}
          />
      }
      <DataCRUD
        defaultColumns={defaultColumns}
        tableData={resourcesData}
        setOpenAddAction={setOpenAddAction}
        addRowMethod={addResource}
        updateRowMethod={updateResource}
        deleteRowMethod={deleteResource}
        refreshData={() => {
          getAreasData()
          getResourcesData()
        }}
        filenameToExport="cmdb_Recursos_Compartidos"
        version="resources"
        userIsAdmin={userIsAdmin}
      />
    </>
  )
}
