// react tools imports
import { Outlet } from 'react-router-dom';

// components imports
import { Box } from '@mui/material';
import { Navbar } from '../../components/Navbar';
import { useEffect, useState } from 'react';

export const Dashboard = ({ userProfile }) => {
  const [buttons, setButtons] = useState([
    { title: 'Mapas', link: 'mapas' },
  ]);

  useEffect(() => {
    if (userProfile === 'cau_oda') {
      setButtons([
        ...buttons,
        {
          title: 'Catálogo de Configuraciones',
          link: 'catalogo',
        },
        { title: 'Impresoras', link: 'impresoras' },
        { title: 'Licencias Office', link: 'office' },
        { title: 'CMDB', link: 'cmdb' },
      ]);
    }
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
