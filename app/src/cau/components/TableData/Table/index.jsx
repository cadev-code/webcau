import { 
  useEffect, 
  useState 
} from 'react'

import {
  InputFilterColumn, 
  PaginationContainer, 
  SelectFilterColumn, 
  TableContainer,
  Container,
} from './styled'
import { 
  ArrowDownward, 
  ArrowUpward, 
  Description
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
  defaultColumns,
  showModalData
}) => {

  const [data, setData] = useState([])
  const [columns, setColumns] = useState([...defaultColumns])

  useEffect(() => {
    setData(tableData)
  }, [tableData])

  useEffect(() => {
    setColumns([...defaultColumns])
  }, [defaultColumns])

  // sorting
  const [sorting, setSorting] = useState([])

  // pagination
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12
  })

  // column filtering
  const [columnFilters, setColumnFilters] = useState([])

  // open modal
  // in all casses, a first column is added with a button to open the modal
  useEffect(() => {
    setColumns([
      {
        id: 'open_modal',
        header: '',
        cell: ({row}) => (
          <div
            onClick={() => {showModalData(data[row.id])}}
            style={{
              display: 'grid',
              placeItems: 'center',
              cursor: 'pointer'
            }}
          >
            <Description />
          </div>
        ),
        size: 70
      },
      ...defaultColumns
    ])
  }, [defaultColumns, data])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
      pagination,
      columnFilters
    },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    onColumnFiltersChange: setColumnFilters
  })

  return (
    <Container>
      <div>
        <TableContainer>
          <div className="tHead">
            {table.getHeaderGroups().map(headerGroup => (
              <div className="tR" 
                key={headerGroup.id}
              >
                {headerGroup.headers.map(header => (
                  <div className="tH"
                    key={header.id}
                    style={{
                      width: header.getSize()
                    }}
                  >
                    <div
                      onClick={header.column.getToggleSortingHandler()}
                    >
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
                    {header.column.getCanFilter() ? 
                      <Filter column={header.column}/>
                      : null}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="tBody">
            {table.getRowModel().rows.map(row => (
              <div className="tR" 
                key={row.id}
              >
                {row.getVisibleCells().map(cell => (
                  <div className="tD" 
                    key={cell.id}
                    style={{
                      width: cell.column.getSize()
                    }}
                  >
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </TableContainer>
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
          {[12,20,30,50,80].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Mostrar {pageSize}
            </option>
          ))}
        </select>
      </PaginationContainer>
    </Container>
  )
}

const Filter = ({ column }) => {

  const columnFilterValue = column.getFilterValue()
  const { filterVariant, options } = column.columnDef.meta ?? {}

  const [inputValue, setInputValue] = useState((columnFilterValue ?? ''))

  useEffect(() => {
    setInputValue('')
    column.setFilterValue('')
  }, [options])

  return filterVariant === 'select' 
    ? (
      <SelectFilterColumn
        onChange={({target}) => {
          setInputValue(target.value)
          column.setFilterValue(target.value)
        }}
        value={ inputValue }
      >
        {
          options.map((option, i) => (
            <option key={i} value={ option === 'Todo' ? '' : option }>
              { option }
            </option>
          ))
        }
      </SelectFilterColumn>
    )
    : (
      <InputFilterColumn
        type="text"
        onChange={({target}) => {
          setInputValue(target.value)
          column.setFilterValue(target.value)
        }}
        value={inputValue}
      />
    )
}