import { 
  ActionBar,
  Container 
} from './styled'

export const TitleActionBar = ({
  addButtonAction,
  areasButtonAction
}) => {

  return (
    <Container>
      <h2>CMDB Correos</h2>
      <ActionBar>
        <button
          onClick={areasButtonAction}
        >
          Gestionar Áreas
        </button>
        <button className="blue"
          onClick={addButtonAction}
        >
          Agregar Correo
        </button>
      </ActionBar>
    </Container>
  )
}
