
import { 
  CheckContainer, 
  Checkmark 
} from './styled'
import { Done } from '@mui/icons-material'

export const Check = ({
  label,
  checked,
  checkAction
}) => {

  return (
    <CheckContainer
      onClick={ checkAction }
    >
      <Checkmark
        checked={ checked }
      >
        <Done sx={{ fontSize: '20px', color: checked ? 'white' : 'transparent' }} />
      </Checkmark>
      <p>{ label }</p>
    </CheckContainer>
  )
}
