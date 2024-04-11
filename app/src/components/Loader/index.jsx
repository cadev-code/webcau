import React from 'react'
import { CustomLoader } from './styled'

export const Loader = () => {
  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      backgroundColor: '#001e3c', 
      display: 'grid', 
      placeContent: 'center'
    }}>
      <CustomLoader />
    </div>
  )
}
