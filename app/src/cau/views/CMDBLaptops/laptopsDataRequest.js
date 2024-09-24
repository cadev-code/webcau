import { getAreas, getMarks } from '../../api/cmdbLaptops.api'


export const laptopsDataRequest = (
  setAreasData,
  setMarksData
) => {

  const getAreasData = async() => {
    const { data } = await getAreas()
    setAreasData(data)
  }

  const getMarksData = async() => {
    const { data } = await getMarks()
    setMarksData(data)
  }

  return {
    getAreasData,
    getMarksData
  }
}
