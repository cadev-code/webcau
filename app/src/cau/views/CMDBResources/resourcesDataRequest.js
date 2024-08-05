import { getAreas, getResources } from '../../api/cmdbResources.api'

export const resourcesDataRequest = (
  setResourcesData,
  setAreasData
) => {

  const getAreasData = async() => {
    const { data } = await getAreas()
    setAreasData(data)
  }
  
  const getResourcesData = async() => {
    const { data } = await getResources()
    setResourcesData(data)
  }

  return {
    getResourcesData,
    getAreasData
  }
}