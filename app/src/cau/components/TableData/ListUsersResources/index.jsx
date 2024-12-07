import { useEffect, useState } from 'react'
import { BoxContainer } from '../ModalData/styled'
import { getResourceUsers } from '../../../api/cmdbResources.api'
import { addUserResource, deleteUserResource, getUsers } from '../../../api/cmdbDirectory.api'

export const ListUsersResources = ({
  id_resource, 
  hideContent, 
  setHideContent,
  setResourceDataToExport,
  userIsAdmin
}) => {

  const [usersData, setUsersData] = useState([])

  const getUsersData = async() => {
    const { data } = await getResourceUsers(id_resource)
    setResourceDataToExport(prev => ({...prev, users: data}))
    setUsersData(data)
  }

  useEffect(() => {
    getUsersData()
  }, [])

  const [showForm, setShowForm] = useState({show: false, type: ''})
  const [usersToRemove, setUsersToRemove] = useState([])
  
  return (
    <BoxContainer className="resources-users">
      <h3>Usuarios con Acceso</h3>
      {usersData.length === 0 && !showForm.show && (
        <p className="legend">Sin usuarios asignados...</p>
      )}
      {usersData.length !== 0 && (
        <div className="users-list">
          {usersData.map(user => (
            <UserResource 
              key={user.id}
              user={user}
              showForm={showForm}
              setUsersToRemove={setUsersToRemove}
              usersToRemove={usersToRemove}
            />
          ))}
        </div>
      )}
      {showForm.show && (
        <Form
          usersData={usersData}
          setShowForm={setShowForm}
          showForm={showForm}
          hideContent={hideContent}
          setHideContent={setHideContent}
          id_resource={id_resource}
          getUsersData={getUsersData}
          setUsersToRemove={setUsersToRemove}
          usersToRemove={usersToRemove}
        />
      )}
      {userIsAdmin && !showForm.show && !hideContent && (
        <div className="buttons-container">
          {usersData.length !== 0 && (
            <button
              className="red"
              onClick={() => {
                setShowForm({show: true, type: 'remove'})
                setHideContent(true)
              }}
            >
              Remover Usuarios
            </button>
          )}
          <button onClick={() => {
            setShowForm({show: true, type: 'add'})
            setHideContent(true)
          }}>
            Agregar Usuario
          </button>
        </div>
      )}
    </BoxContainer>
  )
}

const UserResource = ({user, showForm, setUsersToRemove, usersToRemove}) => {
  const onCheckedInput = () => {
    if(!usersToRemove.includes(user)) {
      setUsersToRemove(prevUsers => [...prevUsers, user])
    } else {
      setUsersToRemove(prevUsers => prevUsers.filter(data => data.id !== user.id))
    }
  }

  return (
    <div className="user-container">
      <div className={`user-data ${usersToRemove.includes(user) ? "border-red" : ""}`} key={user.id}>
        <div>
          <p>{user.name}</p>
          <p className="blue">{user.user}</p>
        </div>
        <span>{user.permissions}</span>
      </div>
      {showForm.type === 'remove' && (
        <input 
          checked={usersToRemove.includes(user)}
          type="checkbox" 
          onChange={onCheckedInput}
        />
      )}
    </div>
  )
}

const Form = ({
  usersData, 
  setShowForm, 
  showForm, 
  setHideContent,
  id_resource, 
  getUsersData,
  setUsersToRemove,
  usersToRemove
}) => {

  const [formValues, setFormValues] = useState({id_user: '0', permissions: ''})
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

  const closeForm = () => {
    setUsersToRemove([])
    setShowForm({show: false, type: ''})
    setHideContent()
  }

  const onSubmitForm = async() => {
    if(showForm.type === 'add') {
      if(formValues.id_user === '0' || formValues.permissions === '') {
        return
      }
      await addUserResource({...formValues, id_user: Number(formValues.id_user), id_resource})
    } else {
      const deletePromises = usersToRemove.map(({id}) => deleteUserResource(id))
      await Promise.all(deletePromises)
    }

    await getUsersData()
    closeForm()
  }

  return (
    <div className="form-container">
      {showForm.type === 'add' && (
        <>
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
        </>
      )}
      <div className="buttons">
        <button 
          onClick={closeForm}
        >
          Cancelar
        </button>
        <button
          className={`${showForm.type === 'remove' ? "red" : ""}`}
          onClick={onSubmitForm}
        >
          {showForm.type === 'add' ? "Agregar" : "Remover"}
        </button>
      </div>
    </div>
  )
}