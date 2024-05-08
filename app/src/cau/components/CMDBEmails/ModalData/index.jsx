import { useEffect, useState } from 'react'

import { 
  ActionBtns,
  BoxContainer, 
  CloseBtn, 
  FormBtns, 
  Modal, 
  TextBox 
} from './styled'
import { Alert, BackgroundOpacity } from '../../../../components'
import { 
  Close, 
  Delete, 
  Edit 
} from '@mui/icons-material'

import { alertActions } from '../../../helpers/alertActions'

export const ModalData = ({
  data,
  addMode = false,
  defaultInputChanges = {},
  boxes,
  closeModalData,
  submitData
}) => {

  // edit mode
  const [editMode, setEditMode] = useState(false)
  const [inputChanges, setInputChanges] = useState(addMode ? defaultInputChanges : {})

  const inputOnChange = ({target}) => {
    const { id, value } = target
    setInputChanges(changes => ({
      ...changes,
      [id]: value
    }))
  }

  const closeEditMode = () => {
    setEditMode(false)
    setInputChanges({})
  }

  const { alertState, setAlertState, resetAlertState, changeStateAlert } = alertActions()

  const formValidation = () => {
    if(Object.values(inputChanges).includes('')) {
      setAlertState({message: 'Los campos no pueden estar vacíos', severity: 'error', itShow: true})
      resetAlertState()
      return
    }

    submitData(inputChanges)
  }

  return (
    <BackgroundOpacity>
      <Modal>
        <BoxContainer>
          {
            boxes.map(({header, accessorKey, meta}) => (
              <TextBox key={ accessorKey }>
                <span>{ header }</span>
                {!editMode && !addMode
                    ? <p>{ data[accessorKey] }</p>
                    : (meta && meta.filterVariant === 'select')
                        ? <select
                            id={ accessorKey }
                            value={ inputChanges[accessorKey] }
                            onChange={ inputOnChange }
                          >
                            {
                              ['', ...meta.options].map((option, i) => (
                                <option key={ i } 
                                  value={ option }
                                >
                                  { option }
                                </option>
                              ))
                            }
                          </select>
                        : <input
                            id={ accessorKey }
                            value={ inputChanges[accessorKey] }
                            onChange={ inputOnChange }
                          />}
              </TextBox>
            ))
          }
        </BoxContainer>
        <CloseBtn
          onClick={closeModalData}
        >
          <Close />
        </CloseBtn>
        {!editMode && !addMode ?
          (
            <ActionBtns>
              <div
                onClick={() => {
                  setEditMode(mode => !mode)
                  setInputChanges(data)
                }}
              >
                <Edit />
              </div>
              <div>
                <Delete />
              </div>
            </ActionBtns>
          ) : (
            <FormBtns>
              <button
                onClick={() => addMode ? closeModalData() : closeEditMode()}
              >
                Cancelar
              </button>
              <button
                onClick={formValidation}
              >
                { addMode ? 'Agregar' : 'Guardar' }
              </button>
            </FormBtns>
          )}
      </Modal>
      <Alert
        text={ alertState.message }
        showAlert={ alertState.itShow }
        setShowAlert={ changeStateAlert }
        severity={ alertState.severity }
      />
    </BackgroundOpacity>
  )
}
