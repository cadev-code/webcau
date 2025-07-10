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

import { dataFormActions } from './dataFormActions'
import { alertActions } from '../../../helpers/alertActions'

export const DataCRUD = ({ 
  defaultColumns,
  tableData,
  setOpenAddAction,
  addRowMethod,
  updateRowMethod,
  deleteRowMethod,
  refreshData,
  filenameToExport,
  version="",
  userIsAdmin,
  site
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
        } : (meta && meta.filterVariant === 'date')
          ? {
              ...rest, 
              meta
          } : { ...rest }
    }))
  }, [defaultColumns])

  useEffect(() => {
    const inputChanges = {}
    boxes.forEach(box => {
      if(!box.meta || (box.meta && !box.meta.hideField)) {
        inputChanges[box.accessorKey] = ''
      }
    })
    setDefaultInputChanges(inputChanges)
  }, [boxes])

  useEffect(() => {
    setOpenAddAction({action: showAddModalData})
  }, [])

  const { alertState, setAlertState, resetAlertState, changeStateAlert } = alertActions()

  const {
    closeModalData,
    deleteData,
    showAddModalData,
    showModalData,
    submitData
  } = dataFormActions(
    setOpenModal,
    setDataToShow,
    addMode,
    setAddMode,
    addRowMethod,
    updateRowMethod,
    deleteRowMethod,
    setAlertState,
    resetAlertState,
    refreshData,
    site
  )

  return (
    <>
      <TableContainer>
        <Table
          tableData={ tableData }
          defaultColumns={ defaultColumns }
          showModalData={ showModalData }
          filenameToExport={ filenameToExport }
        />
        {
          openModal &&
          <ModalData
            setOpenModal={ setOpenModal }
            data={ dataToShow }
            addMode={ addMode }
            defaultInputChanges={ defaultInputChanges }
            boxes={ boxes.filter(box => !box.meta || (box.meta && !box.meta.hideField)) }
            closeModalData={ closeModalData }
            submitData={ submitData }
            deleteData={ deleteData }
            version={ version }
            userIsAdmin={ userIsAdmin }
            refreshData={refreshData}
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
