import { Button } from './styled'

export const ActionButton = ({ 
  text,
  height = '100%',
  padding = '10px',
  action = (() => console.log('action'))
}) => {
  return (
    <Button
      height={ height }
      padding={ padding }
      onClick={ action }
    >
      { text }
    </Button>
  )
}
