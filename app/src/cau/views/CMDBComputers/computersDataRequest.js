import { getAreas } from "../../api/cmdbComputers.api"

export const computersDataRequest = (
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