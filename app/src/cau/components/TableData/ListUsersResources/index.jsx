import { useEffect, useState } from 'react'
import { BoxContainer, UserResource } from '../ModalData/styled'
import { getResourceUsers } from '../../../api/cmdbResources.api'

export const ListUsersResources = ({id_resource}) => {

  const [usersData, setUsersData] = useState([])

  const getUsersData = async() => {
    const { data } = await getResourceUsers(id_resource)
    setUsersData(data)
  }

  useEffect(() => {
    getUsersData()
  }, [])

  return (
    <BoxContainer className="resources-users">
      <h3>Usuarios con Acceso</h3>
      {usersData.length === 0 && (
        <p>No existen usuarios con permisos de acceso...</p>
      )}
      <div className="users-list">
        {usersData.map(user => (
          <UserResource key={user.id}>
            <div>
              <p>{user.name}</p>
              <p className="blue">{user.user}</p>
            </div>
            <span>{user.permissions}</span>
          </UserResource>
        ))}
      </div>
    </BoxContainer>
  )
}
