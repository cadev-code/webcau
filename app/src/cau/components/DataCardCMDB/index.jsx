import { Place } from '@mui/icons-material'
import { Container, DataContainer, IconContainer } from './styled'

export const DataCardCMDB = ({ width, icon, title, data }) => {
  return (
    <Container>
      <IconContainer>
        <div>
          { icon }
        </div>
      </IconContainer>
      <DataContainer>
        <p>{ title }</p>
        <p>{ data !== '' ? data : '-' }</p>
      </DataContainer>
    </Container>
  )
}
