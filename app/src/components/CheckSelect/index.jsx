import { Done } from '@mui/icons-material'
import { CheckInputContainer, Checkmark } from './styled'
import { useEffect, useState } from 'react'

export const CheckSelect = ({
  id,
  label,
  value,
  options,
  inputFormOnChange,
  cleanInput
}) => {

  const [checked, setChecked] = useState(false)

  useEffect(() => {
    !checked && cleanInput(id)
  }, [checked])

  return (
    <CheckInputContainer>
      <Checkmark
        checked={ checked }
        onClick={ () => setChecked(!checked) }
        value={ value }
      >
        <Done sx={{ fontSize: '20px', color: checked ? 'white' : 'transparent' }} />
      </Checkmark>
      <label
        onClick={() => setChecked(!checked)}
      >{ label }</label>
      <select
        id={ id }
        value={ value }
        onChange={ inputFormOnChange }
      >
        {
          options.map((opt, i) => (
            <option key={ i } value={ opt }>{ opt }</option>
          ))
        }
      </select>
    </CheckInputContainer>
  )
}
