import { useEffect, useState } from 'react'
import { getResources, getUserResources } from '../../../api/cmdbDirectory.api'
import { TextBox } from '../ModalData/styled'

export const UserResourcesData = ({ id_user }) => {

  const [showForm, setShowForm] = useState({show: false, mode: ''})
  const [userResourcesData, setUserResourcesData] = useState([])
  const [resourcesData, setResourcesData] = useState([])

  const getUserResourcesData = async() => {
    const { data } = await getUserResources(id_user)
    setUserResourcesData(data)
  }

  const getResourcesData = async() => {
    const { data } = await getResources()
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

  const [inputValue, setInputValue] = useState({resource: 0, permissions: ''})

  const onInputChange = ({target}) => {
    const { name, value } = target
    setInputValue({...inputValue, [name]: value})
  }

  const closeForm = () => {
    setShowForm({show: false, mode: ''})
    setInputValue({resource: 0, permissions: ''})
  }

  return (
    <TextBox className="resources">
      <span>Recursos Compartidos</span>
      {!showForm.show && (
        <div className="files-container">
          {userResourcesData.map(({resource_name, permissions}, i) => (
            <div className="file directory">
              <p>{resource_name}</p>
              <span>{permissions}</span>
            </div>
          ))}
        </div>
      )}
      {showForm.show && (
        <div className="form">
          <select 
            name="resource" 
            id="resource"
            value={inputValue.resource}
            onChange={onInputChange}
          >
            <option value={0}>-- Recurso --</option>
            {resourcesData.map(({id_resource, resource_name}) => (
              <option key={id_resource} value={id_resource}>
                {resource_name}
              </option>
            ))}
          </select>
          <select 
            name="permissions" 
            id="permissions"
          >
            {['Lectura', 'Lectura y Escritura', 'Control Total'].map((option, i) => (
              <option value={i}>
                {option}
              </option>
            ))}
          </select>
          <div>
            {['cancel', 'save'].map(btn => (
              <button
                onClick={btn === 'cancel' && closeForm}
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