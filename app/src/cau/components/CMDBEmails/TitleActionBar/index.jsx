import { 
  ActionBar,
  Container 
} from './styled'

export const TitleActionBar = ({
  addButtonAction,
  areasButtonAction,
  listsButtonAction,
  userIsAdmin
}) => {

  return (
    <Container>
      <h2>CMDB Correos</h2>
      <ActionBar>
        {
          userIsAdmin &&
            <button
              onClick={areasButtonAction}
            >
              Áreas
            </button>
        }
        <button
          onClick={listsButtonAction}
        >
          Listas de Distribución
        </button>
        {
          userIsAdmin &&
            <button className="blue"
              onClick={addButtonAction}
            >
              Agregar Correo
            </button>
        }
      </ActionBar>
    </Container>
  )
}
