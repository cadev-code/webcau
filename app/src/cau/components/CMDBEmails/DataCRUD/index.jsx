import { 
  useState, 
  useEffect 
} from 'react'

import { TableContainer } from './styled'
import { 
  ModalData, 
  Table 
} from '../'
import { Alert } from '../../../../components'
import { alertActions } from '../../../helpers/alertActions'

export const DataCRUD = ({ 
  defaultColumns,
  tableData,
  setOpenAddAction,
  addRowMethod,
  updateRowMethod,
  refreshData
 }) => {

  const [openModal, setOpenModal] = useState(false)
  const [addMode, setAddMode] = useState(false)
  const [defaultInputChanges, setDefaultInputChanges] = useState({})
  const [dataToShow, setDataToShow] = useState({})
  const [boxes, setBoxes] = useState([])

  useEffect(() => {
    setBoxes(defaultColumns.map(column => {
      // if defaultColumns props change, add them
      const { size, meta,...rest } = column
      return (meta && meta.filterVariant === 'select')
        ? {
          ...rest,
          meta: {
            ...meta,
            options: meta.options.filter(option => option !== 'Todo')
          }
        } : {...rest}
    }))
  }, [defaultColumns])

  useEffect(() => {
    const inputChanges = {}
    boxes.forEach(box => inputChanges[box.accessorKey] = '')
    setDefaultInputChanges(inputChanges)
  }, [boxes])

  const showModalData = (data) => {
    setOpenModal(true)
    setDataToShow(data)
  }

  const showAddModalData = () => {
    setOpenModal(true)
    setAddMode(true)
  }

  useEffect(() => {
    setOpenAddAction({action: showAddModalData})
  }, [])

  const closeModalData = () => {
    setOpenModal(false)
    setDataToShow({})
    setAddMode(false)
  }

  const { alertState, setAlertState, resetAlertState, changeStateAlert } = alertActions()

  const submitData = async(data) => {
      try {
        if(addMode) {
          await addRowMethod(data)
        } else {
          await updateRowMethod(data)
        }
        setAlertState({ 
          message: `Los datos se ${addMode ? 'agregaron' : 'actualizaron'} correctamente`, 
          severity: 'success', 
          itShow: true 
        })
        resetAlertState()
        closeModalData()
      } catch (error) {
        setAlertState({ 
          message: 'Hubo un error en el servidor, informa al administrador', 
          severity: 'error', 
          itShow: true 
        })
        resetAlertState()
        closeModalData()
        return
      }
    
    await refreshData()
  }

  return (
    <>
      <TableContainer>
        <Table
          tableData={ tableData }
          defaultColumns={ defaultColumns }
          showModalData={ showModalData }
          />
        {
          openModal &&
          <ModalData
            setOpenModal={ setOpenModal }
            data={ dataToShow }
            addMode={ addMode }
            defaultInputChanges={ defaultInputChanges }
            boxes={ boxes }
            closeModalData={ closeModalData }
            submitData={ submitData }
          />
        }
      </TableContainer>
      <Alert 
        text={ alertState.message }
        showAlert={ alertState.itShow }
        severity={ alertState.severity }
        setShowAlert={ changeStateAlert }
      />
    </>
  )
}
