import { Box } from '@mui/material'

const ColumnHeader = ({children, percent}) => {
  return (
    <Box
      sx={{
        width: `${percent}`,
        display: 'flex', 
        flexDirection: 'column',
        borderRight: '1px solid var(--c-primary)',
      }}
    >
      { children }
    </Box>
  )
}

const TitleColumnHeader = ({title}) => {
  return (
    <Box 
      sx={{
        fontSize: '16px',
        fontWeight: 'bold', 
        textAlign: 'center',
        padding: '10px 10px'
      }}
    >
      { title }
    </Box>
  )
}

export const HeaderCard = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        backgroundColor: '#0a1b2d',
        border: '1px solid var(--c-primary)',
        borderRight: 'none',
      }}
    > 
      <ColumnHeader percent="5%">
        <TitleColumnHeader title="ID" />
      </ColumnHeader>
      <ColumnHeader percent="45%">
        <TitleColumnHeader title="INCIDENCIA" />
      </ColumnHeader>
      <ColumnHeader percent="30%">
        <TitleColumnHeader title="CATEGORÍA" />
      </ColumnHeader>
      <ColumnHeader percent="20%">
        <TitleColumnHeader title="SUBCATEGORIA" />
      </ColumnHeader>
    </Box>
  )
}
