import { 
  useEffect, 
  useState 
} from 'react'

import { TableContainer } from './styled'
import { ModalData, Table, TitleActionBar } from '../../components/CMDBEmails'

import { emailsDataRequest } from './emailsDataRequest'

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

  // only table
  const [openModal, setOpenModal] = useState(false)
  const [dataToShow, setDataToShow] = useState({})
  const [boxes, setBoxes] = useState([])

  useEffect(() => {
    setBoxes(defaultColumns.map(column => {
      // if defaultColumns props change, add them
      const { size, ...rest } = column
      return {...rest}
    }))
  }, [defaultColumns])

  const showModalData = (data) => {
    setOpenModal(true)
    setDataToShow(data)
  }

  const closeModalData = () => {
    setOpenModal(false)
    setDataToShow({})
  }

  return (
    <>
      <TitleActionBar />
      <TableContainer>
        <Table
          tableData={ registersData }
          defaultColumns={ defaultColumns }
          showModalData={ showModalData }
        />
        {
          openModal &&
            <ModalData
              data={ dataToShow }
              boxes={ boxes }
              closeModalData={ closeModalData }
            />
        }
      </TableContainer>
    </>
  )
}