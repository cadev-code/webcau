// components imports
import { 
  Alert as AlertComp, 
  Box, 
  Collapse, 
  IconButton,
} from '@mui/material'
import { Close } from '@mui/icons-material'

export const AlertSucces = ({ showAlert, setShowAlert, text }) => {
  return (
    <Box
      sx={{
        display: `${ showAlert ? 'flex' : 'none' }`, 
        position: "fixed",
        bottom: 30,
        left: 'calc((100vw / 2) - 175px)'
      }}
    >
      <Collapse in={ showAlert }>
        <AlertComp
          severity="success"
          variant="outlined"
          sx={{ backgroundColor: 'var(--c-bg)', borderColor: 'var(--c-primary)', color: 'white' }}
          action={
            <IconButton
              aria-label="cerrar"
              color="inherit"
              size="small"
              onClick={() => {
                setShowAlert(false)
              }}
            >
              <Close />
            </IconButton>
          }
        >
          { text }
        </AlertComp>
      </Collapse>
    </Box>
  )
}
