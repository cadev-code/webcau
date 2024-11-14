import { useState } from 'react'
import { BoxContainer } from '../ModalData/styled'

export const ListUsersResources = () => {

  const [usersData, setUsersData] = useState([])

  return (
    <BoxContainer className="resources_users">
      <h3>Usuarios con Acceso</h3>
      {usersData.length === 0 && (
        <p>No existen usuarios con permisos de acceso...</p>
      )}
    </BoxContainer>
  )
}
