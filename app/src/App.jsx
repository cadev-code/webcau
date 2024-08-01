import { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { setAuthenticatedUser } from './store/slices'
import { getAuthenticatedUser } from './auth/api/users.api'

import { AppRouter } from './router'

import { GlobalStyle } from './styles/GlobalStyles'
import { Utilities } from './styles/Utilities'

import { AppTheme } from './theme/AppTheme'

export const App = () => {
  const dispatch = useDispatch()
  const token = localStorage.getItem('sessionWebCAU')
  
  async function verifyToken() {
    const response = await getAuthenticatedUser(token)

    if(response.data.length === 0) { // verifica que la session siga vigente
      dispatch(
        setAuthenticatedUser([])
      )

      localStorage.removeItem('sessionWebCAU')
      return
    }

    const { username, permissions, agent } = response.data
    dispatch(
      setAuthenticatedUser([{ username, permissions: JSON.parse(permissions), agent }])
    )
  }

  useEffect(() => {
    token
      ? verifyToken()
      : dispatch(
        setAuthenticatedUser([])
      )

      document.addEventListener('copy', (e) => {
        e.preventDefault()
        const selectedText = window.getSelection().toString()
        e.clipboardData.setData('text/plain', selectedText)
      })
  }, [])

  return (
    <>
      <AppTheme>
        <GlobalStyle/>
        <Utilities/>
        <AppRouter />
      </AppTheme>
    </>
  )
}
