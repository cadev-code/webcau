import { useState } from 'react'
import { AddInputForm, ListContainer, ListFooter, ListItems, ListMain, ListTitle } from './styled'

import { ArrowDropDown } from '@mui/icons-material'

export const ListMenu = ({ zonesData = [] }) => {

  const [showAddListForm, setShowAddListForm] = useState(false)

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
              zonesData.map(({ zone }) => (
                <li key={ zone }>
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
            ? <AddInputForm>
                <input 
                  type="text" 
                  required
                  placeholder="Nombre de Lista Nueva..."
                />
                <div>
                  <button>
                    Guardar Lista
                  </button>
                  <button
                    onClick={() => setShowAddListForm(false)}
                  >
                    Cancelar
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
