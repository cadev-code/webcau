import { useEffect, useState } from 'react'

import { TitleActionBar } from '../../components/TitleActionBar'
import { DataCRUD, OptionsManager } from '../../components/TableData'

import { 
  addArea, 
  addLicense, 
  addModel, 
  addOrigin, 
  addRegister, 
  deleteArea, 
  deleteLicense, 
  deleteModel, 
  deleteOrigin, 
  deleteRegister, 
  updateArea, 
  updateLicense, 
  updateModel,
  updateOrigin,
  updateRegister
} from '../../api/cmdbComputers.api'
import { computersDataRequest } from './computersDataRequest'
import { columnsData } from './columnsData'
import { Container } from './styled'
import { useSiteValueByProfile } from '../../hooks/useSiteValueByProfile'

// import { dataToExcel } from '../../helpers/dataToExcel'

export const CMDBComputers = ({ userData }) => {

  const [userIsAdmin, setUserIsAdmin] = useState(false)

  const { siteValue, setSiteValue } = useSiteValueByProfile(userData.profile)

  useEffect(() => {
    setUserIsAdmin(userData.permissions.includes('cmdb'))
  }, [userData])
  
  const [areasData, setAreasData] = useState([])
  const [licensesData, setLicensesData] = useState([])
  const [modelsData, setModelsData] = useState([])
  const [registersData, setRegistersData] = useState([])
  const [originData, setOriginData] = useState([])

  const {
    getAreasData,
    getLicensesData,
    getModelsData,
    getRegistersData,
    getOriginData
  } = computersDataRequest(
    setAreasData,
    setLicensesData,
    setModelsData,
    setRegistersData,
    setOriginData
  )

  useEffect(() => {
    getAreasData()
    getLicensesData()
    getModelsData()
    getOriginData()
    getRegistersData()
  }, [])

  const [defaultColumns, setDefaultColumns] = useState(columnsData)
  const [openAddAction, setOpenAddAction] = useState({action: () => {}})

  useEffect(() => {
    setDefaultColumns(prevColumns => prevColumns.map(column =>
      (column.meta && column.accessorKey === 'area')
        ? {...column, meta: {...column.meta, options: ['Todo', ...areasData.map(({area}) => area)]}}
        : column
    ))
  }, [areasData])

  useEffect(() => {
    setDefaultColumns(prevColumns => prevColumns.map(column =>
      (column.meta && column.accessorKey === 'license')
        ? {...column, meta: {...column.meta, options: ['Todo', ...licensesData.map(({license}) => license)]}}
        : column
    ))
  }, [licensesData])

  useEffect(() => {
    setDefaultColumns(prevColumns => prevColumns.map(column =>
      (column.meta && column.accessorKey === 'model')
        ? {...column, meta: {...column.meta, options: ['Todo', ...modelsData.map(({model}) => model)]}}
        : column
    ))
  }, [modelsData])

  useEffect(() => {
    setDefaultColumns(prevColumns => prevColumns.map(column =>
      (column.meta && column.accessorKey === 'origin')
        ? {...column, meta: {...column.meta, options: ['Todo', ...originData.map(({origin}) => origin)]}}
        : column
    ))
  }, [originData])
  

  const [showAreasManager, setShowAreasManager] = useState(false)
  const [showLicensesManager, setShowLicensesManager] = useState(false)
  const [showModelsManager, setShowModelsManager] = useState(false)
  const [showOriginManager, setShowOriginManager] = useState(false)

  return (
    <Container>
      <TitleActionBar
        title="CMDB Equipos"
        userProfile={userData.profile}
        siteValue={siteValue}
        setSiteValue={setSiteValue}
        buttons={
          <>
            <button
              onClick={() => setShowLicensesManager(true)}
            >
              Licencias Siphone
            </button>
            <button
              onClick={() => setShowModelsManager(true)}
            >
              Modelos de Equipo
            </button>
            {
              userIsAdmin &&
                <>
                  <button
                    onClick={() => setShowOriginManager(true)}
                  >
                    Origen de Equipos
                  </button>
                  <button
                    onClick={() => setShowAreasManager(true)}
                  >
                    Áreas
                  </button>
                  <button className="blue"
                    onClick={openAddAction.action}
                  >
                    Agregar Equipo
                  </button> 
                </>
            }
          </>
        }
      />
      <DataCRUD 
        defaultColumns={ defaultColumns }
        tableData={ registersData }
        setOpenAddAction={ setOpenAddAction }
        addRowMethod={ addRegister }
        updateRowMethod={ updateRegister }
        deleteRowMethod={ deleteRegister }
        refreshData={ getRegistersData }
        filenameToExport="cmdbEquipos"
        userIsAdmin={ userIsAdmin }
      />
      {
        showAreasManager &&
          <OptionsManager
            title="Áreas"
            options={ areasData.map(area => ({id: area.id_area, text: area.area})) }
            addOptionMethod={ addArea }
            updateOptionMethod={ updateArea }
            deleteOptionMethod={ deleteArea }
            refreshOptions={() => {
              getAreasData()
            }}
            userIsAdmin={ userIsAdmin }
            close={() => setShowAreasManager(false)}
          />
      }
      {
        showLicensesManager &&
          <OptionsManager 
            title="Licencias Siphone"
            options={ licensesData.map(license => ({id: license.id_license, text: license.license})) }
            addOptionMethod={ addLicense }
            updateOptionMethod={ updateLicense }
            deleteOptionMethod={ deleteLicense }
            refreshOptions={() => {
              getLicensesData()
            }}
            userIsAdmin={ userIsAdmin }
            close={() => setShowLicensesManager(false)}
          />
      }
      {
        showModelsManager &&
          <OptionsManager 
            title="Modelos de Equipo"
            options={ modelsData.map(model => ({id: model.id_model, text: model.model})) }
            addOptionMethod={ addModel }
            updateOptionMethod={ updateModel }
            deleteOptionMethod={ deleteModel }
            refreshOptions={() => {
              getModelsData()
            }}
            userIsAdmin={ userIsAdmin }
            close={() => setShowModelsManager(false)}
          />
      }
      {
        showOriginManager &&
          <OptionsManager 
            title="Origen de Equipo"
            options={ originData.map(origin => ({id: origin.id_origin, text: origin.origin})) }
            addOptionMethod={ addOrigin }
            updateOptionMethod={ updateOrigin }
            deleteOptionMethod={ deleteOrigin }
            refreshOptions={() => {
              getOriginData()
            }}
            userIsAdmin={ userIsAdmin }
            close={() => setShowOriginManager(false)}
          />
      }
    </ Container>
  )
}