import { getAreas, getExtensions, getSites, getTypes } from '../../api/cmdbExtensions.api'

export const extensionsDataRequest = (
  setAreasData,
  setTypesData,
  setSitesData,
  setExtensionsData
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

  const getExtensionsData = async() => {
    const { data } = await getExtensions()
    setExtensionsData(data)
  }

  return {
    getAreasData,
    getTypesData,
    getSitesData,
    getExtensionsData
  }
}