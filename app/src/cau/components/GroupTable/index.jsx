import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { ButtonsContainer, Container, HeaderGroup, TableContent } from './styled'
import { useEffect, useState } from 'react'
import { GroupTableRow } from '..'
import { ActionButton } from '../../../components/ActionButton'
import { NegativeButton } from '../../../components/NegativeButton'
import { GroupTableAddRow } from '../GroupTableAddRow'

export const GroupTable = ({
  tableId,
  groupName,
  getTableData,
  addRowProps,
  addRowValues,
  setAddRowValues,
}) => {

  const [showTable, setShowTable] = useState(false)
  const [editMode, setEditMode] = useState(false)

  const [tableData, setTableData] = useState([])

  const [isLoadingData, setIsLoadingData] = useState(false)

  useEffect(() => {
    if(showTable) {
      const data = getTableData(tableId)
      setTableData(data)
      setIsLoadingData(false)
    } else {
      setTableData([])
    }
  }, [showTable])

  // addRow
  const [addRow, setAddRow] = useState(false)
  const addInputOnChange = ({target}) => {
    setAddRowValues({...addRowValues, [target.id]: target.value})
  }

  return (
    <Container>
      <HeaderGroup
        onClick={ () => {
          setShowTable(!showTable)
          setIsLoadingData(true)
        }}
      >
        <h3>{ groupName }</h3>
        {
          !showTable
            ? <KeyboardArrowDown/>
            : <KeyboardArrowUp/>
        }
      </HeaderGroup>
      {
        showTable && !isLoadingData &&
        <>
          <TableContent>
            {
              tableData.map(data => (
                <GroupTableRow
                  key={ data.id }
                  registers={ data.registers }
                />
              ))
            }
            {
              addRow &&
              <GroupTableAddRow 
                props={ addRowProps }
                addRowValues={ addRowValues }
                addInputOnChange={ addInputOnChange }
              />
            }
          </TableContent>
          <ButtonsContainer>
            {
              !editMode &&
              <>
                <ActionButton
                  text="Agregar Correo"
                  padding="5px 10px"
                  action={() => setAddRow(true)}
                />
                {/* <ActionButton
                  text="Editar"
                  padding="5px 10px"
                  action={() => setEditMode(true)}
                /> */}
              </>
            }
            {
              editMode &&
              <>
                <ActionButton 
                  text="Guardar Cambios"
                  padding="5px 10px"
                />
                <NegativeButton 
                  text="Cancelar"
                  padding="5px 10px"
                  action={() => setEditMode(false)}
                />
              </>
            }
          </ButtonsContainer>
        </>
      }
    </Container>
  )
}
