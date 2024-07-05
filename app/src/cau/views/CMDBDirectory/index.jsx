import { useEffect, useState } from 'react'
import { TitleActionBar } from '../../components'
import { OptionsManager } from '../../components/TableData'
import { directoryDataRequest } from './directoryDataRequest'
import { addDomain, addUO, deleteDomain, deleteUO, updateDomain, updateUO } from '../../api/cmdbDirectory.api'

export const CMDBDirectory = ({userData}) => {

  
  const [uoData, setUoData] = useState([])
  const [domainsData, setDomainsData] = useState([])

  const {
    getUOData,
    getDomainsData
  } = directoryDataRequest(
    setUoData,
    setDomainsData
  )
  
  useEffect(() => {
    getUOData()
    getDomainsData()
  }, [])
  

  const [showUoManager, setShowUoManager] = useState(false)
  const [showDomainsManager, setShowDomainsManager] = useState(true)

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
            <button
              onClick={() => setShowDomainsManager(true)}
            >
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
      {
        showDomainsManager &&
          <OptionsManager 
            title="Dominios"
            options={domainsData.map(domain => ({id: domain.id_domain, text: domain.domain}))}
            close={() => setShowDomainsManager(false)}
            addOptionMethod={addDomain}
            updateOptionMethod={updateDomain}
            deleteOptionMethod={deleteDomain}
            refreshOptions={() => {
              getDomainsData()
              // añadir getUsersData()
            }}
            userIsAdmin={true}
          />
      }
    </>
  )
}
