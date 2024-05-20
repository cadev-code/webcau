import { 
  ActionBar,
  Container 
} from './styled'

export const TitleActionBar = ({
  title,
  buttons
}) => {

  return (
    <Container>
      <h2>{ title }</h2>
      <ActionBar>
        {
          buttons
        }
      </ActionBar>
    </Container>
  )
}
