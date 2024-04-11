// components imports
import { 
  InputSearch, 
  Nav 
} from './styled'
import { 
  Box, 
  Button 
} from '@mui/material'
import { Search } from '@mui/icons-material'


export const CatalogueNav = ({ filterActive, btnFilterClick, searchFieldValue, searchOnChange }) => {
  return (
    <Nav>
      <Box sx={{ display: 'flex', gap: '10px' }}>
        {
          [
            ['Todo', 'todo'], 
            ['Incidencias', 'incidencia'],
            ['Solicitudes', 'solicitud'],
            ['Solicitudes Independientes', 'independiente']
          ].map(btn => (
            <Button 
              key={ btn[1] }
              id={ btn[1] }
              variant="outlined"
              sx={{ 
                color: 'white', 
                backgroundColor: `${ filterActive === btn[1] ? '#2196f354' : '#132f4c66' }`,
                '&:hover': { backgroundColor: `${ filterActive === btn[1] ? '#2196f354' : '#0e243b66' }` }
              }}
              onClick={ btnFilterClick }
            >
              { btn[0] }
            </Button>
          ))
        }
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <Search />
        <InputSearch
          placeholder="Buscar"
          value={ searchFieldValue }
          onChange={ searchOnChange }
          style={ searchFieldValue.length > 0 ? { backgroundColor: '#0a2f4d', color: 'white' } : {}}
        />
      </Box>
    </Nav>
  )
}
