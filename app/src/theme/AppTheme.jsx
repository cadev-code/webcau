import { CssBaseline, ThemeProvider } from '@mui/material'
import { blueTheme } from './blueTheme'

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ blueTheme }> {/* provee tema en children (app) */}
      <CssBaseline /> {/* compatibilidad de browsers */}
      { children }
    </ThemeProvider>
  )
}
