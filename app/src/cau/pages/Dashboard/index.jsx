// react tools imports
import { Outlet } from 'react-router-dom';

// components imports
import { Box } from '@mui/material';
import { Navbar } from '../../components/Navbar';
import { useEffect, useState } from 'react';

export const Dashboard = ({ userProfile }) => {

  const allowedButtons = [
    { title: 'Mapas', link: 'mapas' },
    { title: 'CMDB', link: 'cmdb' },
  ]
  const limitedButtons = [        
    {
      title: 'Catálogo de Configuraciones',
      link: 'catalogo',
    },
    { title: 'Impresoras', link: 'impresoras' },
    { title: 'Licencias Office', link: 'office' },
  ]

  const [buttons, setButtons] = useState(allowedButtons);

  useEffect(() => {
    userProfile !== 'cau_viga' &&
      setButtons([
        allowedButtons[0],
        ...limitedButtons,
        allowedButtons[1]
      ])
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'var(--c-bg)',
      }}>
      <Navbar btns={buttons} />

      {/* muestra view por ruta */}
      <Outlet />
    </Box>
  );
};
