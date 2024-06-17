import { useEffect, useState } from 'react'
import { Container } from './styled'
import { ListTableData } from '../ListTableData'
import { tablesDataRequest } from '../helpers/tablesDataRequest'
import { computersColumns, customersEmailsColumns, localEmailsColumns } from './tablesProps'

export const ListTables = ({zoneSelected}) => {

  const [computersData, setComputersData] = useState([])
  const [localEmailsData, setLocalEmailsData] = useState([])
  const [customersEmailsData, setCustomersEmailsData] = useState([])

  const {
    getComputersData,
    getLocalEmailsData,
    getCustomersEmailsData,
  } = tablesDataRequest(
    setComputersData,
    setLocalEmailsData,
    setCustomersEmailsData
  )

  useEffect(() => {
    if(zoneSelected.id_zone) {
      getComputersData(zoneSelected.id_zone)
      getLocalEmailsData(zoneSelected.id_zone)
      getCustomersEmailsData(zoneSelected.id_zone)
    }
  }, [zoneSelected])

  return (
    <Container>
      <ListTableData 
        defaultColumns={computersColumns}
        tableData={computersData}
      />      
      <ListTableData 
        defaultColumns={localEmailsColumns}
        tableData={localEmailsData}
      />      
      <ListTableData 
        defaultColumns={customersEmailsColumns}
        tableData={customersEmailsData}
      />
    </Container>
  )
}
