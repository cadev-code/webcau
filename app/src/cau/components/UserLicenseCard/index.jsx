// react imports
import { useEffect, useState } from 'react'

// components imports
import { 
  ActionsContainer, 
  UserContainer, 
  UserData 
} from './styled'
import { ActionIconButton } from '../../../components'
import { Delete, Edit } from '@mui/icons-material'

export const UserLicenseCard = ({ 
  userData,
  deleteUserAction,
  editUserAction,
  permissions
}) => {

  const { name, netBIOS, area, userID } = userData
  const [isAuthorizedUser, setIsAuthorizedUser] = useState()

  useEffect(() => {
    setIsAuthorizedUser(permissions.includes('office'))
  }, [])
  

  return (
    <UserContainer>
      <UserData  permissions={ isAuthorizedUser }>
        <p>{ name }</p>
        <span>{ netBIOS }</span>
        <p>{ area }</p>
      </UserData>
      {
        isAuthorizedUser &&
        <ActionsContainer>
          <ActionIconButton 
            icon={ <Edit /> }
            borderRadius='0'
            action={ () => editUserAction(userID) }
          />
          <ActionIconButton 
            icon={ <Delete /> }
            borderRadius='0 5px 5px 0'
            action={ () => deleteUserAction(userID) }
          />
        </ActionsContainer>
      }
    </UserContainer>
  )
}
