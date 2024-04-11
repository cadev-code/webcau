// components imports
import { 
  Box, 
  Modal 
} from '@mui/material'

// helpers imports
import { paragraphConverter } from '../../helpers'

export const TopColumn = ({children, width, borderRight = '1px solid var(--c-primary)' }) => {
  return(
    <Box
      sx={{
        width: `${ width }`,
        borderRight: `${ borderRight }`
      }}
    >
      { children }
    </Box>
  )
}

export const HeaderTopColumn = ({text}) => {
  return (
    <Box
      sx={{
        padding: '10px 0',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#0a1b2d',
        borderBottom: '1px solid var(--c-primary)' 
      }}
    >
      { text }
    </Box>
  )
}

export const BodyTopColumn = ({text}) => {
  return (
    <Box
      sx={{
        minHeight: '75px',
        padding: '10px 10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: '15px'
      }}
    >
      { text }
    </Box>
    )
}

export const BottomColumn = ({children, styles }) => {
  return(
    <Box
      sx={ styles }
    >
      { children }
    </Box>
  )
}

export const Image = ({img}) => {
  return(
    <Box
      sx={{
        width: '90%',
        maxHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <a href={`/assets/images/${img.imgURL}`} target="_blank">
        <img
          style={{ 
            maxHeight: '300px', 
            maxWidth: '100%',
            paddingBottom: '10px'
          }} 
          src={`/assets/images/${img.imgURL}`} />
      </a>
      <span>{img.label }</span>
    </Box> 
  )
}

export const ModalArticle = ({ article, open, handleCloseModal }) => {

  const {
    id,
    incidencia, 
    categoria, 
    subcategoria, 
    recurso, 
    procedimiento: procedimientoBefore,
    solucion: solucionBefore, 
    image: imageBefore
  } = article[0]

  const image = JSON.parse(imageBefore)
  const procedimiento = paragraphConverter(procedimientoBefore)
  const solucion = paragraphConverter(solucionBefore)

  return (
    <Modal
      open={ open }
      onClose={ handleCloseModal }
      sx={{
        display: 'grid',
        placeContent: 'center',
        backgroundColor: 'rgba(0,0,0, 0.6)'
      }}
    >
      <Box
        sx={{ 
          width: '75vw', 
          height: '80vh',
          backgroundColor: 'var(--c-bg)',
          border: '3px solid var(--c-primary)',
          borderRadius: '3px',
          outline:  'none'
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '20%',
            display: 'flex',
            borderBottom: '1px solid var(--c-primary)'
          }}
        >
          <TopColumn
            width="5%"
          > {/* id */}
            <HeaderTopColumn text="ID" />
            <BodyTopColumn text={ id } />
          </TopColumn>

          <TopColumn
            width="35%"
          > {/* incidencia */}
            <HeaderTopColumn text="INCIDENCIA" />
            <BodyTopColumn text={ incidencia } />
          </TopColumn>

          <TopColumn
            width="20%"
          > {/* categoria */}
            <HeaderTopColumn text="CATEGORÍA" />
            <BodyTopColumn text={ categoria } />
          </TopColumn>

          <TopColumn
            width="20%"
          > {/* subcategoría */}
            <HeaderTopColumn text="SUBCATEGORÍA" />
            <BodyTopColumn text={ subcategoria } />
          </TopColumn>

          <TopColumn
            width="20%"
            borderRight="none"
          > {/* recursos logicos */}
            <HeaderTopColumn text="RECURSOS LÓGICOS" />
            <BodyTopColumn text={ recurso } />
          </TopColumn>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '80%',
            display: 'flex'
          }}
        >
          <BottomColumn
            styles={{
              width: '40%',
              height: '100%',
              padding: '30px 0',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '30px',
              borderRight: '1px solid var(--c-primary)',
              overflow: 'auto'
            }}
          >{/* Bottom column */}
            {   
              image.length > 0 &&
              image.map((img, i) => (
                <Image 
                  key={ i }
                  img={ img }
                />
              ))
            }
          </BottomColumn>
          <BottomColumn
            styles={{
              width: '20%',
              height: '100%',
              padding: '20px',
              borderRight: '1px solid var(--c-primary)'
            }}
          >
            {
              procedimiento.map((text, i) => (
                <p
                  key={ i }
                  style={{ marginBottom: '20px' }}
                >
                  { text }  
                </p>
              ))
            }
          </BottomColumn>
          <BottomColumn
            styles={{
              width: '40%',
              height: '100%',
              padding: '20px',
              overflow: 'auto'
            }}
          >
            {
              solucion.map((text, i) => (
                <p
                  key={ i }
                  style={{ marginBottom: '20px' }}
                >
                  { text }  
                </p>
              ))
            }
          </BottomColumn>
        </Box>
      </Box>

    </Modal>
  )
}
