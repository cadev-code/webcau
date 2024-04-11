import { Button } from './styled'

export const ActionIconButton = ({ 
  icon, 
  borderRadius = '5px',
  action,
  title="",
  disable=false
}) => {
  return (
    <Button
      disabled={ disable }
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
