import { useState } from 'react'
import { TitleActionBar } from '../../components'
import { OptionsManager } from '../../components/TableData'

export const CMDBLaptops = () => {

  const [showAreas, setShowAreas] = useState(true)

  return (
    <>
      <TitleActionBar 
        title="CMDB Laptops"
        buttons={
          <>
            <button onClick={() => setShowAreas(true)}>
              Áreas
            </button>
          </>
        }
      />
      {showAreas && (
        <OptionsManager
          title="Áreas"
          close={() => setShowAreas(false)}
          userIsAdmin={true}
        />
      )}
    </>
  )
}