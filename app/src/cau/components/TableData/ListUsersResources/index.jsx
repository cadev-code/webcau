import { useEffect, useState } from 'react'
import { BoxContainer } from '../ModalData/styled'
import { getResourceUsers } from '../../../api/cmdbResources.api'
import { addUserResource, getUsers } from '../../../api/cmdbDirectory.api'

export const ListUsersResources = ({id_resource, hideContent, setHideContent}) => {

  const [usersData, setUsersData] = useState([])

  const getUsersData = async() => {
    const { data } = await getResourceUsers(id_resource)
    setUsersData(data)
  }

  useEffect(() => {
    getUsersData()
  }, [])

  const [showForm, setShowForm] = useState({show: false, type: ''})
  
  return (
    <BoxContainer className="resources-users">
      <h3>Usuarios con Acceso</h3>
      {usersData.length === 0 && (
        <p>No existen usuarios con permisos de acceso...</p>
      )}
      <div className="users-list">
        {usersData.map(user => (
          <UserResource 
            key={user.id}
            user={user}
            showForm={showForm}
          />
        ))}
      </div>
      {showForm.show && (
        <Form
          usersData={usersData}
          setShowForm={setShowForm}
          showForm={showForm}
          hideContent={hideContent}
          setHideContent={setHideContent}
          id_resource={id_resource}
          getUsersData={getUsersData}
        />
      )}
      {!showForm.show && !hideContent && (
        <div className="buttons-container">
          <button
            onClick={() => {
              setShowForm({show: true, type: 'remove'})
              setHideContent(true)
            }}
          >
            Remover Usuarios
          </button>
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

const UserResource = ({user, showForm}) => {

  const [toRemove, setToRemove] = useState(false)

  useEffect(() => {
    if(!showForm.show) {
      setToRemove(false)
    }
  }, [showForm])

  return (
    <div className="user-container">
      <div className={`user-data ${toRemove ? "border-red" : ""}`} key={user.id}>
        <div>
          <p>{user.name}</p>
          <p className="blue">{user.user}</p>
        </div>
        <span>{user.permissions}</span>
      </div>
      {showForm.type === 'remove' && (
        <input 
          checked={toRemove}
          type="checkbox" 
          onChange={() => setToRemove(!toRemove)}
        />
      )}
    </div>
  )
}

const Form = ({usersData, setShowForm, showForm, setHideContent, id_resource, getUsersData}) => {

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
    setShowForm({show: false, type: ''})
    setHideContent()
  }

  const onSubmitForm = async() => {
    if(showForm.type === 'add') {
      if(formValues.id_user === '0' || formValues.permissions === '') {
        return
      }
      await addUserResource({...formValues, id_user: Number(formValues.id_user), id_resource})
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