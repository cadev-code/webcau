import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { useEffect, useState } from 'react'
import { Container, Footer, TBody, TBodyCell, THead, THeadCell, TRow, Table } from './styled'

export const ListTableData = ({defaultColumns, tableData}) => {

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

  return (
    <Container>
      <Table>
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
            <TRow key={row.id}
              className="row"
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
            </TRow>
          ))}
        </TBody>
      </Table>
      <Footer>
        <button>
          Agregar Registro
        </button>
      </Footer>
    </Container>
  )
}