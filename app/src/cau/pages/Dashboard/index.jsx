// react tools imports
import { Outlet } from 'react-router-dom';

// components imports
import { Box } from '@mui/material';
import { Navbar } from '../../components/Navbar';
import { useEffect, useState } from 'react';

export const Dashboard = ({ userProfile }) => {

  const allowedButtons = [
    { title: 'Hardening', link: 'hardening' },
    { title: 'Activos - Correos', link: 'assets-emails' },
  ]
  const limitedButtons = [        
    { title: 'Mapas', link: 'mapas' },
    {
      title: 'Catálogo de Configuraciones',
      link: 'catalogo',
    },
    { title: 'Impresoras', link: 'impresoras' },
    { title: 'Licencias Office', link: 'office' },
    { title: 'CMDB', link: 'cmdb' },
  ]

  const [buttons, setButtons] = useState(allowedButtons);

  useEffect(() => {
    userProfile !== 'si_viga' &&
      setButtons([
        ...limitedButtons,
        ...allowedButtons
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
