import { 
  useEffect, 
  useState 
} from 'react'

import { TitleActionBar } from '../../components/CMDBEmails'

import {
  DataCRUD,
  OptionsManager,
} from '../../components/TableData'

import { emailsDataRequest } from './emailsDataRequest'
import { 
  addArea,
  addRegister, 
  deleteArea, 
  deleteRegister, 
  updateArea, 
  updateRegister 
} from '../../api/cmdbEmails.api'

export const CMDBEmails = ({userData}) => {

  const [userIsAdmin, setUserIsAdmin] = useState(false)

  useEffect(() => {
    setUserIsAdmin(userData.permissions.includes('emails_cmdb'))
  }, [userData])

  const [areasData, setAreasData] = useState([])
  const [registersData, setRegistersData] = useState([])

  const { 
    getAreasData, 
    getRegistersData,
  } = emailsDataRequest(setAreasData, setRegistersData)

  useEffect(() => {
    console.log(registersData)
  }, [registersData])
 
  useEffect(() => {
    getAreasData()
    getRegistersData()
  }, [])

  // select filter options come from a fetch
  useEffect(() => {
    setDefaultColumns(prevColumns => prevColumns.map(column => 
      (column.meta && column.accessorKey === 'area')
      ? {...column, meta: {...column.meta, options: ['Todo', ...areasData.map(({area}) => area)]}}
      : column
    ))
  }, [areasData])

  const [defaultColumns, setDefaultColumns] = useState([
    {
      header: 'Nombre',
      accessorKey: 'name',
      size: 340
    },
    {
      header: 'Correo',
      accessorKey: 'email',
      size: 340
    },
    {
      header: 'Contraseña',
      accessorKey: 'password',
      size: 240
    },
    {
      header: 'Área',
      accessorKey: 'area',
      size: 300,
      filterFn: 'equalsString',
      // add the following options when it is an select input
      meta: {
        filterVariant: 'select',
        options: []
      }
    },
    {
      header: 'Estatus',
      accessorKey: 'status',
      size: 130,
      meta: {
        filterVariant: 'select',
        options: ['Todo', 'Activo', 'Baja']
      }
    }
  ])

  const [openAddAction, setOpenAddAction] = useState({action: () => {}})
  const [showOptionManager, setShowOptionManager] = useState(false)

  return (
    <>
      <TitleActionBar 
        addButtonAction={ openAddAction.action }
        areasButtonAction={() => setShowOptionManager(true)}
        userIsAdmin={ userIsAdmin }
      />
      <DataCRUD
        defaultColumns={ defaultColumns }
        tableData={ registersData }
        setOpenAddAction={ setOpenAddAction }
        addRowMethod={ addRegister }
        updateRowMethod= { updateRegister }
        deleteRowMethod={ deleteRegister }
        refreshData={ getRegistersData }
        userIsAdmin={ userIsAdmin }
      />
      {
        showOptionManager &&
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
            close={() => setShowOptionManager(false)}
          />
      }
    </>
  )
}