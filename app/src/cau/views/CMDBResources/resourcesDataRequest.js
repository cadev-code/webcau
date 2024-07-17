import { getResources } from '../../api/cmdbResources.api'

export const resourcesDataRequest = (
  setResourcesData
) => {
  
  const getResourcesData = async() => {
    const { data } = await getResources()
    setResourcesData(data)
  }

  return {
    getResourcesData
  }
}