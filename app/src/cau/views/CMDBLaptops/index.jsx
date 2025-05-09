import { useEffect, useState } from 'react'
import { TitleActionBar } from '../../components'
import { DataCRUD, OptionsManager } from '../../components/TableData'
import { laptopsDataRequest } from './laptopsDataRequest'
import { addArea, addLaptop, addMark, deleteArea, deleteLaptop, deleteMark, updateArea, updateLaptop, updateMark } from '../../api/cmdbLaptops.api'
import { laptopsTableColumns } from './defaultColumns'

export const CMDBLaptops = ({ userData }) => {

  const [userIsAdmin, setUserIsAdmin] = useState(false)

  useEffect(() => {
    setUserIsAdmin(userData.permissions.includes('laptops_cmdb'))
  }, [userData])

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
              userIsAdmin &&
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
          userIsAdmin={userIsAdmin}
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
          userIsAdmin={userIsAdmin}
        />
      )}
      <DataCRUD 
        defaultColumns={defaultColumns}
        tableData={laptopsData}
        addRowMethod={addLaptop}
        updateRowMethod={updateLaptop}
        deleteRowMethod={deleteLaptop}
        refreshData={getLaptopsData}
        setOpenAddAction={setOpenAddAction}
        filenameToExport="cmdb_Laptops"
        version="laptops"
        userIsAdmin={userIsAdmin}
      />
    </>
  )
}