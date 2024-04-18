import { 
  useEffect, 
  useState 
} from 'react'

import { 
  ActionBar, 
  Container 
} from './styled'
import { 
  Input,
  Select
} from '../../../../components'

export const TitleActionBar = ({ 
  areasData,
  registersOnChange
}) => {

  const [searchInputValue, setSearchInputValue] = useState('')

  const [selectValue, setSelectValue] = useState('Todo')
  const [areas, setAreas] = useState([])

  useEffect(() => {
    setAreas(areasData)
  }, [areasData])

  const inputOnChange = ({ target }) => {

    if(target.id === 'search') {
      setSearchInputValue(target.value)
      setSelectValue('Todo')
    } else {
      setSelectValue(target.value)
      setSearchInputValue('')
    }

    registersOnChange(target.id, target.value)
    
  }

  return (
    <Container>
      <h2>CMDB Correos</h2>
      <ActionBar>
        <Input
          label="Buscar"
          width="300px"
          id="search"
          value={ searchInputValue }
          inputFormOnChange={ inputOnChange }
        />
        <Select 
          width="300px"
          text="Área"
          id="area"
          options={ areas }
          value={ selectValue }
          inputFormOnChange={ inputOnChange }
        />
      </ActionBar>
    </Container>
  )
}
