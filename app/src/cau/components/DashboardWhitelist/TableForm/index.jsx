import { useEffect, useState } from "react"
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
  const defaultInvalidForm = {}
  filteredColumns.forEach(({accessorKey}) => {
    defaultInputValues[accessorKey] = ''
    defaultInvalidForm[accessorKey] = false
  })

  const [inputValues, setInputValues] = useState(defaultInputValues)
  const [invalidForm, setInvalidForm] = useState(defaultInvalidForm)

  const inputOnChange = ({target}) => {
    setInputValues({ ...inputValues, [target.id]: target.value })
    setInvalidForm({...invalidForm, [target.id]: target.value === ''})
  }

  const closeForm = () => {
    setFooterHeight('50px')
    setShowForm({show: false, mode: ''})
  }

  const formSubmit = async() => {
    if(Object.values(inputValues).filter(value => value === '').length > 0) {
      setInvalidForm(prev => {
        const newInvalidForm = {...prev}
        Object.keys(inputValues).forEach(key => {
          newInvalidForm[key] = inputValues[key] === ''
        })
        return newInvalidForm
      })
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
                isInvalid={invalidForm[accessorKey]}
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
          disabled={Object.values(invalidForm).filter(value => value).length > 0}
        >
          Guardar Registro
        </button>
      </ButtonContainer>
    </Form>
  )
}
