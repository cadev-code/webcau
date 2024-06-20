import { useEffect, useState } from 'react'
import { Container } from './styled'
import { ListTableData } from '../ListTableData'
import { tablesDataRequest } from '../helpers/tablesDataRequest'
import { tablesProps } from './tablesProps' 

export const ListTables = ({
  zoneSelected,
  activeForm,
  setActiveForm
}) => {

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
      {
        tablesProps.map(table => (
            <ListTableData
              id_zone={zoneSelected.id_zone}
              defaultColumns={table.columns}
              tableData={table.db === 'computers' ? computersData : table.db === 'localEmails' ? localEmailsData : customersEmailsData}
              addRegisterMethod={table.addMethod}
              editRegisterMethod={table.editMethod}
              deleteRegisterMethod={table.deleteMethod}
              refreshData={table.db === 'computers' ? getComputersData : table.db === 'localEmails' ? getLocalEmailsData : getCustomersEmailsData}
              activeForm={activeForm}
              setActiveForm={setActiveForm}
            />      
        ))
      }
    </Container>
  )
}
