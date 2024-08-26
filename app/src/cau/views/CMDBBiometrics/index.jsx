import { useEffect, useState } from 'react'
import { TitleActionBar } from '../../components'
import { OptionsManager } from '../../components/TableData/OptionsManager'
import { biometricsDataRequest } from './biometricsDataRequest'
import { addAssignment, addCampaign, addDevice, addMark, addModel, deleteAssignment, deleteCampaign, deleteMark, deleteModel, updateAssignment, updateCampaign, updateMark, updateModel } from '../../api/cmdbBiometrics.api'
import { DataCRUD } from '../../components/TableData'
import { biometricsTableColumns } from './defaultColumns'

export const CMDBBiometrics = () => {

  const [campaignsData, setCampaignsData] = useState([])
  const [marksData, setMarksData] = useState([])
  const [modelsData, setModelsData] = useState([])
  const [assignmentsData, setAssignmentsData] = useState([])

  const [defaultColumns, setDefaultColumns] = useState(biometricsTableColumns)
  const [devicesData, setDevicesData] = useState([])

  const [showCampaigns, setShowCampaigns] = useState(false)
  const [showMarks, setShowMarks] = useState(false)
  const [showModels, setShowModels] = useState(false)
  const [showAssignments, setShowAssignments] = useState(false)

  const { 
    getCampaignsData,
    getMarksData,
    getModelsData,
    getAssignmentData,
    getDevicesData
  } = biometricsDataRequest(setCampaignsData, setMarksData, setModelsData, setAssignmentsData, setDevicesData)

  useEffect(() => {
    getCampaignsData()
    getMarksData()
    getModelsData()
    getAssignmentData()
    getDevicesData()
  }, [])

  const [openAddAction, setOpenAddAction] = useState({action: () => {}})

  useEffect(() => {
    setDefaultColumns(prevColumns => prevColumns.map(column => 
      column.accessorKey === 'campaign'
        ? {...column, meta: {...column.meta, options: ['Todo', ...campaignsData.map(({campaign}) => campaign)]}}
        : column  
    ))
  }, [campaignsData])

  useEffect(() => {
    setDefaultColumns(prevColumns => prevColumns.map(column => 
      column.accessorKey === 'mark'
        ? {...column, meta: {...column.meta, options: ['Todo', ...marksData.map(({mark}) => mark)]}}
        : column  
    ))
  }, [marksData])

  useEffect(() => {
    setDefaultColumns(prevColumns => prevColumns.map(column => 
      column.accessorKey === 'model'
        ? {...column, meta: {...column.meta, options: ['Todo', ...modelsData.map(({model}) => model)]}}
        : column  
    ))
  }, [modelsData])

  useEffect(() => {
    setDefaultColumns(prevColumns => prevColumns.map(column => 
      column.accessorKey === 'assignment'
        ? {...column, meta: {...column.meta, options: ['Todo', ...assignmentsData.map(({assignment}) => assignment)]}}
        : column  
    ))
  }, [assignmentsData])

  return (
    <>
      <TitleActionBar 
        title="CMDB Biométricos"
        buttons={
          <>
          {/* user is admin down ||| */}
          {true && (
            <>
              <button onClick={() => setShowAssignments(true)}>
                Asignaciones
              </button>
              <button onClick={() => setShowCampaigns(true)}>
                Campañas
              </button>
              <button onClick={() => setShowMarks(true)}>
                Marcas
              </button>
              <button onClick={() => setShowModels(true)}>
                Modelos
              </button>
              <button className="blue"
                onClick={openAddAction.action}
              >
                Agregar Biométrico
              </button>
            </>
          )}
          </>
        }
      />
      {
        showCampaigns &&
          <OptionsManager 
            title="Campañas"
            options={campaignsData.map(({id_campaign, campaign}) => ({id: id_campaign, text: campaign}))}
            addOptionMethod={addCampaign}
            updateOptionMethod={updateCampaign}
            deleteOptionMethod={deleteCampaign}
            refreshOptions={getCampaignsData}
            close={() => setShowCampaigns(false)}
            userIsAdmin={true}
          />
      }
      {
        showMarks &&
          <OptionsManager 
            title="Marcas"
            options={marksData.map(({id_mark, mark}) => ({id: id_mark, text: mark}))}
            addOptionMethod={addMark}
            updateOptionMethod={updateMark}
            deleteOptionMethod={deleteMark}
            refreshOptions={getMarksData}
            close={() => setShowMarks(false)}
            userIsAdmin={true}
          />
      }
      {
        showModels &&
          <OptionsManager 
            title="Modelos"
            options={modelsData.map(({id_model, model}) => ({id: id_model, text: model}))}
            addOptionMethod={addModel}
            updateOptionMethod={updateModel}
            deleteOptionMethod={deleteModel}
            refreshOptions={getModelsData}
            close={() => setShowModels(false)}
            userIsAdmin={true}
          />
      }
      {
        showAssignments &&
          <OptionsManager 
            title="Asignaciones"
            options={assignmentsData.map(({id_assignment, assignment}) => ({id: id_assignment, text: assignment}))}
            addOptionMethod={addAssignment}
            updateOptionMethod={updateAssignment}
            deleteOptionMethod={deleteAssignment}
            refreshOptions={getAssignmentData}
            close={() => setShowAssignments(false)}
            userIsAdmin={true}
          />
      }
      <DataCRUD
        defaultColumns={defaultColumns}
        tableData={devicesData}
        addRowMethod={addDevice}
        refreshData={getDevicesData}
        setOpenAddAction={setOpenAddAction}
        userIsAdmin={true}
      />
    </>
  )
}
