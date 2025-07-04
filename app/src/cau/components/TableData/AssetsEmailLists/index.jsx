import { useEffect, useState } from 'react'
import { BoxContainer } from '../ModalData/styled'
import { getResourceUsers } from '../../../api/cmdbResources.api'
import { addUserResource, deleteUserResource, getUsers } from '../../../api/cmdbDirectory.api'
import { getRegisterLists } from '../../../api/assetsEmails.api'

export const AssetsEmailLists = ({
  id_register,
  hideContent, 
  setHideContent,
  userIsAdmin
}) => {

  const [listsData, setListsData] = useState([])

  const getListsData = async() => {
    const { data } = await getRegisterLists(id_register)
    setListsData(data)
  }

  useEffect(() => {
    getListsData()
  }, [])

  const [showForm, setShowForm] = useState({show: false, type: ''})
  const [listsToRemove, setListsToRemove] = useState([])
  
  return (
    <BoxContainer className="resources-users">
      <h3>Listas de Distribución</h3>
      {listsData.length === 0 && !showForm.show && (
        <p className="legend">No pertenece a una lista de distribución...</p>
      )}
      {listsData.length !== 0 && (
        <div className="users-list">
          {listsData.map(list => (
            <RegisterList 
              key={list.id}
              list={list}
              showForm={showForm}
              setListsToRemove={setListsToRemove}
              listsToRemove={listsToRemove}
            />
          ))}
        </div>
      )}
      {/* {showForm.show && (
        <Form
          usersData={usersData}
          setShowForm={setShowForm}
          showForm={showForm}
          hideContent={hideContent}
          setHideContent={setHideContent}
          id_resource={id_resource}
          getUsersData={getUsersData}
          setListsToRemove={setListsToRemove}
          listsToRemove={listsToRemove}
        />
      )} */}
      {userIsAdmin && !showForm.show && !hideContent && (
        <div className="buttons-container">
          {listsData.length !== 0 && (
            <button
              className="red"
              onClick={() => {
                setShowForm({show: true, type: 'remove'})
                setHideContent(true)
              }}
            >
              Eliminar de Lista
            </button>
          )}
          <button onClick={() => {
            setShowForm({show: true, type: 'add'})
            setHideContent(true)
          }}>
            Agregar Lista
          </button>
        </div>
      )}
    </BoxContainer>
  )
}

const RegisterList = ({list, showForm, setListsToRemove, listsToRemove}) => {
  const onCheckedInput = () => {
    if(!listsToRemove.includes(list)) {
      setListsToRemove(prevLists => [...prevLists, list])
    } else {
      setListsToRemove(prevLists => prevLists.filter(data => data.id !== list.id))
    }
  }

  return (
    <div className="user-container">
      {/* <div className={`user-data ${listsToRemove.includes(user) ? "border-red" : ""}`} key={user.id}> */}
      <div className={`user-data`} key={list.id}>
        <div>
          <p>{list.list}</p>
        </div>
      </div>
      {showForm.type === 'remove' && (
        <input 
          checked={listsToRemove.includes(list)}
          type="checkbox" 
          onChange={onCheckedInput}
        />
      )}
    </div>
  )
}

// const Form = ({
//   usersData, 
//   setShowForm, 
//   showForm, 
//   setHideContent,
//   id_resource, 
//   getUsersData,
//   setListsToRemove,
//   listsToRemove
// }) => {

//   const [formValues, setFormValues] = useState({id_user: '0', permissions: ''})
//   const [allUsers, setAllUsers] = useState([])

//   const onChangeInput = ({ target }) =>
//     setFormValues({...formValues, [target.id]: target.value})

//   const getAllUsersData = async() => {
//     const { data } = await getUsers()
//     if(usersData.length !== 0) {
//       const assignedUsers = usersData.map(({user}) => user)
//       const filteredUsers = data.filter(user => !assignedUsers.includes(user.user))
//       setAllUsers(filteredUsers)
//       return
//     }
//     setAllUsers(data)
//   }

//   useEffect(() => {
//     getAllUsersData()
//   }, [])

//   const closeForm = () => {
//     setListsToRemove([])
//     setShowForm({show: false, type: ''})
//     setHideContent()
//   }

//   const onSubmitForm = async() => {
//     if(showForm.type === 'add') {
//       if(formValues.id_user === '0' || formValues.permissions === '') {
//         return
//       }
//       await addUserResource({...formValues, id_user: Number(formValues.id_user), id_resource})
//     } else {
//       const deletePromises = listsToRemove.map(({id}) => deleteUserResource(id))
//       await Promise.all(deletePromises)
//     }

//     await getUsersData()
//     closeForm()
//   }

//   return (
//     <div className="form-container">
//       {showForm.type === 'add' && (
//         <>
//           <select 
//             name="id_user" 
//             id="id_user"
//             value={formValues.id_user}
//             onChange={onChangeInput}
//           >
//             <option value={0}>-- Usuario --</option>
//             {allUsers.map((user) => (
//               <option key={user.id_user} value={user.id_user}>{user.name} - {user.user}</option>
//             ))}
//           </select>
//           <select 
//             name="permissions" 
//             id="permissions"
//             value={formValues.permissions}
//             onChange={onChangeInput}
//           >
//             <option value="">-- Permisos --</option>
//             {['Lectura', 'Lectura y Escritura', 'Control Total'].map((option, i) => (
//               <option key={i} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//         </>
//       )}
//       <div className="buttons">
//         <button 
//           onClick={closeForm}
//         >
//           Cancelar
//         </button>
//         <button
//           className={`${showForm.type === 'remove' ? "red" : ""}`}
//           onClick={onSubmitForm}
//         >
//           {showForm.type === 'add' ? "Agregar" : "Remover"}
//         </button>
//       </div>
//     </div>
//   )
// }