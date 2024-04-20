// components imports
import { 
  ButtonsContainer,
  CardsContainer, 
  Container 
} from './styled'
import { DataCardCMDB } from '../DataCardCMDB'
import { 
  ActionButton, 
  ActionIconButton, 
  BackgroundOpacity, 
  ConfirmDialog
} from '../../../components'
import { 
  Bookmark,
  Call,
  Delete,
  DesktopWindowsOutlined,
  DeveloperBoard,
  Dns,
  LanOutlined,
  LocalOffer,
  Map,
  Monitor,
  Padding,
  Person,
  Place,
  Router,
  Tag,
  TravelExplore 
} from '@mui/icons-material'
import { useState } from 'react'

export const DataCMDB = ({ 
  setShowWindow,
  dataToShow,
  editOnClick,
  submitDeleteData,
  permission
}) => {

  const cardsProps = [
    { id: 'idMapa', title: 'ID Mapa', icon: <Place className="icon" /> },
    { id: 'netBIOS', title: 'NetBIOS', icon: <TravelExplore className="icon" /> },
    { id: 'IP', title: 'IP', icon: <LanOutlined className="icon" /> },
    { id: 'mac', title: 'MAC', icon: <DesktopWindowsOutlined className="icon" /> },
    { id: 'ext', title: 'Extensión', icon: <Call className="icon" /> },
    { id: 'nodo', title: 'Nodo', icon: <Dns className="icon" /> },
    { id: 'hash', title: 'Hash', icon: <Tag className="icon" /> },
    { id: 'vlan', title: 'VLAN', icon: <Router className="icon" /> },
    { id: 'licSiph', title: 'Licencia SIP', icon: <Bookmark className="icon" /> },
    { id: 'staff', title: 'Personal', icon: <Person className="icon" /> },
    { id: 'model', title: 'Modelo', icon: <DeveloperBoard className="icon" /> },
    { id: 'serviceTag', title: 'Etiqueta de Servicio', icon: <LocalOffer className="icon" /> },
    { id: 'area', title: 'Área', icon: <Map className="icon" /> },
    { id: 'kc_monitor', title: 'KC Monitor', icon: <Monitor className="icon" /> },
    { id: 'kc_cpu', title: 'KC CPU', icon: <Padding className="icon" /> },
  ]

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  const validateKC = (id) => {
    if(id !== 'kc_monitor' && id !== 'kc_cpu')
      return true

    if(dataToShow[0][id].length !== 0)
      return true

    return false
  }

  return (
    <>
      <BackgroundOpacity>
        <Container>
          <CardsContainer>
            {
              cardsProps.map(card => validateKC(card.id) && (
                <DataCardCMDB 
                  key={ card.id }
                  icon={ card.icon }
                  title={ card.title }
                  data={ dataToShow[0][card.id] }
                />
              ))
            }
          </CardsContainer>
          <ButtonsContainer permission={ permission }>
            {
              permission &&
              <div>
                <ActionIconButton 
                  icon={ <Delete /> }
                  action={ () => setShowDeleteConfirm(true) }
                />
                <ActionButton
                  text="Editar"
                  action={ editOnClick }
                />
              </div>
            }
            <ActionButton
              text="Cerrar"
              action={ () => setShowWindow('') }
            />
          </ButtonsContainer>
        </Container>
      </BackgroundOpacity>

      {
        showDeleteConfirm &&
        <BackgroundOpacity>
          <ConfirmDialog 
            text="Eliminar Registro"
            actionCancel={ () => setShowDeleteConfirm(false) }
            actionSubmit={ () => submitDeleteData(dataToShow[0].id) }
          />
        </BackgroundOpacity>
      }
    </>
  )
}
