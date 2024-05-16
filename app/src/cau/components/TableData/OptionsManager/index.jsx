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
  userIsAdmin,
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

  const {
    closeAddMode,
    showEditMode,
    closeEditMode,
    changeDeleteMode,
    submitData,
    deleteData
  } = optionActions(
    data,
    setData,
    addMode,
    setAddMode,
    addInputValue,
    setAddInputValue,
    inputChange,
    setInputChange,
    setShowDeleteConfirm,
    optionToDelete,
    setOptionToDelete,
    addOptionMethod,
    updateOptionMethod,
    deleteOptionMethod,
    refreshOptions,
    setAlertState,
    resetAlertState
  )

  return (
    <>
      <BackgroundOpacity>
        <Container>
          <h2>{ title }</h2>
          {
            data.length === 0 && !addMode &&
              <p className="empty-message">Sin información, añade nuevos registros... ↓</p>
          }
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
                                  required
                                />
                          }
                          {
                            userIsAdmin &&
                              <>                            
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
                              </>
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
                    required
                  />
                </AddInput>
          }
          {
            userIsAdmin && (data.filter(option => option.editMode).length === 0) &&
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
