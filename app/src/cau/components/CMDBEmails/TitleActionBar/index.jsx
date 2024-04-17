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
import { getAreas } from '../../../api/cmdbEmails.api'

export const TitleActionBar = () => {

  const [searchInputValue, setSearchInputValue] = useState('')

  const [selectValue, setSelectValue] = useState('Todo')
  const [areas, setAreas] = useState([])

  const getAreasToFilter = async() => {
    const { data } = await getAreas()
    setAreas(data)
  }

  useEffect(() => {
    getAreasToFilter()
  }, [])

  const inputOnChange = ({ target }) => 
    target.id === 'search'
      ? setSearchInputValue(target.value)
      : setSelectValue(target.value)

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
          options={ ['Todo', ...areas.map( ({ area }) => area )] }
          value={ selectValue }
          inputFormOnChange={ inputOnChange }
        />
      </ActionBar>
    </Container>
  )
}
