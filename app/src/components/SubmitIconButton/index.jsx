import { Button } from './styled'

export const SubmitIconButton = ({
  icon, 
  borderRadius = '5px',
  action,
  title=""
}) => {
  return (
    <Button
      title={ title }
      style={{
        borderRadius: borderRadius
      }}
      onClick={ action }
    >
      { icon }
    </Button>
  )
}
