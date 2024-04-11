// react tools imports
import { Navigate } from 'react-router-dom'

// redux imports
import { useSelector } from 'react-redux'

// components imports
import { 
  Box, 
  Typography 
} from '@mui/material'
import { blue } from '@mui/material/colors'
import { Loader } from '../../components'

// styles imports
import { 
  Auth, 
  FormContainer 
} from './styles/styled'


export const AuthLayout = ({ children, title='', subtitle='' }) => {

  const { user, isLoading } = useSelector(state => state.user)

  return isLoading
          ? <Loader />
          : user.length !== 0
            ? <Navigate to="/cau/dashboard/menu" />
            : 
    (
      <Auth>
        <FormContainer>
          <Box
            sx={{ 
              mb: 3
            }}
          >
            <Typography 
              variant="h2"
              color={ blue[400] }
              sx={{
                fontWeight: 600,
                fontSize: 32,
              }}
            >
              { subtitle }
            </Typography>
            <Typography 
              variant="h1"
              sx={{ 
                fontWeight: 600, 
                fontSize: 28,
                color: 'white' 
              }}
              >
              { title }
            </Typography>
          </Box>
          { children }
        </FormContainer>
      </Auth>
    )
}
