import { Telegram } from '@mui/icons-material'
import { 
  Container, 
  ListContainer, 
  ListItem 
} from './styled'
import { useNavigate } from 'react-router-dom'

export const ListMenu = ({ title, listItems, itemOnClick }) => {
  return (
    <Container>
      <h1>{ title }</h1>
      <ListContainer>
        {
          listItems.map(({ text, icon, path }) => (
            <ListItem
              key={ path }
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