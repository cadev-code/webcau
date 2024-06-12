import { 
  ListContainer, 
  ListFooter, 
  ListItems, 
  ListMain, 
  ListTitle 
} from './styled'

import {
  ArrowDropDown
} from '@mui/icons-material'

export const ListMenu = ({ zonesData = [] }) => {
  return (
    <ListContainer>
      <ListMain>
        <ListTitle>
          <p>Listas Blancas</p>
          <div>
            <ArrowDropDown />
          </div>
        </ListTitle>
        <ListItems>
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
      <ListFooter>
        <button>
          Agregar Lista
        </button>
      </ListFooter>
    </ListContainer>
  )
}
