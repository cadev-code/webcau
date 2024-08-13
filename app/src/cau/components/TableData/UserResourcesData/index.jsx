import { useEffect, useState } from 'react'
import { getResources, getUserResources } from '../../../api/cmdbDirectory.api'

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

  return (
    <button onClick={() => setShowForm({show: true, mode: 'add'})}>
      Toggle Mode
    </button>
  )
}