import { getAreas, getSites, getTypes } from '../../api/cmdbExtensions.api'

export const extensionsDataRequest = (
  setAreasData,
  setTypesData,
  setSitesData
) => {
  const getAreasData = async() => {
    const { data } = await getAreas()
    setAreasData(data)
  }

  const getTypesData = async() => {
    const { data } = await getTypes()
    setTypesData(data)
  }

  const getSitesData = async() => {
    const { data } = await getSites()
    setSitesData(data)
  }

  return {
    getAreasData,
    getTypesData,
    getSitesData
  }
}