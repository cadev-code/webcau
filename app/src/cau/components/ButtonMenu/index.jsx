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
        width: 200,
        height: 180,
        display: 'flex', 
        flexDirection: 'column',
        fontSize: 16,
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
