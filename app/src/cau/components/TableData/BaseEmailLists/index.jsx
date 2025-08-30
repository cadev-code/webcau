import { useEffect, useState } from 'react'
import { BoxContainer } from '../ModalData/styled'
import { addEmailToList, getLists, getRegisterLists, removeMailFromList } from '../../../api/baseEmails.api'

export const BaseEmailLists = ({
  id_register,
  hideContent, 
  setHideContent,
  userIsAdmin,
  refreshData
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
      {showForm.show && (
        <Form
          listsData={listsData}
          setShowForm={setShowForm}
          showForm={showForm}
          hideContent={hideContent}
          setHideContent={setHideContent}
          id_register={id_register}
          getListsData={getListsData}
          setListsToRemove={setListsToRemove}
          listsToRemove={listsToRemove}
          refreshData={refreshData}
        />
      )}
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
      <div className={`user-data ${listsToRemove.includes(list) ? "border-red" : ""}`} key={list.id}>
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

const Form = ({
  listsData, 
  setShowForm, 
  showForm, 
  setHideContent,
  id_register, 
  getListsData,
  setListsToRemove,
  listsToRemove,
  refreshData
}) => {

  const [formValues, setFormValues] = useState({id_list: 0})
  const [allLists, setAllLists] = useState([])

  const onChangeInput = ({ target }) =>
    setFormValues({id_list: target.value})

  const getAllListsData = async() => {
    const { data } = await getLists()
    if(listsData.length !== 0) {
      const assignedLists = listsData.map(({id_list}) => id_list)
      const filteredLists = data.filter(list => !assignedLists.includes(list.id_list))
      setAllLists(filteredLists)
      return
    }
    setAllLists(data)
  }

  useEffect(() => {
    getAllListsData()
  }, [])

  const closeForm = () => {
    setListsToRemove([])
    setShowForm({show: false, type: ''})
    setHideContent()
  }

  const onSubmitForm = async() => {
    if(showForm.type === 'add') {
      if(formValues.id_list === 0) {
        return
      }
      await addEmailToList({id_register, ...formValues})
    } else {
      const deletePromises = listsToRemove.map(({id}) => removeMailFromList(id))
      await Promise.all(deletePromises)
    }

    await getListsData()
    await refreshData()
    closeForm()
  }

  return (
    <div className="form-container">
       {showForm.type === 'add' && (
          <select 
            name="id_list" 
            id="id_list"
            value={formValues.id_list}
            onChange={onChangeInput}
          >
            <option value={0}>-- Lista de Distribución --</option>
            {allLists.map((list) => (
              <option key={list.id_list} value={list.id_list}>{list.list}</option>
            ))}
          </select>
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