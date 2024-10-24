import { getAreas, getLaptops, getMarks } from '../../api/cmdbLaptops.api'


export const laptopsDataRequest = (
  setAreasData,
  setMarksData,
  setLaptopsData
) => {

  const getAreasData = async() => {
    const { data } = await getAreas()
    setAreasData(data)
  }

  const getMarksData = async() => {
    const { data } = await getMarks()
    setMarksData(data)
  }

  const getLaptopsData = async() => {
    const { data } = await getLaptops()
    setLaptopsData(data)
  }

  return {
    getAreasData,
    getMarksData,
    getLaptopsData
  }
}
