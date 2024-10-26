import React, { useState } from 'react'
import { TitleActionBar } from '../../components'
import { OptionsManager } from '../../components/TableData'

export const CMDBExtensions = () => {

  const [showAreas, setShowAreas] = useState(false)

  return (
    <>
      <TitleActionBar 
        title="CMDB Extensiones"
        buttons={
          <>
            <button
              onClick={() => setShowAreas(true)}
            >
              Areas
            </button>
          </>
        }
      />
      {showAreas && (
        <OptionsManager 
          title="Áreas"
          options={[]}
          addOptionMethod={() => {}}
          updateOptionMethod={() => {}}
          deleteOptionMethod={() => {}}
          refreshOptions={() => {}}
          close={() => setShowAreas(false)}
          userIsAdmin={true}
        />
      )}
    </>
  )
}
