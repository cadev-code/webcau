import { useEffect, useState } from 'react'
import { addUserResource, getResources, getUserResources } from '../../../api/cmdbDirectory.api'
import { TextBox } from '../ModalData/styled'

export const UserResourcesData = ({ id_user, alertState }) => {

  const [showForm, setShowForm] = useState({show: false, mode: ''})
  const [userResourcesData, setUserResourcesData] = useState([])
  const [resourcesData, setResourcesData] = useState([])

  const getUserResourcesData = async() => {
    const { data } = await getUserResources(id_user)
    setUserResourcesData(data)
  }

  const getResourcesData = async() => {
    const { data } = await getResources()
    if(userResourcesData.length !== 0) {
      const resourcesAssigned = userResourcesData.map(data => data.resource_name)
      const filteredResources = data.filter(resource => !resourcesAssigned.includes(resource.resource_name))
      setResourcesData(filteredResources)
      return
    }
    setResourcesData(data)
  }

  useEffect(() => {
    getUserResourcesData()
  }, [])

  useEffect(() => {
    const { show, mode } = showForm
    if(show && mode === 'add') {
      getResourcesData()
    }
  }, [showForm])

  const [inputValue, setInputValue] = useState({id_resource: 0, permissions: ''})

  const onInputChange = ({target}) => {
    const { name, value } = target
    setInputValue({...inputValue, [name]: value})
  }

  const closeForm = () => {
    setShowForm({show: false, mode: ''})
    setInputValue({id_resource: "0", permissions: ''})
    setAlertState({itShow: false, message: '', severity: 'error'})
  }

  const { setAlertState, resetAlertState } = alertState

  const submitForm = async() => {
    if(inputValue.id_resource === "0" || inputValue.permissions === '') {
      setAlertState({itShow: true, message: 'No puede haber campos vacíos.', severity: 'error'})
      resetAlertState()
      return
    }

    switch(showForm.mode) {
      case 'add':
        await addUserResource({
          ...inputValue,
          id_resource: Number(inputValue.id_resource),
          id_user
        })
        break;
    }

    await getUserResourcesData()
    closeForm()
  }

  return (
    <TextBox className="resources">
      <span>Recursos Compartidos</span>
      {!showForm.show && (
        <div className="files-container">
          {userResourcesData.map(({resource_name, permissions}, i) => (
            <div className="file directory" key={i}>
              <p>{resource_name}</p>
              <span>{permissions}</span>
            </div>
          ))}
        </div>
      )}
      {showForm.show && (
        <div className="form">
          <select 
            name="id_resource" 
            id="id_resource"
            value={inputValue.id_resource}
            onChange={onInputChange}
          >
            <option value="0">-- Recurso --</option>
            {resourcesData.map(({id_resource, resource_name}) => (
              <option key={id_resource} value={id_resource}>
                {resource_name}
              </option>
            ))}
          </select>
          <select 
            name="permissions" 
            id="permissions"
            value={inputValue.permissions}
            onChange={onInputChange}
          >
            <option value="">-- Permisos --</option>
            {['Lectura', 'Lectura y Escritura', 'Control Total'].map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div>
            {['cancel', 'save'].map(btn => (
              <button key={btn}
                onClick={btn === 'cancel' ? closeForm : submitForm}
              >
                {btn === 'cancel'? 'Cancelar' : 'Asignar'}
              </button>
            ))}
          </div>
        </div>
      )}
      {!showForm.show && (
        <button onClick={() => setShowForm({show: true, mode: 'add'})}>
          Asignar Recurso
        </button>
      )}
    </TextBox>
  )
}