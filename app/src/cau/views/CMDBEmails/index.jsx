import { 
  useEffect, 
  useState 
} from 'react'

import { TableContainer } from './styled'
import { Table, TitleActionBar } from '../../components/CMDBEmails'

import { emailsDataRequest } from './emailsDataRequest'

export const CMDBEmails = () => {

  const [areasData, setAreasData] = useState([])
  const [registersData, setRegistersData] = useState([])

  useEffect(() => {
    console.log(registersData)
  }, [registersData])

  const { 
    getAreasData, 
    getRegistersData, 
    getRegistersByAreaData 
  } = emailsDataRequest(setAreasData, setRegistersData)

  const registersOnChange = (inputId, value) => {
    if(value === 'Todo') {
      getRegistersData()
    } else {
      const id_area = areasData.filter(({area}) => area === value)[0].id_area
      getRegistersByAreaData(id_area)
    }
  }
 
  useEffect(() => {
    getAreasData()
    getRegistersData()
  }, [])

  return (
    <>
      <TitleActionBar
        areasData={['Todo', ...areasData.map(({area}) => area)]}
        registersOnChange={ registersOnChange }
      />
      <TableContainer>
        <Table 
          tableData={ registersData }
        />
      </TableContainer>
    </>
  )
}