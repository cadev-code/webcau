// react tools imports
import { Navigate, Route, Routes } from 'react-router-dom'

// components imports
import { 
  Menu, 
  Dashboard 
} from '../pages'
import { 
  Catalogue,
  CMDB,
  CMDBBiometrics,
  CMDBComputers,
  CMDBDirectory,
  CMDBEmails,
  CMDBLaptops,
  CMDBResources,
  CMDBWhitelists,
  Maps,
  Office,
  Printers,
} from '../views'
import { useSelector } from 'react-redux'
import { CMDBExtensions } from '../views/CMDBExtensions'

export const CauRouter = () => {

  // User login data
  const { user } = useSelector(state => state.user)
  const userData = user[0]

  return (
    <Routes>
      <Route path="menu" element={ <Menu userData={ userData } /> } />

      <Route path="main" element={ <Dashboard /> }>
        <Route path="impresoras" element={ <Printers userData={ userData } /> } />
        <Route path="catalogo" element={ <Catalogue userData={ userData } /> } />
        <Route path="office" element={ <Office userData={ userData } /> } />

        {/* CMDB */}
        <Route path="cmdb" element={ <CMDB /> } />
        <Route path="cmdb/equipos" element={ <CMDBComputers userData={ userData } /> } />
        <Route path="cmdb/correos" element={ <CMDBEmails userData={ userData } /> } />
        <Route path="cmdb/listas" element={ <CMDBWhitelists userData={ userData } /> } />
        <Route path="cmdb/directory" element={ <CMDBDirectory userData={ userData } /> } />
        <Route path="cmdb/recursos" element={ <CMDBResources userData={ userData } /> }/>
        <Route path="cmdb/biometricos" element={ <CMDBBiometrics userData={ userData } /> }/>
        <Route path="cmdb/laptops" element={ <CMDBLaptops userData={ userData } /> }/>
        <Route path="cmdb/extensiones" element={ <CMDBExtensions userData={ userData } /> }/>

        <Route path="mapas" element={ <Maps userData={ userData } /> } />
      </Route>

      <Route path="main/" element={ <Navigate to="menu" /> } />
      <Route path="/*" element={ <Navigate to="menu" /> } />
    </Routes>
  )
}