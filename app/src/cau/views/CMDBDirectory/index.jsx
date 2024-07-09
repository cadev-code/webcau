import { useEffect, useState } from 'react'
import { TitleActionBar } from '../../components'
import { DataCRUD, OptionsManager } from '../../components/TableData'
import { directoryDataRequest } from './directoryDataRequest'
import { addArea, addDomain, addUO, addUser, deleteArea, deleteDomain, deleteUO, deleteUser, updateArea, updateDomain, updateUO, updateUser } from '../../api/cmdbDirectory.api'
import { directoryTableColumns } from './defaultColumns'

export const CMDBDirectory = ({userData}) => {

  const [uoData, setUoData] = useState([])
  const [domainsData, setDomainsData] = useState([])
  const [areasData, setAreasData] = useState([])
  const [usersData, setUsersData] = useState([])

  const {
    getUOData,
    getDomainsData,
    getAreasData,
    getUsersData
  } = directoryDataRequest(
    setUoData,
    setDomainsData,
    setAreasData,
    setUsersData
  )
  
  useEffect(() => {
    getUOData()
    getDomainsData()
    getAreasData()
    getUsersData()
  }, [])

  const [defaultColumns, setDefaultColumns] = useState(directoryTableColumns)

  useEffect(() => {
    setDefaultColumns(prevColumns => prevColumns.map(column => 
      column.accessorKey === 'domain'
        ? {...column, meta: {...column.meta, options: ['Todo', ...domainsData.map(({domain}) => domain)]}}
        : column 
    ))
  }, [domainsData])

  useEffect(() => {
    setDefaultColumns(prevColumns => prevColumns.map(column => 
      column.accessorKey === 'uo'
        ? {...column, meta: {...column.meta, options: ['Todo', ...uoData.map(({uo}) => uo)]}}
        : column  
    ))
  }, [uoData])

  useEffect(() => {
    setDefaultColumns(prevColumns => prevColumns.map(column => 
      column.accessorKey === 'area'
        ? {...column, meta: {...column.meta, options: ['Todo', ...areasData.map(({area}) => area)]}}
        : column
    ))
  }, [areasData])
  
  const [showUoManager, setShowUoManager] = useState(false)
  const [showDomainsManager, setShowDomainsManager] = useState(false)
  const [showAreasManager, setShowAreasManager] = useState(false)

  const [openAddAction, setOpenAddAction] = useState({ action: () => {} })

  return (
    <>
      <TitleActionBar 
        title="CMDB Active Directory"
        buttons={
          <>
            <button
              onClick={() => setShowUoManager(true)}
            >
              Unidades Organizacionales
            </button>
            <button
              onClick={() => setShowDomainsManager(true)}
            >
              Dominios
            </button>
            {
              <>
                <button
                  onClick={() => setShowAreasManager(true)}
                >
                  Áreas
                </button>
                <button className="blue"
                  onClick={openAddAction.action}
                >
                  Agregar Usuario
                </button>
              </>
            }
          </>
        }
      />
      {
        showUoManager &&
          <OptionsManager 
            title="Unidades Organizacionales"
            options={uoData.map(uo => ({id: uo.id_uo, text: uo.uo}))}
            close={() => setShowUoManager(false)}
            addOptionMethod={addUO}
            updateOptionMethod={updateUO}
            deleteOptionMethod={deleteUO}
            refreshOptions={() => {
              getUOData()
              // añadir getUsersData()
            }}
            userIsAdmin={true}
          />
      }
      {
        showDomainsManager &&
          <OptionsManager 
            title="Dominios"
            options={domainsData.map(domain => ({id: domain.id_domain, text: domain.domain}))}
            close={() => setShowDomainsManager(false)}
            addOptionMethod={addDomain}
            updateOptionMethod={updateDomain}
            deleteOptionMethod={deleteDomain}
            refreshOptions={() => {
              getDomainsData()
              // añadir getUsersData()
            }}
            userIsAdmin={true}
          />
      }
      {
        showAreasManager && 
          <OptionsManager 
            title="Áreas"
            options={areasData.map(area => ({id: area.id_area, text: area.area}))}
            close={() => setShowAreasManager(false)}
            addOptionMethod={addArea}
            updateOptionMethod={updateArea}
            deleteOptionMethod={deleteArea}
            refreshOptions={() => {
              getAreasData()
              // añadir getUsersData()
            }}
            userIsAdmin={true}
          />
      }
      <DataCRUD 
        defaultColumns={defaultColumns}
        tableData={usersData}
        setOpenAddAction={setOpenAddAction}
        addRowMethod={addUser}
        updateRowMethod={updateUser}
        refreshData={getUsersData}
        userIsAdmin={true}
      />
    </>
  )
}
