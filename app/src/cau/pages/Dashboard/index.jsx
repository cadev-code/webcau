// react tools imports
import { Outlet } from 'react-router-dom'

// components imports
import { Box } from '@mui/material'
import { Navbar } from '../../components/Navbar'

export const Dashboard = () => {

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'var(--c-bg)'
      }}
    >
      <Navbar 
        btns={[ 
          { title: 'Mapas', link: 'mapas' },
          { title: 'Catálogo de Configuraciones', link: 'catalogo' },
          { title: 'Impresoras', link: 'impresoras' },
          { title: 'Licencias Office', link: 'office' },
          { title: 'CMDB', link: 'cmdb' },
        ]} 
      />
      
      {/* muestra view por ruta */}
      <Outlet />
    </Box>
  )
}
