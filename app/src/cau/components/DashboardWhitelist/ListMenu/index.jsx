import { useState } from 'react'
import { AddInputForm, ListContainer, ListFooter, ListItems, ListMain, ListTitle } from './styled'

import { ArrowDropDown } from '@mui/icons-material'
import { addZone } from '../../../api/cmdbWhitelists'

export const ListMenu = ({ zonesData = [], refreshData }) => {
  const [showAddListForm, setShowAddListForm] = useState(false)

  const [inputValue, setInputValue] = useState('')
  const [invalidInput, setInvalidInput] = useState(false)

  const inputOnChange = ({target}) => {
    setInputValue(target.value)
    target.value === '' ? setInvalidInput(true) :  setInvalidInput(false)
  }

  const formSubmit = async() => {
    if(inputValue.length === 0) {
      setInvalidInput(true)
      return
    }
    
    try {
      await addZone({zone: inputValue})
      await refreshData()
      closeForm()
    } catch (error) {
      console.log('error adding zone')
    }
  }

  const closeForm = () => {
    setShowAddListForm(false)
    setInputValue('')
    setInvalidInput(false)
  }

  return (
    <ListContainer>
      <ListMain isFormVisible={showAddListForm}>
        <ListTitle>
          <p>Listas Blancas</p>
          <div>
            <ArrowDropDown />
          </div>
        </ListTitle>
        <ListItems isFormVisible={showAddListForm}>
          <ul>
            {
              zonesData.map(({ id_zone, zone }) => (
                <li key={ id_zone }>
                  <button>{ zone }</button>
                </li>
              ))
            }
          </ul>
        </ListItems>
      </ListMain>
      <ListFooter isFormVisible={showAddListForm}>
        {
          showAddListForm
            ? <AddInputForm invalidInput={invalidInput}>
                <input 
                  type="text"
                  placeholder="Nombre de lista nueva..."
                  value={inputValue}
                  onChange={inputOnChange}
                  required
                />
                <div>
                  <button
                    onClick={closeForm}
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={formSubmit}
                    disabled={invalidInput}
                  >
                    Guardar Lista
                  </button>
                </div>
              </AddInputForm>
            : <button
                onClick={() => setShowAddListForm(true)}
              >
                Agregar Lista
              </button>
        }
      </ListFooter>
    </ListContainer>
  )
}
