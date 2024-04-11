import { Button } from './styled'

export const SubmitButton = ({ text, action }) => {
  return (
    <Button
      onClick={ action }
    >
      { text }
    </Button>
  )
}
