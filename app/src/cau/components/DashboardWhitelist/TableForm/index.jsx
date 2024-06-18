import { useState } from "react"
import { ButtonContainer, Form, InputForm, InputsContainer } from "./styled"

export const TableForm = ({
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
    <Form>
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
    </Form>
  )
}
