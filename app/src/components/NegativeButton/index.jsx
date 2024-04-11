import { Button } from './styled'

export const NegativeButton = ({
  text,
  padding = '10px',
  action,
}) => {
  return (
    <Button
      padding={ padding }
      onClick={ action }
    >
      { text }
    </Button>
  )
}
