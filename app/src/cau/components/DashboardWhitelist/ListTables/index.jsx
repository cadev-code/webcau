import { useEffect, useState } from 'react'
import { Container } from './styled'
import { ListTableData } from '../ListTableData'
import { tablesDataRequest } from '../helpers/tablesDataRequest'
import { computersColumns, customersEmailsColumns, localEmailsColumns } from './tablesProps'
import { addComputer, addCustomersEmail, addLocalEmail } from '../../../api/cmdbWhitelists'

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
      <ListTableData
        id_zone={zoneSelected.id_zone}
        defaultColumns={computersColumns}
        tableData={computersData}
        addRegisterMethod={addComputer}
        refreshData={getComputersData}
        activeForm={activeForm}
        setActiveForm={setActiveForm}
      />      
      <ListTableData 
        id_zone={zoneSelected.id_zone}
        defaultColumns={localEmailsColumns}
        tableData={localEmailsData}
        addRegisterMethod={addLocalEmail}
        refreshData={getLocalEmailsData}
        activeForm={activeForm}
        setActiveForm={setActiveForm}
      />      
      <ListTableData 
        id_zone={zoneSelected.id_zone}
        defaultColumns={customersEmailsColumns}
        tableData={customersEmailsData}
        addRegisterMethod={addCustomersEmail}
        refreshData={getCustomersEmailsData}
        activeForm={activeForm}
        setActiveForm={setActiveForm}
      />
    </Container>
  )
}
