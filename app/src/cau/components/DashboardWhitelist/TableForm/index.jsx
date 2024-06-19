import { useEffect, useState } from 'react'
import { ButtonContainer, Form, InputForm, InputsContainer } from './styled'

export const TableForm = ({
  mode,
  id_zone, 
  columns, 
  setShowForm, 
  setFooterHeight,
  dataToEdit = [],
  setDataToEdit,
  addRegister,
  editRegister,
  deleteRegister,
  refreshData
}) => {

  // la tabla equipos tiene dos header groups
  const filteredColumns = columns[0].columns ? columns[0].columns : columns

  const defaultInputValues = {}
  const defaultInvalidForm = {}
  filteredColumns.forEach(({accessorKey}) => {
    mode === 'add'
      ? defaultInputValues[accessorKey] = ''
      : defaultInputValues[accessorKey] = dataToEdit[accessorKey]

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
    mode !== 'add' && setDataToEdit({})
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
      if(mode === 'add') {
        await addRegister({...inputValues, id_zone})
      } else if(mode === 'edit') {
        await editRegister({...dataToEdit, ...inputValues})
      } else if(mode === 'delete') {
        await deleteRegister(dataToEdit)
      }
      await refreshData(id_zone)
      closeForm()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Form>
      <h3>
        {
          mode === 'add'
           ? 'Agregar Registro'
            : mode === 'edit'
             ? 'Editar Registro'
              : '¿Eliminar Registro?'
        }
      </h3>
      <InputsContainer>
        {
          filteredColumns.map(({header, accessorKey}) => (
              <div key={accessorKey}>
                {
                  mode === 'edit' &&
                    <span>Anterior: {dataToEdit[accessorKey]}</span>
                }
                <InputForm
                  key={accessorKey}
                  id={accessorKey}
                  type="text"
                  placeholder={header}
                  value={inputValues[accessorKey]}
                  onChange={inputOnChange}
                  isInvalid={invalidForm[accessorKey]}
                  disabled={mode === 'delete'}
                />
              </div>
            ))
        }
      </InputsContainer>
      <ButtonContainer
        mode={mode}
      >
        <button
          onClick={closeForm}
        >
          Cancelar
        </button>
        <button
          onClick={formSubmit}
          disabled={Object.values(invalidForm).filter(value => value).length > 0}
        >
          {mode === 'add' 
            ? 'Guardar Registro' 
            : mode === 'edit'
              ? 'Guardar Cambios'
              : 'Eliminar'}
        </button>
      </ButtonContainer>
    </Form>
  )
}
