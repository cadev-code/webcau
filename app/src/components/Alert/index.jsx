// components imports
import { 
  Alert as AlertComp, 
  Box, 
  Collapse, 
  IconButton,
} from '@mui/material'
import { Close } from '@mui/icons-material'

export const Alert = ({ showAlert, setShowAlert, text, severity="error" }) => {
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
          severity={ severity }
          variant="outlined"
          // sx={{ backgroundColor: 'var(--c-bg)', borderColor: 'var(--c-primary)', color: 'white' }}
          sx={ severity !== 'error' ? { backgroundColor: 'var(--c-bg)', borderColor: 'var(--c-primary)', color: 'white' } : { color: 'white', backgroundColor: 'var(--c-bg)' } }
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
