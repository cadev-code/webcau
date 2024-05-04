import { 
  useEffect, 
  useState 
} from 'react'

import { TableContainer } from './styled'
import { Table, TitleActionBar } from '../../components/CMDBEmails'

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
      meta: {
        filterVariant: 'select',
        options: []
      }
    }
  ])

  return (
    <>
      <TitleActionBar />
      <TableContainer>
        <Table
          tableData={ registersData }
          defaultColumns={ defaultColumns }
        />
      </TableContainer>
    </>
  )
}