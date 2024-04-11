import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes'
import { CauRouter } from '../cau/routes'
import { PrivateRoute } from './PrivateRoute'

export const AppRouter = () => {
  return (
    <Routes>
      
      {/* Auth */}
      <Route path="cau/auth/*" element={ <AuthRoutes /> } />

      {/* webCAU */}
      <Route path="cau/dashboard/*" element={
        <PrivateRoute>
          <CauRouter />
        </PrivateRoute>
      } />

      <Route path="cau/*" element={ <Navigate to="/auth" /> } />
      <Route path="/*" element={ <Navigate to="cau/auth" /> } /> 

    </Routes>
  )
}
