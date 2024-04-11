// react tools imports
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

// redux imports
import { 
  useDispatch
} from 'react-redux'
import { setAuthenticatedUser } from '../../../store/slices'

// components imports
import { AuthLayout } from '../../layout'
import { 
  Button, 
  Grid, 
  TextField 
} from '@mui/material'
import { Alert } from '../../../components'

// apis imports
import { getUser } from '../../api/users.api'

export const Login = () => {

  const { register, handleSubmit } = useForm()
  const [showAlert, setShowAlert] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onSubmit = async(data) => {
    const response = await getUser(data)

    if( response.data.length === 0 ) {
      setShowAlert(true)
      return
    }

    const { username, token, permissions, agent } = response.data[0]

    localStorage.setItem('sessionWebCAU', token)

    dispatch(
      setAuthenticatedUser([{ username, permissions: JSON.parse(permissions), agent }])
    )


    navigate('/cau/dashboard/menu')
  }

  return (
    <AuthLayout 
      title="Centro de Atención a Usuarios"
      subtitle="ODA"
    >

      <form onSubmit={ handleSubmit(onSubmit) } >

        {
          showAlert &&
          <Alert 
            showAlert={ showAlert } 
            setShowAlert={ setShowAlert }
            text="Usuario inexistente, intenta de nuevo."
            severity="error"
          />
        }

        <TextField
          fullWidth
          label="Usuario"
          size="small"
          sx={{ mb: 2 }}
          autoComplete="off"
          { ...register("username", { required: true, minLength: 5 }) }
        />

        <TextField
          type="password"
          fullWidth
          label="Contraseña"
          size="small"
          sx={{ mb: 3 }}
          autoComplete="off"
          { ...register("password", { required: true, minLength: 5 }) }
        />

        <Grid container justifyContent="end">
          <Button variant="contained" type="submit">
            Continuar
          </Button>
        </Grid>
        
      </form>
    </AuthLayout>
  )
}
