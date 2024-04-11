import { Row } from '../GroupTableRow/styled'
import { Register } from './styled'

export const GroupTableAddRow = ({
  props,
  addRowValues,
  addInputOnChange
}) => {
  return (
    <Row>
      {
        props.map((prop, i) => (
          <Register 
            key={ i }
            width={ prop.width }
            id={ prop.prop }
            value={ addRowValues[prop.prop] }
            onChange={ addInputOnChange }
          />
        ))
      }
    </Row>
  )
}
