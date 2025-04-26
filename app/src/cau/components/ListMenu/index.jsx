import { Telegram } from '@mui/icons-material'
import { 
  Container, 
  ListContainer, 
  ListItem 
} from './styled'
import { useNavigate } from 'react-router-dom'

export const ListMenu = ({ listItems, itemOnClick }) => {
  return (
    <Container>
      <ListContainer>
        {
          listItems.map(({ text, icon, path }, i) => (
            <ListItem
              key={ i }
              onClick={ () => itemOnClick(path) }
            >
              <p>{ text }</p>
              { icon }
            </ListItem>
          ))
        }
      </ListContainer>
    </Container>
  )
}