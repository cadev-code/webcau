import { useState } from 'react'
import { Container, EditInputForm } from './styled'
import { Edit } from '@mui/icons-material'

export const ListName = ({ zoneSelected }) => {

  const [showEditName, setShowEditName] = useState(false)

  return (
    <Container>
      {
        !showEditName
          ? <>
              <p>{ zoneSelected?.zone }</p>
              {/* cambiar por button */}
              <button className="edit-icon"
                onClick={() => setShowEditName(true)}
              >
                <Edit />
              </button>
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
