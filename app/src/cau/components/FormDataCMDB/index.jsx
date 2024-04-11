
// components imports
import { 
  ButtonsContainer,
  Container, 
  InputsContainer, 
  Title 
} from './styled'
import { 
  Alert,
  BackgroundOpacity,
  Check,
  Input, 
  NegativeButton, 
  Select,
  SubmitButton
} from '../../../components'
import { 
  AddToQueueOutlined, 
  EditNote 
} from '@mui/icons-material'

// data imports
import { 
  areaOptions,
  inputsProps 
} from './data'

// helpers imports
import { alertActions } from '../../helpers'
import { formInitialValues } from '../../views/CMDBComputers/data'
import {
  useState,
  useEffect
} from 'react'

export const FormDataCMDB = ({
  setShowWindow,
  formDataValues,
  setFormDataValues,
  mode,
  submitAddData,
  submitEditData
}) => {

  const [isRented, setIsRented] = useState(false)
  useEffect(() => {
    if(formDataValues.kc_monitor.length !== 0 || formDataValues.kc_cpu.length !== 0)
      setIsRented(true)
  }, [])

  const checkRentedOnClick = () => {
    setIsRented(!isRented)
    setFormDataValues({...formDataValues, kc_monitor: '', kc_cpu: ''})
  }

  const inputFormOnChange = ({ target }) => 
    setFormDataValues({...formDataValues, [target.id]: target.value})

  // alert actions
  const { alertState, setAlertState, resetAlertState, changeStateAlert } = alertActions()

  const submit = async() => {
    // validate fields
    if(formDataValues.IP.length === 0 || formDataValues.mac.length === 0) {
      setAlertState({ message: 'Faltan campos obligatorios (IP - MAC - Área)', severity: 'error', itShow: true })
      resetAlertState()
      return
    }

    if(mode === 'add') await submitAddData()

    if(mode === 'edit') await submitEditData()
  }

  return (
    <BackgroundOpacity>
      <Container>
        <Title>
          <h2>{ (mode === 'add' && 'Agregar Equipo') || (mode === 'edit' && 'Editar Equipo')}</h2>
          { (mode === 'add' && <AddToQueueOutlined className="icon" />) || (mode === 'edit' && <EditNote className="icon" />) }
        </Title>
        <InputsContainer>
          {
            inputsProps.map(input => (
              <Input 
                key={ input.id }
                id={ input.id }
                label={ input.label }
                width={ input.width }
                value={ formDataValues[input.id] }
                inputFormOnChange={ inputFormOnChange }
              />
            ))
          }
          <Select
            id="area"
            text="Área"
            width="300px"
            options={ areaOptions }
            value={ formDataValues.area }
            inputFormOnChange={ inputFormOnChange }
          />
          <div className="rentedContainer">
            <Check 
              label="Rentado"
              checked={ isRented }
              checkAction={ checkRentedOnClick }
            />
            {
              isRented &&
              <>
                <Input
                  id="kc_monitor"
                  label="KC Monitor"
                  value={ formDataValues.kc_monitor }
                  inputFormOnChange={ inputFormOnChange }
                />
                <Input
                  id="kc_cpu"
                  label="KC CPU"
                  value={ formDataValues.kc_cpu }
                  inputFormOnChange={ inputFormOnChange }
                />
              </>
            }
          </div>
        </InputsContainer>
        <ButtonsContainer>
          <NegativeButton 
            text="Cancelar"
            action={ () => {
              setShowWindow('')
              setFormDataValues(formInitialValues)
            }}
          />
          <SubmitButton 
            text="Guardar"
            action={ submit }
          />
        </ButtonsContainer>
      </Container>
      
      <Alert 
        text={ alertState.message }
        showAlert={ alertState.itShow }
        setShowAlert={ changeStateAlert }
        severity={ alertState.severity }
      />

    </BackgroundOpacity>
  )
}
