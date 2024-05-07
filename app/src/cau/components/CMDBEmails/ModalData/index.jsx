import { useEffect, useState } from 'react'

import { 
  ActionBtns,
  BoxContainer, 
  CloseBtn, 
  FormBtns, 
  Modal, 
  TextBox 
} from './styled'
import { BackgroundOpacity } from '../../../../components'
import { 
  Close, 
  Delete, 
  Edit 
} from '@mui/icons-material'

export const ModalData = ({
  setOpenModal,
  data,
  addMode = false,
  defaultInputChanges = {},
  boxes,
  closeModalData
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

  useEffect(() => {
    console.log("🚀 ~ inputChanges:", inputChanges)
  }, [inputChanges])

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
                              meta.options.map((option, i) => (
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
                onClick={() => addMode ? setOpenModal(false) : closeEditMode()}
              >
                Cancelar
              </button>
              <button>
                { addMode ? 'Agregar' : 'Guardar' }
              </button>
            </FormBtns>
          )}
      </Modal>
    </BackgroundOpacity>
  )
}
