import { 
  ActionBar,
  Container 
} from './styled'

export const TitleActionBar = ({
  addButtonAction
}) => {

  return (
    <Container>
      <h2>CMDB Correos</h2>
      <ActionBar>
        <button
          onClick={ addButtonAction }
        >
          Agregar Correo
        </button>
      </ActionBar>
    </Container>
  )
}
