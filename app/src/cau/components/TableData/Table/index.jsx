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
  HideColumns,
} from './styled'
import { 
  ArrowDownward, 
  ArrowUpward, 
  Close, 
  Description,
  Download,
  SimCardDownload,
  Visibility,
  VisibilityOff
} from '@mui/icons-material'

import { 
  flexRender,
  getCoreRowModel, 
  getFilteredRowModel, 
  getPaginationRowModel, 
  getSortedRowModel, 
  useReactTable 
} from '@tanstack/react-table'
import { dataToExcel } from '../../../helpers/dataToExcel'

export const Table = ({ 
  tableData=[],
  defaultColumns,
  showModalData,
  filenameToExport
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

  const descriptionColumn = {
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
  }

  useEffect(() => {
    setColumns([
      descriptionColumn,
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
  

  const [hideColumns, setHideColumns] = useState([])
  const [showHideColumns, setShowHideColumns] = useState(false)

  useEffect(() => {
    setHideColumns(defaultColumns.map(({header, accessorKey}) => (
      {
        header,
        accessorKey,
        hide: false
      }
    )))
  }, [defaultColumns])

  const hideColumnsOnChange = (columnChange) => {
    if(hideColumns.filter(column => column.hide === false).length === 3 && columnChange.hide === false) return

    if(!columnChange.hide) {
      setColumnFilters(columnFilters.filter(filter => filter.id !== columnChange.accessorKey))
    }

    setHideColumns(columns => columns.map(column => (
      column.accessorKey === columnChange.accessorKey
        ? {
          ...column,
          hide: !column.hide  
        } : column
    )))
  }

  const changeColumns = () => {
    const columnsToHide = []

    hideColumns.forEach(column => {
      column.hide === true &&
        columnsToHide.push(column.accessorKey)
    })

    const visibleColumns = defaultColumns.filter(column => !columnsToHide.includes(column.accessorKey))

    setColumns([
      descriptionColumn,
      ...visibleColumns
    ])
  }

  useEffect(() => {
    changeColumns()
  }, [hideColumns])

  const { exportToExcel } = dataToExcel(
    filenameToExport,
    table.getFilteredRowModel().rows.map(row => row.original) 
  )
  
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
        <button className="downloadBtn"
          onClick={ exportToExcel }
        >
          <Download />
        </button>
      </PaginationContainer>
      <HideColumns>
        <div>
          <div className="btns">
            <div
              onClick={() => setShowHideColumns(show => !show)}
            >
              {
                !showHideColumns
                  ? <Visibility />
                  : <Close />
              }
            </div>
        </div>
        </div>
        {
          showHideColumns &&
            <div className="columns">
              {
                hideColumns.map((column, i) => (
                  <div className="column"
                    key={i}
                    style={{
                      color: column.hide ? '#89979d' : 'white'
                    }}
                    onClick={() => hideColumnsOnChange(column)}
                  >
                    <div>
                      {
                        !column.hide
                          ? <Visibility />
                          : <VisibilityOff /> 
                      }
                    </div>
                    <p>{column.header}</p>
                  </div>
                ))
              }
            </div>
        }
      </HideColumns>
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