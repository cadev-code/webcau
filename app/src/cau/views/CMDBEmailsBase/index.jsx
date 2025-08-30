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
} from '../../api/baseEmails.api'
import { columnsData } from './columnsData'
import { addSite, deleteSite, updateSite } from '../../api/baseEmails.api'

export const CMDBEmailsBase = ({userData}) => {

  const [userIsAdmin, setUserIsAdmin] = useState(false)

  useEffect(() => {
    setUserIsAdmin(userData.permissions.includes('emails_base'))
  }, [userData])

  const [areasData, setAreasData] = useState([])
  const [sitesData, setSitesData] = useState([])
  const [listsData, setListsData] = useState([])
  const [registersData, setRegistersData] = useState([])

  const { 
    getAreasData,
    getSitesData,
    getListsData,
    getRegistersData
  } = emailsDataRequest(
    setAreasData, 
    setSitesData,
    setListsData, 
    setRegistersData
  )

  useEffect(() => {
    getAreasData()
    getSitesData()
    getListsData()
    getRegistersData()
  }, [])

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
      (column.meta && column.accessorKey === 'site')
      ? {...column, meta: {...column.meta, options: ['Todo', ...sitesData.map(({site}) => site)]}}
      : column
    ))
  }, [sitesData])

  useEffect(() => {
    setDefaultColumns(prevColumns => prevColumns.map(column => 
      (column.meta && column.accessorKey === 'lists')
      ? {...column, meta: {...column.meta, options: ['Todo', ...listsData.map(({list}) => list)]}}
      : column
    ))
  }, [listsData])
  
  const [openAddAction, setOpenAddAction] = useState({action: () => {}})

  const [showAreasManager, setShowAreasManager] = useState(false)
  const [showSitesManager, setShowSitesManager] = useState(false)
  const [showListsManager, setShowListsManager] = useState(false)

  return (
    <>
      <TitleActionBar 
        title="Activos - Correos"
        userProfile={userData.profile}
        disableChangeSite={true}
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
                  <button
                    onClick={() => setShowSitesManager(true)}
                  >
                    Sitios
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
        version='base_emails'
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
          />
      }
      {
        showSitesManager &&
          <OptionsManager
            title="Sitios"
            options={ sitesData.map(site => ({id: site.id_site, text: site.site })) }
            addOptionMethod={ addSite }
            updateOptionMethod={ updateSite }
            deleteOptionMethod={ deleteSite }
            refreshOptions={() => {
              getSitesData()
              getRegistersData()
            }}
            userIsAdmin={ userIsAdmin }
            close={() => setShowSitesManager(false)}
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
          />
      }
    </>
  )
}