// react imports
import { useEffect, useState } from 'react'

// components imports
import { 
  AccountContainer,
  ButtonContainer,
  Header, 
  LicenseContainer, 
  UsersContainer
} from './styled'
import { UserLicenseCard } from '../UserLicenseCard'
import { 
  ActionButton, 
  ActionIconButton,
  BackgroundOpacity,
  ConfirmDialog,
  SubmitButton
} from '../../../components'
import { TitleForm } from '../../../styles/Utilities'
import { 
  Close, 
  Delete
} from '@mui/icons-material'

// api imports
import { 
  deleteLicense, 
  deleteUser, 
  deleteUsersByLicense, 
  getUsers, 
  updateAmountLicense
} from '../../api/office.api'
import { AddAccount } from '../AddAccount'
import { AddAccountUser } from '../AddAccountUser'

export const License = ({
  setShowWindow,
  licenseData,
  loadLicenses,
  setLicenseToShow,
  refreshLicense,
  permissions
}) => {

  const { licensID, name, email, password, amount, amount_occupied } = licenseData

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [showEditAccount, setShowEditAccount] = useState(false)
  const [showAddUser, setShowAddUser] = useState(false)
  const [showEditUser, setShowEditUser] = useState(false)
  const [userToEdit, setUserToEdit] = useState({})

  // account actions
  const actionDeleteButton = () => {
    setShowDeleteConfirm(true)
  }

  const deleteLicenseAction = async() => {
    await deleteUsersByLicense(licensID)
    await deleteLicense(licensID)
    await loadLicenses()
    setShowWindow('')
  }

  // users
  const [users, setUsers] = useState([])

  const loadUsers = async() => {
    const response = await getUsers(licensID)
    const users = response.data
    setUsers(users)
  }

  useEffect(() => {
    loadUsers()
  }, [])

  // user actions
  const deleteUserAction = async(userID) => {
    const newAmount = {
      newAmount: amount_occupied - 1
    }

    await deleteUser(userID)
    await updateAmountLicense(licensID, newAmount)
    await loadUsers()
    await loadLicenses()
  }

  const editUserAction = (userID) => {
    const userFilter = users.filter(user => user.userID === userID)
    setUserToEdit(userFilter[0])
    setShowEditUser(true)
  }

  return (
    <>
      <LicenseContainer>
        <Header>
          <div>
            <TitleForm>{ name }</TitleForm>
            {
              permissions.includes('office') &&
              <>
                <ActionButton
                  text="Editar"
                  action={ () => setShowEditAccount(true) }
                />
                <ActionIconButton
                  icon={ <Delete /> }
                  action={ actionDeleteButton }
                />
              </>
            }
          </div>
          <ActionIconButton 
            icon={ <Close /> }
            action={ () => setShowWindow('') }
          />
        </Header>
        <AccountContainer>
          <p>Cuenta: <span>{ email }</span></p>
          <p>Contraseña: <span>{ password }</span></p>
          <div>
            <p>Espacios asignados: <span>{ amount }</span></p>
            <p>Espacios ocupados: <span>{ amount_occupied }</span></p>
          </div>
        </AccountContainer>
        <UsersContainer>
          {
            users.map(user => (
              <UserLicenseCard
                permissions={ permissions }
                key={ user.userID }
                userData={ user }
                deleteUserAction={ deleteUserAction }
                editUserAction={ editUserAction }
              />  
            ))
          }
        </UsersContainer>
        {
          (amount_occupied < amount && permissions.includes('office')) &&
          <ButtonContainer>
            <SubmitButton 
              text="Agregar"
              action={ () => setShowAddUser(true) }
            />
          </ButtonContainer>
        }
      </LicenseContainer>

      {
        showEditAccount &&
        <BackgroundOpacity>
          <AddAccount
            title="Editar Cuenta"
            closeWindow={ () => setShowEditAccount(false) }
            licensToEdit={ licenseData }
            aim="edit"
            loadLicenses={ loadLicenses }
            setLicenseToShow={ setLicenseToShow }
            closeEdit={ setShowEditAccount }
            refreshLicense={ refreshLicense }
          />
        </BackgroundOpacity>
      }

      {
        showDeleteConfirm &&
        <BackgroundOpacity>
          <ConfirmDialog
            text="Eliminar Licencia"
            actionCancel={ () => setShowDeleteConfirm(false) }
            actionSubmit={ deleteLicenseAction }
          />
        </BackgroundOpacity>
      }

      {
        showAddUser &&
        <BackgroundOpacity>
          <AddAccountUser 
            licensID={ licensID }
            amount_occupied={ amount_occupied }
            title="Agregar Equipo"
            accountName={ name }
            setShowAddUser={ setShowAddUser }
            loadUsers={ loadUsers }
            loadLicenses={ loadLicenses }
          />
        </BackgroundOpacity>
      }

      {
        showEditUser &&
        <BackgroundOpacity>
          <AddAccountUser 
            licensID={ licensID }
            title="Editar Equipo"
            accountName={ name }
            setShowAddUser={ setShowEditUser }
            loadUsers={ loadUsers }
            aim="edit"
            userToEdit={ userToEdit }
          />
        </BackgroundOpacity>
      }
    </>
  )
}
