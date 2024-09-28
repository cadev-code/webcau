import { useEffect, useState } from 'react'
import { TitleActionBar } from '../../components'
import { DataCRUD, OptionsManager } from '../../components/TableData'
import { laptopsDataRequest } from './laptopsDataRequest'
import { addArea, addMark, deleteArea, deleteMark, updateArea, updateMark } from '../../api/cmdbLaptops.api'
import { laptopsTableColumns } from './defaultColumns'

export const CMDBLaptops = () => {

  const [areasData, setAreasData] = useState([])
  const [marksData, setMarksData] = useState([])
  const [laptopsData, setLaptopsData] = useState([])

  const [showAreas, setShowAreas] = useState(false)
  const [showMarks, setShowMarks] = useState(false)

  const { getAreasData, getMarksData, getLaptopsData } = laptopsDataRequest(
    setAreasData,
    setMarksData,
    setLaptopsData
  )

  useEffect(() => {
    getAreasData()
    getMarksData()
    getLaptopsData()
  }, [])

  const [defaultColumns, setDefaultColumns] = useState(laptopsTableColumns)
  const [openAddAction, setOpenAddAction] = useState({action: () => {}})

  useEffect(() => {
    setDefaultColumns(prevColumns => prevColumns.map(column => (
      column.accessorKey === 'area'
        ? {...column, meta: {...column.meta, options: ['Todo', ...areasData.map(({area}) => area)]}}
        : column
    )))
  }, [areasData])

  useEffect(() => {
    setDefaultColumns(prevColumns => prevColumns.map(column => (
      column.accessorKey === 'mark'
        ? {...column, meta: {...column.meta, options: ['Todo', ...marksData.map(({mark}) => mark)]}}
        : column
    )))
  }, [marksData])

  return (
    <>
      <TitleActionBar 
        title="CMDB Laptops"
        buttons={
          <>
            <button onClick={() => setShowAreas(true)}>
              Áreas
            </button>
            <button onClick={() => setShowMarks(true)}>
              Marcas
            </button>
            {
              true &&
                <button className="blue" onClick={openAddAction.action}>
                  Agregar Laptop
                </button>
            }
          </>
        }
      />
      {showAreas && (
        <OptionsManager
          title="Áreas"
          options={areasData.map(({id_area, area}) => ({id: id_area, text: area}))}
          addOptionMethod={addArea}
          updateOptionMethod={updateArea}
          deleteOptionMethod={deleteArea}
          refreshOptions={getAreasData}
          close={() => setShowAreas(false)}
          userIsAdmin={true}
        />
      )}
      {showMarks && (
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
      )}
      <DataCRUD 
        defaultColumns={defaultColumns}
        tableData={laptopsData}
        addRowMethod={() => {}}
        updateRowMethod={() => {}}
        deleteRowMethod={() => {}}
        refreshData={() => {}}
        setOpenAddAction={setOpenAddAction}
        filenameToExport="cmdb_Laptops"
        userIsAdmin={true}
      />
    </>
  )
}