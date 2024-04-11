import React from 'react'

export const BackgroundOpacity = ({ 
  children
 }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 2,
        height: '100vh',
        width: '100vw',
        display: 'grid',
        placeItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.8)'
      }}
    >
      { children }
    </div>
  )
}