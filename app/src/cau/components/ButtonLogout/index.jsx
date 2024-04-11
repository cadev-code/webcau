// react tools imports
import { useNavigate } from 'react-router-dom'

// redux imports
import { useDispatch } from 'react-redux'
import { removeAuthenticatedUser } from '../../../store/slices'

// components imports
import { IconButton } from '@mui/material'
import { Logout } from '@mui/icons-material'

export const ButtonLogout = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logout = () => {
    dispatch(removeAuthenticatedUser())
    localStorage.removeItem('sessionWebCAU')

    navigate('/cau/auth/login')
  }

  return (
    <IconButton 
      sx={{ 
        backgroundColor: '#ff0000a1', 
        ":hover": { backgroundColor: 'grey' } 
      }}
      onClick={ () => logout() }
    >
      <Logout/>
    </IconButton>
  )
}

