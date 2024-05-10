import { 
  useEffect, 
  useState 
} from 'react'

import { 
  DataCRUD, 
  OptionsManager, 
  TitleActionBar 
} from '../../components/CMDBEmails'

import { emailsDataRequest } from './emailsDataRequest'
import { 
  addRegister, 
  deleteRegister, 
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
  const [showOptionManager, setShowOptionManager] = useState(true)

  return (
    <>
      <TitleActionBar 
        addButtonAction={ openAddAction.action }
        areasButtonAction={() => setShowOptionManager(true)}
      />
      <DataCRUD 
        defaultColumns={ defaultColumns }
        tableData={ registersData }
        setOpenAddAction={ setOpenAddAction }
        addRowMethod={ addRegister }
        updateRowMethod= { updateRegister }
        deleteRowMethod={ deleteRegister }
        refreshData={ getRegistersData }
      />
      {
        showOptionManager &&
          <OptionsManager
            title="Áreas"
            options={ areasData.map(area => ({id: area.id_area, text: area.area })) }
            refreshOptions={ getAreasData }
            close={() => setShowOptionManager(false)}
          />
      }
    </>
  )
}