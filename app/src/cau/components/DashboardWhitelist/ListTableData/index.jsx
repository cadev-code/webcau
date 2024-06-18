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

  const [showForm, setShowForm] = useState({show: false, mode: ''})
  const [footerHeight, setFooterHeight] = useState('50px')
  const footerRef = useRef(null)

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
        <TBody>
          {table.getRowModel().rows.map(row => (
            <TBodyRow 
              row={row}
              activeForm={activeForm}
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
              addRegister={addRegisterMethod}
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

const TBodyRow = ({row, activeForm}) => {

  const rowRef= useRef(null)
  const [showBtns, setShowBtns] = useState(false)

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
          <button>
            <Edit />
          </button>
          <button>
            <Delete />
          </button>
        </TRowBtns>
      }
    </TRow>
  )
}