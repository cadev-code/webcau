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

export const ListMenu = ({ listData = [] }) => {
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
            <li>
              <button>Bienestar Laboral</button>
            </li>
            <li>
              <button>Generación de la Información con TDC</button>
            </li>
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
