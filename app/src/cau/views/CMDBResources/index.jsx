import { useEffect, useState } from 'react'
import { TitleActionBar } from '../../components'
import { DataCRUD } from '../../components/TableData'
import { resourcesTableColumns } from './defaultColumns'
import { resourcesDataRequest } from './resourcesDataRequest'

export const CMDBResources = ({ userData }) => {

  const [defaultColumns, setDefaultColumns] = useState(resourcesTableColumns)

  const [resourcesData, setResourcesData] = useState([])

  const {
    getResourcesData
  } = resourcesDataRequest(
    setResourcesData
  )

  useEffect(() => {
    getResourcesData()
  }, [])

  const [openAddAction, setOpenAddAction] = useState({ action: () => {} })


  return (
    <>
      <TitleActionBar 
        title="CMDB Recursos Compartidos"
        buttons={
          <>
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
      <DataCRUD
        defaultColumns={defaultColumns}
        tableData={resourcesData}
        setOpenAddAction={setOpenAddAction}
        userIsAdmin={true}
      />
    </>
  )
}
