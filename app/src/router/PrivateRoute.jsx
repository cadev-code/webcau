import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Loader } from '../components'

export const PrivateRoute = ({ children }) => {

  const { user, isLoading } = useSelector(state => state.user)

  return isLoading
          ? <Loader />
          : user.length === 0
            ? <Navigate to="/cau/auth/login" />
            : children
}
