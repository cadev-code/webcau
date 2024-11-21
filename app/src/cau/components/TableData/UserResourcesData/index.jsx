import { useEffect, useState } from 'react'
import { addUserResource, deleteUserResource, getResources, getUserResources } from '../../../api/cmdbDirectory.api'
import { TextBox } from '../ModalData/styled'
import { Close, Delete, Edit } from '@mui/icons-material'

export const UserResourcesData = ({ id_user, alertState, userIsAdmin }) => {

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
  const [dataToDelete, setDataToDelete] = useState({})

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
    if(showForm.mode === 'add' && (inputValue.id_resource === "0" || inputValue.permissions === '')) {
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
      case 'delete':
        await deleteUserResource(dataToDelete.id)
        break;
    }

    await getUserResourcesData()
    closeForm()
  }

  const deleteOnClick = (resource) => {
    setDataToDelete(resource)
    setShowForm({show: true, mode: 'delete'})
  }

  return (
    <TextBox className="resources">
      <span>Recursos Compartidos</span>
      {!showForm.show && (
        <div className="files-container">
          {userResourcesData.map((resource, i) => (
            <div className="file directory" key={i}>
              <p>{resource.resource_name}</p>
              <span>{resource.permissions}</span>
              {false && (
                <div className="actions">
                  <button onClick={() => deleteOnClick(resource)}>
                    <Close />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      {showForm.show && (
        <div className="form">
          {showForm.mode === 'add' ? (
            <>
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
            </>) : (
              <div>
                {dataToDelete.resource_name}
              </div>
            )}
          <div>
            {['cancel', 'save'].map(btn => (
              <button key={btn}
                onClick={btn === 'cancel' ? closeForm : submitForm}
                className={showForm.mode === 'delete' ? 'delete' : ''}
              >
                {btn === 'cancel' ? 'Cancelar' : showForm.mode === 'add' ? 'Asignar' : 'Retirar Recurso'}
              </button>
            ))}
          </div>
        </div>
      )}
      {!showForm.show && false && (
        <button onClick={() => setShowForm({show: true, mode: 'add'})}>
          Asignar Recurso
        </button>
      )}
    </TextBox>
  )
}