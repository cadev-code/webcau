// react imports
import { useEffect, useState } from 'react'
// components imports
import { 
  AddAccountContainer, 
  ButtonsContainer, 
  InputsContainer 
} from './styled'
import { TitleForm } from '../../../styles/Utilities'
import { 
  SubmitButton,
  Input, 
  NegativeButton, 
  NumberSelector, 
  Alert
} from '../../../components'

// office api imports
import { addLicense, editLicense } from '../../api/office.api'

export const AddAccount = ({ 
  title,
  closeWindow,
  loadLicenses,
  aim = 'add',
  licensToEdit,
  closeEdit
}) => {

  const [formValues, setFormValues] = useState({
    name: aim !== 'edit' ? '' : licensToEdit.name,
    account: aim !== 'edit' ? '' : licensToEdit.email,
    password: aim !== 'edit' ? '' : licensToEdit.password,
    amount: aim !== 'edit' ? 1 : licensToEdit.amount
  })

  const inputFormOnChange = ({ target }) => {
    const { id, value } = target
    setFormValues({
      ...formValues,
      [id]: (id !== 'amount' ? value : Number(value))
    })
  }

  const [showAlertError, setShowAlertError] = useState(false)
  const [showAlertAmount, setShowAlertAmount] = useState(false)

  const submitAddAccount = async() => {
    const { name, account, password } = formValues

    // validate formValues
    if(name.length < 4 || account.length < 4 || password.length < 4) {
      setShowAlertError(true)
      setTimeout(() => {
        setShowAlertError(false)
      }, 5000);
      return
    }
    
    await addLicense(formValues)
    await loadLicenses()
    closeWindow('')
  }

  const submitEditAccount = async() => {
    const { name, account, password } = formValues
    const { licensID } = licensToEdit

    // validate formValues
    if(name.length < 4 || account.length < 4 || password.length < 4) {
      setShowAlertError(true)
      setTimeout(() => {
        setShowAlertError(false)
      }, 5000);
      return
    }

    if(formValues.amount < licensToEdit.amount_occupied) {
      setShowAlertAmount(true)
      setTimeout(() => {
        setShowAlertAmount(false)
      }, 5000);
      return
    }

    await editLicense(licensID, formValues)
    await loadLicenses()
    closeEdit(false)
  }
  

  const cancelAddAccount = () => {
    closeWindow('')
  }

  const cancelEditAccount = () => {
    closeWindow(false)
  }

  return (
    <AddAccountContainer>
      <TitleForm>{ title }</TitleForm>
      <InputsContainer>
        <Input 
          label="Nombre"
          id="name"
          width="200px"
          value={formValues.name}
          inputFormOnChange={ inputFormOnChange }
        />
        <Input 
          label="Cuenta"
          id="account"
          width="300px"
          value={formValues.account}
          inputFormOnChange={ inputFormOnChange }
        />
        <Input
          label="Contraseña"
          id="password"
          width="200px"
          value={formValues.password}
          inputFormOnChange={ inputFormOnChange }
        />
        <NumberSelector
          id="amount"
          label="Espacios"
          amountOptions={ 10 }
          value={ formValues.amount }
          inputFormOnChange={ inputFormOnChange }
        />
      </ InputsContainer>
      <ButtonsContainer>
        <NegativeButton
          text="Cancelar"
          action={ aim !== 'edit' ? cancelAddAccount : cancelEditAccount }
        />
        <SubmitButton 
          text="Guardar"
          action={ aim !== 'edit' ? submitAddAccount : submitEditAccount }
        />
      </ButtonsContainer>

      <Alert 
        showAlert={ showAlertError }
        setShowAlert={ setShowAlertError }
        text="Verifica que todos los campos contengan información correcta."
      />

      <Alert 
        showAlert={ showAlertAmount }
        setShowAlert={ setShowAlertAmount }
        text="Para reducir la cantidad de espacios deberas borrar equipos registrados."
      />
    </AddAccountContainer>
  )
}
