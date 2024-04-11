import { useState } from 'react'
import { 
  AreasContainer, 
  Container 
} from './styled'
import { 
  BarSearchEmails, GroupTable
} from '../../components'

export const CMDBEmails = () => {

  const [editMode, setEditMode] = useState(false)

  const [areasData, setAreasData] = useState([{id: 1, area: 'Supervisores PB'}, { id: 2, area: 'Zona Segura (IReNe/Monitoreo/APIE)'}])

  const [emailsData, setEmailsData] = useState([
    {id: 1, areaId: 1, name: 'Ahtziri Esmeralda Martinez Gutierrez', email: 'amartinezg@smart-center.com.mx', password: 'X52xLT4Q_/**'},
    {id: 2, areaId: 2, name: 'Marco Arzola Ramírez', email: 'arzolam@smart-center.com.mx', password: 'w2ZQ/3Nv*l06'},
    {id: 3, areaId: 1, name: 'Daniela Keith Ríos Goiz', email: 'riosd@smart-center.com.mx', password: 'v4CO)4Bf#e01'},
    {id: 4, areaId: 2, name: 'Alejandro Jared Martinez Ramirez', email: 'ajmartinez@smart-center.com.mx', password: 'r0JQ&0Tt*w70	'},
  ])

  const getTableData = (tableId) => {
    const filterData = emailsData.filter(data => data.areaId === tableId)
    return filterData.map(({id, areaId, name, email, password}) => ({
      id,
      areaId,
      registers: [
        { data: name, width: '40%' },
        { data: email, width: '40%' },
        { data: password, width: '20%' }
      ]
    }))
  }

  // Add email
  const addRowProps = [
    {prop: 'name', width: '40%'},
    {prop: 'email', width: '40%'},
    {prop: 'password', width: '20%'},
  ]
  const [addRowValues, setAddRowValues] = useState({name: '', email: '', password: ''})

  return (
    <Container>
      <BarSearchEmails
        editMode={ editMode }
        setEditMode={ setEditMode }
      />
      <AreasContainer>
        {
          areasData.map(({id, area}) => (
            <GroupTable
              key={ id }
              tableId={ id }
              groupName={ area }
              getTableData={ getTableData }
              addRowProps={ addRowProps }
              addRowValues={ addRowValues }
              setAddRowValues={ setAddRowValues }
            />
          ))
        }
      </AreasContainer>
    </Container>
  )
}