import { Box } from '@mui/material'

const Card = ({children, articleOnClick, article}) => {
  return (
    <Box
      sx={{ 
        width: '100%',
        display: 'flex',
        backgroundColor: '#0a1b2d',
        border: '1px solid var(--c-primary)',
        borderTop: 'none',
        borderRight: 'none',
        cursor: 'pointer'
      }}
      onClick={ () => articleOnClick(article) }
    >
      { children }
    </Box>
  )
}

const ColumnCard = ({children, percent}) => {
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

const ContainColumnCard = ({ text, fontSize = '16px' }) => {
  return (
    <Box
      sx={{
        height: '100%',
        padding: '10px',
        display: 'grid',
        placeContent: 'center',
        fontSize: `${ fontSize }`,
        color: '#d4d4d4',
        textAlign: 'center',
      }}
    >
      { text }
    </Box>
  )
}

export const ArticleCard = ({ article, articleOnClick }) => {

  const { id, incidencia, categoria, subcategoria } = article

  return (
    <Card
      articleOnClick={ articleOnClick }
      article={ article }
    >
      <ColumnCard percent="5%">
        <ContainColumnCard text={ id } />
      </ColumnCard>
      <ColumnCard percent="45%">
        <ContainColumnCard text={ incidencia } />
      </ColumnCard>
      <ColumnCard percent="30%">
        <ContainColumnCard text={ categoria } fontSize='14px'/>
      </ColumnCard>
      <ColumnCard percent="20%">
        <ContainColumnCard text={ subcategoria } fontSize='14px' />
      </ColumnCard>
    </Card>
  )
}
