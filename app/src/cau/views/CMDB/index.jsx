// react imports
import { useNavigate } from 'react-router-dom'

// components imports
import { ListMenu } from '../../components'
import { 
  AlternateEmail,
  Call,
  ContactMail,
  DesktopWindowsOutlined, 
  EmailOutlined, 
  FingerprintOutlined, 
  FolderOpenOutlined, 
  Group,
  LaptopMacOutlined,
} from '@mui/icons-material'
import { useEffect, useState } from 'react'

export const CMDB = ({userProfile}) => {

  const allowedAccessItems = [
    { text: 'Equipos', icon: <DesktopWindowsOutlined className="icon" />, path: 'equipos' },
    { text: 'Correos', icon: <EmailOutlined className="icon" />, path: 'correos' },
  ]

  const limitedAccessItems = [
    { text: 'Listas Blancas', icon: <ContactMail className="icon" />, path: 'listas' },
    { text: 'Active Directory', icon: <Group className="icon" />, path: 'directory' },
    { text: 'Recursos Compartidos', icon: <FolderOpenOutlined className="icon" />, path: 'recursos' },
    { text: 'Biométricos', icon: <FingerprintOutlined className="icon" />, path: 'biometricos' },
    { text: 'Laptops', icon: <LaptopMacOutlined className="icon" />, path: 'laptops' },
    { text: 'Extensiones', icon: <Call className="icon" />, path: 'extensiones' },
    { text: 'Base Correos', icon: <AlternateEmail className="icon" />, path: 'base-emails' },
  ]

  const [listItems, setListItems] = useState(allowedAccessItems)

  useEffect(() => {
    userProfile !== 'cau_viga' &&
      setListItems([...allowedAccessItems, ...limitedAccessItems])
  }, [])

  const navigate = useNavigate()

  return (
    <ListMenu 
      title="CMDB"
      listItems={ listItems }
      itemOnClick={ navigate }
    />
  )
}