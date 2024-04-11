// react imports
import { useNavigate } from 'react-router-dom'

// components imports
import { ListMenu } from '../../components'
import { 
  Call,
  ContactMail,
  DesktopWindowsOutlined, 
  EmailOutlined, 
  FingerprintOutlined, 
  FolderOpenOutlined, 
  Group,
  LaptopMacOutlined,
} from '@mui/icons-material'

export const CMDB = () => {

  const listItems = [
    { text: 'Equipos', icon: <DesktopWindowsOutlined className="icon" />, path: 'equipos' },
    { text: 'Correos', icon: <EmailOutlined className="icon" />, path: 'correos' },
    // { text: 'Laptops', icon: <LaptopMacOutlined className="icon" />, path: 'laptops' },
    // { text: 'Recursos Compartidos', icon: <FolderOpenOutlined className="icon" />, path: 'recursos' },
    // { text: 'Listas Blancas', icon: <ContactMail className="icon" />, path: 'listas' },
    // { text: 'Biométricos', icon: <FingerprintOutlined className="icon" />, path: 'biometricos' },
    // { text: 'Active Directory', icon: <Group className="icon" />, path: 'active' },
    // { text: 'Extensiones Staff', icon: <Call className="icon" />, path: 'extensiones' },
  ]

  const navigate = useNavigate()

  return (
    <ListMenu 
      title="CMDB"
      listItems={ listItems }
      itemOnClick={ navigate }
    />
  )
}