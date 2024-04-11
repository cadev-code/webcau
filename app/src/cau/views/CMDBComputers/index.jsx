// react imports
import { useEffect, useState } from 'react'

// components imports
import { CMDBContainer, ReportBtn } from './styled'
import { 
  FormDataCMDB,
  DataCMDB,
  SidebarCMDB, 
  TableCMDB 
} from '../../components'
import { 
  ActionIconButton, 
  Alert 
} from '../../../components'

// helpers imports
import { alertActions } from '../../helpers'
import { formInitialValues } from './data'
import { cmdbActions } from './cmdbActions'
import { FileDownloadOutlined } from '@mui/icons-material'
import { dataToExcel } from '../../helpers/dataToExcel'

export const CMDBComputers = ({ userData }) => {

  // permissions
  const [permission, setPermission] = useState(false)
  useEffect(() => {
    setPermission(userData.permissions.includes('cmdb'))
  }, [])
  
  const [showWindow, setShowWindow] = useState('')

  // alert actions
  const { alertState, setAlertState, resetAlertState, changeStateAlert } = alertActions()

  // table data
  const [data, setData] = useState([])
  const [dataToShow, setDataToShow] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isSearched, setIsSearched] = useState(false)

  // sort data
  const sortData = (config) => {
    const orderAscending = (column) => function(a,b) {
      if (a[column] < b[column]) return -1
      if (a[column] > b[column]) return 1
      return 0
    }
    
    const orderDescending = (column) => function (a,b) {
      if (a[column] > b[column]) return -1
      if (a[column] < b[column]) return 1
      return 0
    }

    const newDataOrder = data.slice().sort(config.asc ? orderAscending(config.column) : orderDescending(config.column))
    setData(newDataOrder)
  }

  // add data
  const [formDataValues, setFormDataValues] = useState(formInitialValues)
  const [formMode, setFormMode] = useState('')

  // cmdbActions
  const { 
    submitAddData,
    submitDeleteData,
    submitEditData
  } = cmdbActions(formDataValues, setData, data, setAlertState, resetAlertState, setFormDataValues, setShowWindow, formInitialValues, setIsLoading)

  // edit submit action
  const editOnClick = () => {
    setFormMode('edit')
    setShowWindow('formData')
    setFormDataValues(dataToShow[0])
  }

  // excel export data
  const { exportToExcel } = dataToExcel(data)

  /** TODO: CMDB
   *  super filters ('todo', 'word;word;word;')
  **/

  return (
    <>
      <CMDBContainer> 
        <SidebarCMDB
          setShowWindow={ setShowWindow }
          setData={ setData }
          setFormMode={ setFormMode }
          permission={ permission }
          setIsLoading={ setIsLoading }
          setIsSearched={ setIsSearched }
          setAlertState={ setAlertState }
          resetAlertState={ resetAlertState }
        />
        <TableCMDB 
          setShowWindow={ setShowWindow }
          data={ data }
          isLoading={ isLoading }
          isSearched={ isSearched }
          setDataToShow={ setDataToShow }
          sortData={ sortData }
        />
        {
          data.length !== 0 &&
          <ReportBtn>
            <ActionIconButton 
              icon={ 
                <FileDownloadOutlined sx={{ fontSize: '28px' }} /> 
              }
              action={ exportToExcel }
              title="Descargar Datos"
            />
          </ReportBtn>
        }
      </CMDBContainer>
      
      {
        showWindow === 'formData' &&
        <FormDataCMDB
          setShowWindow={ setShowWindow }
          formDataValues={ formDataValues }
          setFormDataValues={ setFormDataValues }
          mode={ formMode }
          submitAddData={ submitAddData }
          submitEditData={ submitEditData }
        />
      }

      {
        showWindow === 'data' &&
        <DataCMDB 
          setShowWindow={ setShowWindow }
          dataToShow={ dataToShow }
          editOnClick={ editOnClick }
          submitDeleteData={ submitDeleteData }
          permission={ permission }
        />
      }

      <Alert
        text={ alertState.message }
        showAlert={ alertState.itShow }
        setShowAlert={ changeStateAlert }
        severity={ alertState.severity }
      />
    </>
  )
}