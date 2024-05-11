import { 
  useEffect, 
  useState 
} from 'react'

import { 
  ActionBtns,
  AddActions,
  AddInput,
  CloseBtn,
  Container,
  DeleteConfirm, 
  Option, 
  OptionsContainer
} from './styled'
import { Alert, BackgroundOpacity, ConfirmDialog } from '../../../../components'
import { 
  Close, 
  Delete, 
  Edit, 
  Save 
} from '@mui/icons-material'
import { optionActions } from './optionActions'
import { alertActions } from '../../../helpers/alertActions'

export const OptionsManager = ({
  title = '',
  options=[],
  addOptionMethod,
  updateOptionMethod,
  deleteOptionMethod,
  refreshOptions,
  close
}) => {

  const [data, setData] = useState(
    options.map(option => ({
      ...option,
      editMode: false,
      deleteMode: false
    }))
  )

  useEffect(() => {
    setData(options.map(option => ({
      ...option,
      editMode: false,
      deleteMode: false
    })))
  }, [options])

  const [addMode, setAddMode] = useState(false)
  const [addInputValue, setAddInputValue] = useState({text: ''})
  const [inputChange, setInputChange] = useState({})
  const [optionToDelete, setOptionToDelete] = useState({})
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  const inputOnChange = ({target}) => {
    setInputChange(data => ({
      ...data,
      text: target.value
    }))
  }

  const {
    alertState,
    setAlertState,
    changeStateAlert,
    resetAlertState
  } = alertActions()

  const showAlert = (message, severity) => {
    setAlertState({
      message, 
      severity, 
      itShow: true
    })
    resetAlertState()
  }

  const {
    closeAddMode,
    showEditMode,
    closeEditMode,
    changeDeleteMode
  } = optionActions(
    setData,
    setAddMode,
    setAddInputValue,
    setInputChange,
    setOptionToDelete
  )

  const submitData = async() => {

    if(addMode) {
      if(addInputValue.text === '') return

      if(data.filter(option => option.text.trim() === addInputValue.text.trim()).length > 0) {
        showAlert('No puedes repetir información, valida los datos', 'warning')
        return
      }

      try {
        await addOptionMethod(addInputValue)
        closeAddMode()
        showAlert('Datos agregados correctamente', 'success')
      } catch (error) {
        showAlert('Hubo un error, informa al administrador', 'error')
      }
    } else {
      try {
        showAlert('Datos actualizados correctamente', 'success')
      } catch (error) {
        showAlert('Hubo un error, informa al administrador', 'error')
      }
    }

    await refreshOptions()
  }

  const deleteData = async() => {
    try {
      await deleteOptionMethod(optionToDelete.id)
      setShowDeleteConfirm(false)
      setOptionToDelete({})
      showAlert('Datos eliminados correctamente', 'success')
    } catch (error) {
      setShowDeleteConfirm(false)
      showAlert('Hubo un error, informa al administrador', 'error')
    }

    await refreshOptions()
  }

  return (
    <>
      <BackgroundOpacity>
        <Container>
          <h2>{ title }</h2>
          {
            !addMode
              ? <OptionsContainer>
                  {
                    data.map(option => (
                      ((!option.editMode && (data.filter(option => option.editMode).length === 0)) ||
                      option.editMode) &&
                        <Option key={ option.id }>
                          {
                            !option.editMode
                              ? <p>{ option.text }</p>
                              : <input type="text"
                                  value={ inputChange.text }
                                  onChange={ inputOnChange }
                                />
                          }
                          {
                            !option.deleteMode
                              ? <ActionBtns>
                                  {
                                    !option.editMode
                                      ? <div
                                          onClick={() => showEditMode(option)}
                                        >
                                          <Edit />
                                        </div>
                                      : <>
                                          <div
                                            onClick={submitData}
                                          >
                                            <Save />
                                          </div>
                                          <div
                                            onClick={() => changeDeleteMode(option.id)}
                                          >
                                            <Delete />
                                          </div>
                                          <div
                                            onClick={() => closeEditMode(option)}
                                          >
                                            <Close />
                                          </div>
                                        </>
                                  }
                                </ActionBtns>
                              : <DeleteConfirm>
                                  <button
                                    onClick={() => {
                                      setShowDeleteConfirm(true)
                                      setOptionToDelete(option)
                                    }}
                                  >
                                    Eliminar
                                  </button>
                                  <div
                                    onClick={() => {
                                      changeDeleteMode(option.id)
                                      setOptionToDelete({})
                                    }}
                                  >
                                    <Close />
                                  </div>
                                </DeleteConfirm>
                          }
                        </Option>
                    ))
                  }
                </OptionsContainer>
              : <AddInput>
                  <span>Agregar Opción</span>
                  <input type="text" 
                    value={addInputValue.text}
                    onChange={({target}) => setAddInputValue({text: target.value})}
                  />
                </AddInput>
          }
          {
            (data.filter(option => option.editMode).length === 0) &&
              <AddActions>
                {
                  !addMode
                    ? <button
                        onClick={() => setAddMode(true)}
                      >
                        Agregar
                      </button>
                    : <>
                        <button
                          onClick={closeAddMode}
                        >
                          Cancelar
                        </button>
                        <button className="submit"
                          onClick={submitData}
                        >
                          Guardar
                        </button>
                      </>
                }
              </AddActions>
          }
          <CloseBtn
            onClick={close}
          >
            <Close />
          </CloseBtn>
        </Container>
        <Alert 
          text={ alertState.message }
          severity={ alertState.severity }
          showAlert={ alertState.itShow }
          setShowAlert={ changeStateAlert }
        />
      </BackgroundOpacity>
      {
        showDeleteConfirm &&
          <BackgroundOpacity>
            <ConfirmDialog 
              text={`¿Eliminar ${inputChange.text}?`}
              actionCancel={() => setShowDeleteConfirm(false)}
              actionSubmit={deleteData}
            />
          </BackgroundOpacity>
      }
    </>
  )
}
