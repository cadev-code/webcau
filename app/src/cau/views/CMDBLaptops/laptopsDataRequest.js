import { getAreas } from "../../api/cmdbLaptops.api"


export const laptopsDataRequest = (
  setAreasData,
) => {

  const getAreasData = async() => {
    const { data } = await getAreas()
    setAreasData(data)
  }

  return {
    getAreasData
  }
}
