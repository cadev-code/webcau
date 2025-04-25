import { useState } from 'react'
import { SelectGroup } from './styled'

export const Select = ({ 
  width, 
  id, 
  text, 
  value, 
  inputFormOnChange,
  options,
  disabled = true,
}) => {
  const [isFocus, setIsFocus] = useState(false)

  return (
    <SelectGroup isFocus={ isFocus } width={ width }>
      <select
        id={ id }
        value={ value }
        onChange={ inputFormOnChange }
        onFocus={ () => setIsFocus(true) }
        onBlur={ () => setIsFocus(false) }
        disabled={disabled}
      >
        {
          options.map(opt => (
            <option key={ opt }>{ opt }</option>
          ))
        }
      </select>
      <label>{ text }</label>
    </SelectGroup>
  )
}
