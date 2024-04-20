import { useEffect, useState } from 'react'

import { TableContainer } from './styled'

import { 
  useReactTable, 
  getCoreRowModel, 
  flexRender,
  getSortedRowModel
} from '@tanstack/react-table'

export const Table = ({ 
  tableData=[]
}) => {

  const [data, setData] = useState([])

  const columns = [
    {
      header: 'Nombre',
      accessorKey: 'name'
    },
    {
      header: 'Correo',
      accessorKey: 'email'
    },
    {
      header: 'Contraseña',
      accessorKey: 'password'
    },
    {
      header: 'Área',
      accessorKey: 'area'
    },
  ]

  useEffect(() => {
    setData(tableData)
  }, [tableData])

  const [sorting, setSorting] = useState([])

  const table = useReactTable({ 
    data, 
    columns, 
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getCoreRowModel(),
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
            <tr key={ headerGroup.id }>
              {headerGroup.headers.map(header => (
                <th key={ header.id }
                    onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(
                    header.column.columnDef.header, 
                    header.getContext()
                  )}
                  { 
                    {'asc': "⬆️", 'desc': "⬇️" }[
                      header.column.getIsSorted() ?? null
                    ]
                  }
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={ row.id }>
              {row.getVisibleCells().map(cell => (
                <td>{ flexRender(cell.column.columnDef.cell, cell.getContext()) }</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  )
}