import { ExpandMore } from '@mui/icons-material'
import { SelectGroup } from './styled'
import { useState } from 'react'

export const NumberSelector = ({ id, label = 'Label', amountOptions = 5, value, inputFormOnChange }) => {

  // crear arreglo de opciones en base a cantidad de opciones deseada
  const arrOptions = []
  for (let i = 1; i <= amountOptions; i++) {
    arrOptions.push(i)
  }

  const [isFocus, setIsFocus] = useState(false)

  return (
    <SelectGroup isFocus={ isFocus }>
      <select
        id={ id }
        value={ value }
        onChange={ inputFormOnChange }
        onFocus={ () => setIsFocus(true) }
        onBlur={ () => setIsFocus(false) }
      >
        {
          arrOptions.map( opt => (
            <option key={ opt }>{ opt }</option>
          ))
        }
      </select>
      <ExpandMore 
        sx={{
          position: 'absolute',
          top: '8px',
          right: '16px',
          color: `${isFocus ? 'var(--border-color)' : 'var(--opacity-text)'}`,
          zIndex: 0,
          transition: '0.2s'
        }}
      />
      <label>{ label }</label>
    </SelectGroup>
  )
}
