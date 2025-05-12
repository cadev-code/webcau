import { 
  useEffect, 
  useState 
} from 'react'

import { TitleActionBar } from '../../components'

import {
  DataCRUD,
  OptionsManager,
} from '../../components/TableData'

import { emailsDataRequest } from './emailsDataRequest'

import { 
  addArea,
  addList,
  addRegister, 
  deleteArea, 
  deleteList, 
  deleteRegister, 
  updateArea, 
  updateList, 
  updateRegister
} from '../../api/cmdbEmails.api'
import { columnsData } from './columnsData'
import { useSiteValueByProfile } from '../../hooks/useSiteValueByProfile'

export const CMDBEmails = ({userData}) => {

  const [userIsAdmin, setUserIsAdmin] = useState(false)

  useEffect(() => {
    setUserIsAdmin(userData.permissions.includes('emails_cmdb'))
  }, [userData])

  const { siteValue, setSiteValue } = useSiteValueByProfile(userData.profile)

  const [areasData, setAreasData] = useState([])
  const [listsData, setListsData] = useState([])
  const [registersData, setRegistersData] = useState([])

  const { 
    getAreasData, 
    getListsData,
    getRegistersData
  } = emailsDataRequest(
    setAreasData, 
    setListsData, 
    setRegistersData,
    siteValue[0]
  )
 
  useEffect(() => {
    getAreasData()
    getRegistersData()
    getListsData()
  }, [siteValue])

  const [defaultColumns, setDefaultColumns] = useState(columnsData)

  useEffect(() => {
    setDefaultColumns(prevColumns => prevColumns.map(column => 
      (column.meta && column.accessorKey === 'area')
      ? {...column, meta: {...column.meta, options: ['Todo', ...areasData.map(({area}) => area)]}}
      : column
    ))
  }, [areasData])

  useEffect(() => {
    setDefaultColumns(prevColumns => prevColumns.map(column => 
      (column.meta && column.accessorKey === 'list')
      ? {...column, meta: {...column.meta, options: ['Todo', ...listsData.map(({list}) => list)]}}
      : column
    ))
  }, [listsData])

  const [openAddAction, setOpenAddAction] = useState({action: () => {}})

  const [showAreasManager, setShowAreasManager] = useState(false)
  const [showListsManager, setShowListsManager] = useState(false)

  return (
    <>
      <TitleActionBar 
        title="CMDB Correos"
        siteValue={siteValue}
        setSiteValue={setSiteValue}
        userProfile={userData.profile}
        buttons={
          <>
            <button 
              onClick={() => setShowListsManager(true)}
            >
              Listas de Distribución
            </button>
            {
              userIsAdmin &&
                <>
                  <button
                    onClick={() => setShowAreasManager(true)}
                  >
                    Áreas
                  </button>
                  <button className="blue"
                    onClick={openAddAction.action}
                  >
                    Agregar Correo
                  </button>
                </>
            }
          </>
        }
      />
      <DataCRUD
        defaultColumns={ defaultColumns }
        tableData={ registersData }
        setOpenAddAction={ setOpenAddAction }
        addRowMethod={ addRegister }
        updateRowMethod={ updateRegister }
        deleteRowMethod={ deleteRegister }
        refreshData={ getRegistersData }
        filenameToExport="cmdbCorreos"
        userIsAdmin={ userIsAdmin }
        site={siteValue[0]}
      />
      {
        showAreasManager &&
          <OptionsManager
            title="Áreas"
            options={ areasData.map(area => ({id: area.id_area, text: area.area })) }
            addOptionMethod={ addArea }
            updateOptionMethod={ updateArea }
            deleteOptionMethod={ deleteArea }
            refreshOptions={() => {
              getAreasData()
              getRegistersData()
            }}
            userIsAdmin={ userIsAdmin }
            close={() => setShowAreasManager(false)}
            site={siteValue[0]}
          />
      }
      {
        showListsManager &&
          <OptionsManager 
            title="Listas de Distribución"
            options={ listsData.map(list => ({id: list.id_list, text: list.list})) }
            addOptionMethod={ addList }
            updateOptionMethod={ updateList }
            deleteOptionMethod={ deleteList }
            refreshOptions={() => {
              getListsData()
              getRegistersData()
            }}
            userIsAdmin={ userIsAdmin }
            close={() => setShowListsManager(false)}
            site={siteValue[0]}
          />
      }
    </>
  )
}