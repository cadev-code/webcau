import { 
  useEffect, 
  useState 
} from 'react'

import { 
  DataCRUD, 
  TitleActionBar 
} from '../../components/CMDBEmails'

import { emailsDataRequest } from './emailsDataRequest'
import { 
  addRegister, 
  updateRegister 
} from '../../api/cmdbEmails.api'

export const CMDBEmails = () => {

  const [areasData, setAreasData] = useState([])
  const [registersData, setRegistersData] = useState([])

  const { 
    getAreasData, 
    getRegistersData,
  } = emailsDataRequest(setAreasData, setRegistersData)
 
  useEffect(() => {
    getAreasData()
    getRegistersData()
  }, [])

  // select filter options come from a fetch
  useEffect(() => {
    setDefaultColumns(prevColumns => prevColumns.map(column => 
      (column.meta && column.meta.filterVariant === 'select')
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
      // add the following options when it is an select input
      meta: {
        filterVariant: 'select',
        options: []
      }
    }
  ])

  const [openAddAction, setOpenAddAction] = useState({action: () => {}})

  return (
    <>
      <TitleActionBar 
        addButtonAction={ openAddAction.action }
      />
      <DataCRUD 
        defaultColumns={ defaultColumns }
        tableData={ registersData }
        setOpenAddAction={ setOpenAddAction }
        addRowMethod={ addRegister }
        updateRowMethod= { updateRegister }
        refreshData={ getRegistersData }
      />
    </>
  )
}