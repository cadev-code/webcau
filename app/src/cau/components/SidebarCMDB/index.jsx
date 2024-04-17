// react imports
import { useState } from 'react'

// components imports
import {
  Container,
  FiltersContainer,
  Form, 
  SearchContainer, 
  Title
 } from './styled.js'
import { 
  ActionButton,
  ActionIconButton, 
  CheckInput, 
  CheckSelect,
  Input,
  SubmitIconButton 
} from '../../../components/index.js'
import { 
  Add, 
  DesktopWindowsOutlined,
  Search 
} from '@mui/icons-material'

// data imports
import { 
  defaultFormValues, 
  listFilters 
} from './data.js'
import { areaOptions } from '../FormDataCMDB/data.js'

// api imports
import { 
  getDataGeneralFilter, 
  getDataSpecificFilter 
} from '../../api/cmdbComputers.api.js'

export const SidebarCMDB = ({ 
  setShowWindow,
  setData,
  setFormMode,
  permission,
  setIsLoading,
  setIsSearched,
  setAlertState,
  resetAlertState
}) => {

  const [formValues, setFormValues] = useState(defaultFormValues)

  const inputFormOnChange = ({ target }) => {
    setFormValues({...formValues, [target.id]: target.value, search: ''})
  }

  // search
  const inputSearchOnChange = ({ target }) => {
    setFormValues({...defaultFormValues, [target.id]: target.value})
  }

  const searchSubmit = async() => {
    setData([])
    setIsSearched(false)
    
    if( formValues.search !== '' ) {
      
      try {
        setIsLoading(true)
        setIsSearched(true)

        const response = await getDataGeneralFilter(formValues.search)
        const data = response.data
        await setData(data)

        setIsLoading(false)
      } catch (error) {
        setAlertState({ message: 'No se pudo consultar la base de datos, reporta el error.', severity: 'error', itShow })
        resetAlertState()

        setIsLoading(false)
      }
    }
  }

  const filterSubmit = async() => {
    setData([])
    let filtersToApply = {}
    
    Object.keys(formValues).forEach(filter => 
      (formValues[filter] !== '' && filter !== 'search') &&
      (filtersToApply[filter] = formValues[filter])
    )
      
    // validate filters
    if(Object.keys(filtersToApply).length === 0) {
      setIsSearched(false)
      return
    }
      
    try {
      setIsSearched(true)
      setIsLoading(true)

      const response = await getDataSpecificFilter(filtersToApply)
      const data = await response.data
      setData(data)

      setIsLoading(false)
    } catch (error) {
      setAlertState({ message: 'No se puedo consultar la base de datos, reporta el error.', severity: 'error', itShow })
      resetAlertState()

      setIsLoading(false)
    }
  }

  const cleanInput = (id) => 
    setFormValues({...formValues, [id]: ''})

  return (
    <Container>
      <Title>
        <h2>CMDB</h2>
        <DesktopWindowsOutlined sx={{ fontSize: '34px' }}/>
      </Title>
      <Form>
        <SearchContainer>
          <Input 
            id="search"
            bgLabel="#061422"
            label="Filtrar"
            width="100%"
            value={ formValues.search }
            inputFormOnChange={ inputSearchOnChange }
          />
          <ActionIconButton 
            icon={ <Search sx={{ fontSize: '26px' }} /> }
            action={ searchSubmit }
            title="Buscar"
          />
          {
            permission &&
            <SubmitIconButton
              icon={ <Add sx={{ fontSize: '28px', color: 'white' }} /> }
              action={ () => {
                setShowWindow('formData')
                setFormMode('add')
              }}
              title="Agregar Equipo"
            />
          }
        </SearchContainer>
        <FiltersContainer>
          {
            listFilters.map(filter => (
              <CheckInput
                key={ filter.id }
                id={ filter.id }
                label={ filter.name }
                value={ formValues[filter.id] }
                inputFormOnChange={ inputFormOnChange }
                cleanInput={ cleanInput }
              />
            ))
          }
          <CheckSelect 
            id="area"
            label="Área"
            value={ formValues.area }
            inputFormOnChange={ inputFormOnChange }
            cleanInput={ cleanInput }
            options={ areaOptions }
          />
          <div style={{ display: 'flex', justifyContent: 'end' }}>
            <ActionButton 
              text="Filtrar"
              action={ filterSubmit }
            />
          </div>
        </FiltersContainer>
      </Form>
    </Container>
  )
}
