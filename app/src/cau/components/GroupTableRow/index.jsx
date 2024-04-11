import {
  Register, 
  Row 
} from './styled'

export const GroupTableRow = ({
  registers
}) => {
  return (
    <Row>
      { 
        registers.map((reg, i) => (
          <Register 
            key={ i }
            width={ reg.width }
          >
            { reg.data }
          </Register>
        ))
      }
    </Row>
  )
}
