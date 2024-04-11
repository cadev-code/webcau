// react imports
import { useState } from 'react'

// components imports
import { AddUserContainer, ButtonsContainer, InputsContainer, TitleContainer } from './styled'
import { Input, NegativeButton, Select, SubmitButton } from '../../../components'
import { TitleForm } from '../../../styles/Utilities'

// api imports
import { 
  addUser, 
  editUser, 
  updateAmountLicense 
} from '../../api/office.api'

export const AddAccountUser = ({
  licensID,
  amount_occupied,
  title,
  accountName,
  setShowAddUser,
  loadUsers,
  loadLicenses,
  aim="",
  userToEdit
}) => {

  const options = ['Supervisores','Generación de la Información','Irene','Discado','Gerentes','Control Interno','Capacitadores','Monitoreo','Usuarios','CAU','Directores']

  const [formValues, setFormValues] = useState({
    name: aim !== 'edit' ? '' : userToEdit.name,
    netBIOS: aim !== 'edit' ? '' : userToEdit.netBIOS,
    area: aim !== 'edit' ? 'Supervisores' : userToEdit.area
  })

  const inputFormOnChange = ({ target }) => {
    const { id, value } = target
    setFormValues({ ...formValues, [id]: value })
  }

  const addUserAction = async() => {
    const newAmount = {
      newAmount: amount_occupied + 1
    }
    
    await addUser({ ...formValues, licensID})
    await loadUsers()
    await updateAmountLicense(licensID, newAmount)
    await loadLicenses()
    setShowAddUser(false)
  }

  const editUserAction = async() => {
    await editUser(userToEdit.userID, formValues)
    await loadUsers()
    setShowAddUser(false)
  }

  return (
    <AddUserContainer>
      <TitleContainer>
        <TitleForm>{ title }</TitleForm>
        <p>{ accountName }</p>
      </TitleContainer>
      <InputsContainer>
        <Input
          id="name"
          label="Nombre"
          value={ formValues.name }
          inputFormOnChange={ inputFormOnChange }
        />
        <Input
          id="netBIOS"
          label="NetBIOS"
          value={ formValues.netBIOS }
          inputFormOnChange={ inputFormOnChange }
        />
        <Select 
          id="area"
          text="Área"
          width="260px"
          options={ options }
          value={ formValues.area }
          inputFormOnChange={ inputFormOnChange }
        />
      </InputsContainer>
      <ButtonsContainer>
        <NegativeButton 
          text="Cancelar"
          action={ () => setShowAddUser(false) }
        />
        <SubmitButton 
          text="Guardar"
          action={ aim !== 'edit' ? addUserAction : editUserAction }
        />
      </ButtonsContainer>
    </AddUserContainer>
  )
}
