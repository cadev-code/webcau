import { 
  useEffect, 
  useState 
} from 'react'

import { PaginationContainer, TableContainer } from './styled'
import { 
  ArrowDownward, 
  ArrowUpward 
} from '@mui/icons-material'

import { 
  flexRender,
  getCoreRowModel, 
  getFilteredRowModel, 
  getPaginationRowModel, 
  getSortedRowModel, 
  useReactTable 
} from '@tanstack/react-table'

export const Table = ({ 
  tableData=[],
  globalFilter,
  setGlobalFilter
}) => {

  const defautlColumns = [
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
      size: 300
    }
  ]

  const [data, setData] = useState([])
  const [columns, setColumns] = useState([...defautlColumns])

  // sorting
  const [sorting, setSorting] = useState([])

  // pagination
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 15
  })

  useEffect(() => {
    setData(tableData)
  }, [tableData])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
      globalFilter,
      pagination
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination
  })

  return (
    <TableContainer>
      <div>
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
      </div>  
      <PaginationContainer>
        <div>
          <button
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {'<<'}
          </button>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {'<'}
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {'>'}
          </button>
          <button
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
          >
            {'>>'}
          </button>
        </div>
        <span>
          Página 
          <strong>
            {' '} {table.getState().pagination.pageIndex + 1} de {' '}
            {table.getPageCount()}
          </strong>
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value))
          }}
        >
          {[15,30,45,60].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Mostrar {pageSize}
            </option>
          ))}
        </select>
      </PaginationContainer>
    </TableContainer>
  )
}