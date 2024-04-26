import { useEffect, useState } from 'react'

import { TableContainer } from './styled'

import { 
  flexRender,
  getCoreRowModel, 
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

  useEffect(() => {
    setData(tableData)
  }, [tableData])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
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
                  >
                    {header.isPlaceholder
                      ? null: flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
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