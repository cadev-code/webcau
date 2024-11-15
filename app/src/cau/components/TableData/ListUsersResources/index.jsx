import { useEffect, useState } from 'react'
import { BoxContainer, UserResource } from '../ModalData/styled'
import { getResourceUsers } from '../../../api/cmdbResources.api'
import { getUsers } from '../../../api/cmdbDirectory.api'

export const ListUsersResources = ({id_resource, hideContent, setHideContent}) => {

  const [usersData, setUsersData] = useState([])

  const getUsersData = async() => {
    const { data } = await getResourceUsers(id_resource)
    setUsersData(data)
  }

  useEffect(() => {
    getUsersData()
  }, [])

  const [showForm, setShowForm] = useState(false)
  
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
      {showForm && (
        <Form
          usersData={usersData}
          setShowForm={setShowForm}
          hideContent={hideContent}
          setHideContent={setHideContent}
        />
      )}
      {!showForm && !hideContent && (
        <div className="buttons-container">
          <button onClick={() => {
            setShowForm(true)
            setHideContent(true)
          }}>
            Agregar Usuario
          </button>
        </div>
      )}
    </BoxContainer>
  )
}

const Form = ({usersData, setShowForm, setHideContent}) => {

  const [formValues, setFormValues] = useState({id_user: 0, permissions: ''})
  const [allUsers, setAllUsers] = useState([])

  const onChangeInput = ({ target }) =>
    setFormValues({...formValues, [target.id]: target.value})

  const getAllUsersData = async() => {
    const { data } = await getUsers()
    if(usersData.length !== 0) {
      const assignedUsers = usersData.map(({user}) => user)
      const filteredUsers = data.filter(user => !assignedUsers.includes(user.user))
      setAllUsers(filteredUsers)
      return
    }
    setAllUsers(data)
  }

  useEffect(() => {
    getAllUsersData()
  }, [])

  return (
    <div className="form-container">
      <select 
        name="id_user" 
        id="id_user"
        value={formValues.id_user}
        onChange={onChangeInput}
      >
        <option value={0}>-- Usuario --</option>
        {allUsers.map((user) => (
          <option key={user.id_user} value={user.id_user}>{user.name} - {user.user}</option>
        ))}
      </select>
      <select 
        name="permissions" 
        id="permissions"
        value={formValues.permissions}
        onChange={onChangeInput}
      >
        <option value="">-- Permisos --</option>
        {['Lectura', 'Lectura y Escritura', 'Control Total'].map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="buttons">
        <button 
          onClick={() => {
            setShowForm(false)
            setHideContent(false)
          }}
        >
          Cancelar
        </button>
        <button
          onClick={() => {}}
        >
          Agregar
        </button>
      </div>
    </div>
  )
}