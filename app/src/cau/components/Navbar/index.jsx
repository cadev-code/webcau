// react tools imports
import { useNavigate } from 'react-router-dom'

// components imports
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { ButtonLogout } from '../ButtonLogout'
import { useState } from 'react'
import { useEffect } from 'react'

export const Navbar = ({ btns=[] }) => {

  const [btnActive, setBtnActive] = useState('')

  const navigate = useNavigate()

  const urlActive = () => {
    const path = window.location.pathname
    const lastDiagonal = path.lastIndexOf('/')
    const link = path.substring(lastDiagonal+1)
    setBtnActive(link)
  }

  const btnOnClick = (link) => {
    navigate(link)
    urlActive()
  }

  useEffect(() => {
    urlActive()
  }, [])

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'rgba(10, 25, 41, 0.7)',
        backgroundImage: 'none',
        borderBottom: '1px solid #132f4c',
        boxShadow: 'none'
      }}
    >
    <Toolbar 
      sx={{
        width: '100%', 
        margin: '0 auto', 
        justifyContent: 'space-between',
      }}
      >

      <Typography 
        variant="h6" 
        component="div" 
        sx={{ cursor: 'pointer' }}
        onClick={ () => navigate('/cau/dashboard/menu') }
      >
        Centro de Atención a Usuarios
      </Typography>

      <Box sx={{ display: 'flex', gap: 2 }}>
        {
          btns.map( ({ title, link }) => (
            <Button 
              size='medium'
              key={ title }
              sx={{
                backgroundColor: `${ btnActive === link ? '#145e99' : '#132f4c66' }`,
                border: `1px solid ${ btnActive === link ? 'var(--c-primary)' : '#132f4c' }`,
                color: 'white',
                ":hover": {
                  backgroundColor: `${ btnActive === link ? '#145e99' : '#132f4c66' }`,
                  borderColor: '#173a5e'
                }
              }}
              onClick={ () => btnOnClick(link) }
            >
              { title }
            </Button>
          ))
        }
        <Box sx={{ marginLeft: 3 }}>
          <ButtonLogout/>
        </Box>
      </Box>
    </Toolbar>
  </AppBar>
 )
}
