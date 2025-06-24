// react tools imports
import { useNavigate } from 'react-router-dom'

// components imports
import { Button } from '@mui/material'

export const ButtonMenu = ({ text, icon, link }) => {

  const navigate = useNavigate()

  return (
    <Button
      variant="outlined"
      sx={{ 
        width: 150,
        height: 130,
        display: 'flex', 
        flexDirection: 'column',
        fontSize: 14,
        backgroundColor: 'var(--c-btn-m)',
        color: 'white'
      }}
      onClick={ () => navigate(`/cau/dashboard/main/${ link }`) }
    >
      { icon }
      { text }
    </Button>
  )
}
