import { useEffect, useRef, useState } from 'react'
import { Container, Footer, InputFilterColumn, TBody, TBodyCell, THead, THeadCell, TRow, TRowBtns, Table } from './styled'
import { TableForm } from '../TableForm'
import { ArrowDownward, ArrowUpward, Delete, Edit } from '@mui/icons-material'
import { flexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'

export const ListTableData = ({
  id_zone, 
  defaultColumns, 
  tableData,
  addRegisterMethod,
  editRegisterMethod,
  deleteRegisterMethod,
  refreshData,
  activeForm,
  setActiveForm
}) => {

  const [columns, setColumns] = useState(defaultColumns)
  const [data, setData] = useState([])

  useEffect(() => {
    setData(tableData)
  }, [tableData])

  const [sorting, setSorting] = useState([])
  const [columnFilters, setColumnFilters] = useState([])

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters
  })

  const footerRef = useRef(null)
  const [footerHeight, setFooterHeight] = useState('50px')

  const [showForm, setShowForm] = useState({show: false, mode: ''})
  const [dataToEdit, setDataToEdit] = useState({})

  useEffect(() => {
    if(showForm.show) {
      setFooterHeight(`${footerRef.current.offsetHeight}px`)
      setActiveForm(true)
    } else {
      setActiveForm(false)
    }
  }, [showForm])

  return (
    <Container>
      <Table footerHeight={footerHeight}>
        <THead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TRow key={headerGroup.id}>
              {headerGroup.headers.map((header, i) => (
                <THeadCell key={header.id}
                  style={{
                    borderRight: headerGroup.headers.length > 1 && i === 0 ? '1px solid var(--border-input-color)' : 'none'
                  }}
                  accessorKey={header.column.columnDef.accessorKey}
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
                      {'asc': <ArrowUpward />, 'desc': <ArrowDownward />}[
                        header.column.getIsSorted() ?? null
                      ]
                    }
                  </div>
                  {header.column.getCanFilter() ?
                    <Filter column={header.column}/>
                    : null}
                </THeadCell>
              ))}
            </TRow>
          ))}
        </THead>
        <TBody
          showForm={showForm.show}
        >
          {table.getRowModel().rows.map(row => (
            <TBodyRow key={row.id}
              row={row}
              activeForm={activeForm}
              setShowForm={setShowForm}
              setDataToEdit={setDataToEdit}
            />
          ))}
        </TBody>
      </Table>
      <Footer ref={footerRef}
        showForm={showForm.show}
      >
        {
          showForm.show &&
            <TableForm
              mode={showForm.mode} 
              id_zone={id_zone}
              columns={columns}
              setShowForm={setShowForm}
              setFooterHeight={setFooterHeight}
              dataToEdit={dataToEdit}
              setDataToEdit={setDataToEdit}
              addRegister={addRegisterMethod}
              editRegister={editRegisterMethod}
              deleteRegister={deleteRegisterMethod}
              refreshData={refreshData}
            />
        }
        {
          !showForm.show &&
          <button
            onClick={() => setShowForm({show: true, mode: 'add'})}
            disabled={activeForm}
          >
            Agregar Registro
          </button>
        }
      </Footer>
    </Container>
  )
}

const Filter = ({column}) => {

  const filterValue = column.getFilterValue()
  const [inputValue, setInputValue] = useState(filterValue ?? '')

  const inputOnChange = ({target}) => {
    setInputValue(target.value)
    column.setFilterValue(target.value)
  }

  return (
    <InputFilterColumn 
      type="text"
      value={inputValue}
      onChange={inputOnChange}
    />
  )
}

const TBodyRow = ({
  row, 
  activeForm, 
  setShowForm,
  setDataToEdit
}) => {

  const rowRef= useRef(null)
  const [showBtns, setShowBtns] = useState(false)

  const btnOnClick = (mode) => {
    setDataToEdit(row.original)
    setShowForm({ show: true, mode })
  }

  return(
    <TRow key={row.id}
      ref={rowRef}
      className="row"
      onMouseOver={() => setShowBtns(true)}
      onMouseLeave={() => setShowBtns(false)}
    >
      {row.getVisibleCells().map(cell => (
        <TBodyCell key={cell.id}
          accessorKey={cell.column.columnDef.accessorKey}
        >
          {flexRender(
            cell.column.columnDef.cell,
            cell.getContext()
          )}
        </TBodyCell>
      ))}
      {
        (showBtns && !activeForm) &&
        <TRowBtns>
          <button
            onClick={() => btnOnClick('edit')}
          >
            <Edit />
          </button>
          <button
            onClick={() => btnOnClick('delete')}
          >
            <Delete />
          </button>
        </TRowBtns>
      }
    </TRow>
  )
}