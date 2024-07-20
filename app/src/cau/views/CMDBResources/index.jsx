import { useEffect, useState } from 'react'
import { TitleActionBar } from '../../components'
import { DataCRUD, OptionsManager } from '../../components/TableData'
import { resourcesTableColumns } from './defaultColumns'
import { resourcesDataRequest } from './resourcesDataRequest'
import { addArea, deleteArea, updateArea } from '../../api/cmdbResources.api'

export const CMDBResources = ({ userData }) => {

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

  const [showAreasOptions, setShowAreasOptions] = useState(true)

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
              // agregar permisos de admin
              true &&
                <button className="blue"
                  onClick={() => {}}
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
            userIsAdmin={true}
          />
      }
      <DataCRUD
        defaultColumns={defaultColumns}
        tableData={resourcesData}
        setOpenAddAction={setOpenAddAction}
        userIsAdmin={true}
      />
    </>
  )
}
