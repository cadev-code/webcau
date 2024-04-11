import { useState } from 'react'

export const alertActions = () => {
  const initialAlertState = { message: '', severity: 'success', itShow: false }

  const [alertState, setAlertState] = useState(initialAlertState)
  
  const resetAlertState = () => 
    setTimeout(() => {
      setAlertState(initialAlertState)
    }, 5000)

  const changeStateAlert = (itShow) => 
    setAlertState({ message: '', severity: 'success', itShow })

  return {
    alertState,
    setAlertState,
    resetAlertState,
    changeStateAlert
  }
}