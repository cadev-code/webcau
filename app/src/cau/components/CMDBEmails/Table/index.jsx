import { useEffect, useState } from 'react'

import { TableContainer } from './styled'
import { ArrowCircleDown, ArrowCircleUp, ArrowDownward, ArrowUpward } from '@mui/icons-material'

import { 
  flexRender,
  getCoreRowModel, 
  getSortedRowModel, 
  useReactTable 
} from '@tanstack/react-table'

export const Table = ({ 
  tableData=[]
}) => {

  const defautlColumns = [
    {
      header: 'Nombre',
      accessorKey: 'name',
      size: 320
    },
    {
      header: 'Correo',
      accessorKey: 'email',
      size: 320
    },
    {
      header: 'Contraseña',
      accessorKey: 'password',
      size: 220
    },
    {
      header: 'Área',
      accessorKey: 'area',
      size: 280
    }
  ]

  const [data, setData] = useState([])
  const [columns, setColumns] = useState([...defautlColumns])

  // sorting
  const [sorting, setSorting] = useState([])

  useEffect(() => {
    setData(tableData)
  }, [tableData])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting
    },
    onSortingChange: setSorting
  })

  return (
    <TableContainer>
        <table>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}
                    style={{
                      width: header.getSize()
                    }}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <div>
                      {header.isPlaceholder
                        ? null: flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {
                          {'asc': <ArrowUpward />, 'desc': <ArrowDownward /> }[
                            header.column.getIsSorted() ?? null
                          ]
                        }
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}
                    style={{
                      width: cell.column.getSize()
                    }}
                  >
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
    </TableContainer>
  )
}