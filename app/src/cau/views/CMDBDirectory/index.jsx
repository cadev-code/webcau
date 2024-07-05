import { useEffect, useState } from 'react'
import { TitleActionBar } from '../../components'
import { OptionsManager } from '../../components/TableData'
import { directoryDataRequest } from './directoryDataRequest'
import { addUO, deleteUO, updateUO } from '../../api/cmdbDirectory.api'

export const CMDBDirectory = ({userData}) => {

  
  const [uoData, setUoData] = useState([])

  const {
    getUOData
  } = directoryDataRequest(
    setUoData
  )
  
  useEffect(() => {
    getUOData()
  }, [])
  

  const [showUoManager, setShowUoManager] = useState(false)

  return (
    <>
      <TitleActionBar 
        title="CMDB Active Directory"
        buttons={
          <>
            <button
              onClick={() => setShowUoManager(true)}
            >
              Unidades Organizacionales
            </button>
            <button>
              Dominios
            </button>
            {
              <>
                <button>
                  Áreas
                </button>
                <button className="blue">
                  Agregar Usuario
                </button>
              </>
            }
          </>
        }
      />
      {
        showUoManager &&
          <OptionsManager 
            title="Unidades Organizacionales"
            options={uoData.map(uo => ({id: uo.id_uo, text: uo.uo}))}
            close={() => setShowUoManager(false)}
            addOptionMethod={addUO}
            updateOptionMethod={updateUO}
            deleteOptionMethod={deleteUO}
            refreshOptions={() => {
              getUOData()
              // añadir getUsersData()
            }}
            userIsAdmin={true}
          />
      }
    </>
  )
}
