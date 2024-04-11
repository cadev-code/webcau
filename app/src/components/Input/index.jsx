import { FormGroup } from './styled'

export const Input = ({ 
  label = 'Label', 
  type = 'text', 
  width,
  id, 
  value, 
  inputFormOnChange, 
  bgLabel = 'var(--container-background)' 
}) => {

  return (
    <FormGroup 
      value={ value }
      width={ width }
      bgLabel={ bgLabel }
    >
      <input 
        id={ id }
        type={ type }
        value={ value }
        onChange={ inputFormOnChange }
      />
      <label htmlFor={ id }>{ label }</label>
    </FormGroup>
  )
}