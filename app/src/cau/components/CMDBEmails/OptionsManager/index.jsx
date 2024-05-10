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
import { BackgroundOpacity, ConfirmDialog } from '../../../../components'
import { 
  Close, 
  Delete, 
  Edit, 
  Save 
} from '@mui/icons-material'

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

  const [inputChange, setInputChange] = useState({})
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [addInputValue, setAddInputValue] = useState('')
  const [addMode, setAddMode] = useState(false)

  const inputOnChange = ({target}) => {
    setInputChange(data => ({
      ...data,
      text: target.value
    }))
  }

  const changeEditMode = (id) => {
    setData(data => data.map(
      option => option.id === id
        ? {
          ...option,
          editMode: !option.editMode
        } : option
    ))
  }

  const showEditMode = (option) => {
    changeEditMode(option.id)
    setInputChange(option)
  }

  const closeEditMode = (option) => {
    changeEditMode(option.id)
    setInputChange({})
  }

  const changeDeleteMode = (id) => {
    setData(data => data.map(
      option => option.id === id
        ? {
          ...option,
          deleteMode: !option.deleteMode
        } : option
    ))
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
                                          <div>
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
                                    onClick={() => setShowDeleteConfirm(true)}
                                  >
                                    Eliminar
                                  </button>
                                  <div
                                    onClick={() => changeDeleteMode(option.id)}
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
                    value={addInputValue}
                    onChange={({target}) => setAddInputValue(target.value)}
                  />
                </AddInput>
          }

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
                      onClick={() => setAddMode(false)}
                    >
                      Cancelar
                    </button>
                    <button className="submit">
                      Guardar
                    </button>
                  </>
            }
          </AddActions>
          <CloseBtn
            onClick={close}
          >
            <Close />
          </CloseBtn>
        </Container>
      </BackgroundOpacity>
      {
        showDeleteConfirm &&
          <BackgroundOpacity>
            <ConfirmDialog 
              text={`¿Eliminar ${inputChange.text}?`}
              actionCancel={() => setShowDeleteConfirm(false)}
              actionSubmit={() => console.log(inputChange)}
            />
          </BackgroundOpacity>
      }
    </>
  )
}
