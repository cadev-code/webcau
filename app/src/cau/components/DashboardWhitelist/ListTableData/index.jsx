import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { useEffect, useRef, useState } from 'react'
import { ButtonContainer, Container, Footer, FormContainer, InputForm, InputsContainer, TBody, TBodyCell, THead, THeadCell, TRow, Table } from './styled'

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
      <Footer ref={footerRef}
        showForm={showForm.show}
      >
        {
          showForm.show &&
            <Form 
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

const Form = ({
  mode,
  id_zone, 
  columns, 
  setShowForm, 
  setFooterHeight,
  addRegister,
  refreshData
}) => {

  // la tabla equipos tiene dos header groups
  const filteredColumns = columns[0].columns ? columns[0].columns : columns

  const defaultInputValues = {}
  filteredColumns.forEach(({accessorKey}) => defaultInputValues[accessorKey] = '')

  const [inputValues, setInputValues] = useState(defaultInputValues)
  const [invalidForm, setInvalidForm] = useState(false)

  const inputOnChange = ({target}) => {
    const newValue = { ...inputValues, [target.id]: target.value }
    setInputValues(newValue)
    const values = Object.values(newValue)
    if(values.filter(value => value === '').length === 0) {
      setInvalidForm(false)
    } else {
      setInvalidForm(true)
    }
  }

  const closeForm = () => {
    setFooterHeight('50px')
    setShowForm({show: false, mode: ''})
  }

  const formSubmit = async() => {
    const values = Object.values(inputValues)
    if(values.filter(value => value === '').length > 0) {
      setInvalidForm(true)
      return
    }

    try {
      await addRegister({...inputValues, id_zone})
      await refreshData(id_zone)
      closeForm()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <FormContainer>
      <InputsContainer>
        {
          filteredColumns.map(({header, accessorKey}) => (
              <InputForm
                key={accessorKey}
                id={accessorKey}
                type="text"
                placeholder={header}
                value={inputValues[accessorKey]}
                onChange={inputOnChange}
                isInvalid={invalidForm && inputValues[accessorKey] === ''}
              />
            ))
        }
      </InputsContainer>
      <ButtonContainer>
        <button
          onClick={closeForm}
        >
          Cancelar
        </button>
        <button
          onClick={formSubmit}
          disabled={invalidForm}
        >
          Guardar Registro
        </button>
      </ButtonContainer>
    </FormContainer>
  )
}