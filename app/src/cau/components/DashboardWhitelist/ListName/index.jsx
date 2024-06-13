import { useState } from 'react'
import { Container, EditInputForm } from './styled'
import { Edit } from '@mui/icons-material'

export const ListName = () => {

  const [showEditName, setShowEditName] = useState(false)

  return (
    <Container>
      {
        !showEditName
          ? <>
              <p>Bienestar Laboral</p>
              <div className="edit-icon"
                onClick={() => setShowEditName(true)}
              >
                <Edit />
              </div>
            </>
          : <EditInputForm>
              <input type="text" />
              <div>
                <button>
                  Guardar
                </button>
                <button
                  onClick={() => setShowEditName(false)}
                >
                  Cancelar
                </button>
              </div>
            </EditInputForm>
      }
    </Container>
  )
}
