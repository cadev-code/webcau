import { 
  Container, 
  NavContainer, 
  SearchInput
} from './styled'
import {
  ActionButton, ActionIconButton
} from '../../../components'
import { Close } from '@mui/icons-material'

export const BarSearchEmails = ({
  editMode,
  setEditMode,
}) => {
  return (
    <Container>
      <h2>CMDB Correos</h2>
      <NavContainer>
        {
          !editMode &&
          <>
            <SearchInput>
              Nombre:
              <input />
            </SearchInput>
            <SearchInput>
              Correo:
              <input />
            </SearchInput>
            {/* TODO: hide button when user not is admin */}
            <ActionButton
              text="Editar Áreas"
              height="fit-content"
              padding="5px 10px"
              action={ () => setEditMode(true) }
            />
          </>
        }
        {
          editMode &&
          <>
            <ActionButton
              text="Guardar Cambios"
              height="fit-content"
              padding="5px 10px"
              action={ () => setEditMode(false) }
            />
            <ActionIconButton
              icon={ <Close /> }
              action={ () => setEditMode(false) }
            />
          </>
        }
      </NavContainer>
    </Container>
  )
}
