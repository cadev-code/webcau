import { getAreas, getTypes } from '../../api/cmdbExtensions.api'

export const extensionsDataRequest = (
  setAreasData,
  setTypesData
) => {
  const getAreasData = async() => {
    const { data } = await getAreas()
    setAreasData(data)
  }

  const getTypesData = async() => {
    const { data } = await getTypes()
    setTypesData(data)
  }

  return {
    getAreasData,
    getTypesData
  }
}