import { useState } from 'react'
import { Container, EditInputForm } from './styled'
import { Edit } from '@mui/icons-material'

export const ListName = ({ zoneSelected }) => {
  const { id_zone, zone } = zoneSelected

  const [showEditName, setShowEditName] = useState(false)

  return (
    <Container>
      {
        !showEditName
          ? <>
              <p>{ zone }</p>
              {/* cambiar por button */}
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
