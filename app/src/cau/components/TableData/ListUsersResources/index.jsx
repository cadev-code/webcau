import { useEffect, useState } from 'react'
import { BoxContainer } from '../ModalData/styled'
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
    <BoxContainer className="resources_users">
      <h3>Usuarios con Acceso</h3>
      {usersData.length === 0 && (
        <p>No existen usuarios con permisos de acceso...</p>
      )}
    </BoxContainer>
  )
}
