import { 
  ActionBar,
  Container 
} from './styled'

export const TitleActionBar = ({
  addButtonAction,
  areasButtonAction,
  userIsAdmin
}) => {

  return (
    <Container>
      <h2>CMDB Correos</h2>
      {
        userIsAdmin &&
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
      }

    </Container>
  )
}
