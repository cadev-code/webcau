import { useEffect, useRef, useState } from 'react'
import { Container, Footer, TBody, TBodyCell, THead, THeadCell, TRow, TRowBtns, Table } from './styled'
import { TableForm } from '../TableForm'
import { Delete, Edit } from '@mui/icons-material'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

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

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel()
  })

  const tBodyRef = useRef(null)
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
                  {header.isPlaceholder
                    ? null: flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                </THeadCell>
              ))}
            </TRow>
          ))}
        </THead>
        <TBody
          ref={tBodyRef}
          showForm={showForm.show}
          childsLength={tBodyRef.current?.childElementCount}
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