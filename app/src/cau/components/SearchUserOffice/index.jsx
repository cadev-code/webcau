// react imports
import { 
  useEffect, 
  useState 
} from 'react'

// components imports
import { 
  Container, 
  InputUsers, 
  Result, 
  ResultContainer 
} from './styled'

// api imports
import { getLicense, getUsersByName } from '../../api/office.api'

export const SearchUserOffice = ({
  setShowWindow,
  setLicenseToShow
}) => {

  const [formValue, setFormValue] = useState('')
  const inputOnChange = ({ target }) => {
    setFormValue(target.value)
  }

  const [users, setUsers] = useState([])
  const loadUsers = async() => {
    const { data } = await getUsersByName(formValue)
    setUsers(data)
  }

  useEffect(() => {
    loadUsers()
  }, [formValue])

  const userOnClick = async(licensID) => {
    const { data } = await getLicense(licensID)
    setLicenseToShow(data[0])
    setShowWindow('license')
  }

  return (
    <Container>
      <InputUsers 
        placeholder="Buscar usuario..."
        required
        value={ formValue }
        onChange={ inputOnChange }
      />
      <ResultContainer users={ users.length }>
        {
          users.map(usr => (
            <Result 
              key={ usr.userID }
              onClick={ () => userOnClick(usr.licensID) }
            >
              { usr.name }
            </Result>
          ))
        }
      </ResultContainer>
    </Container>
  )
}
