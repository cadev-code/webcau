import { getAreas } from '../../api/cmdbExtensions.api'

export const extensionsDataRequest = (
  setAreasData
) => {
  const getAreasData = async() => {
    const { data } = await getAreas()
    setAreasData(data)
  }

  return {
    getAreasData
  }
}