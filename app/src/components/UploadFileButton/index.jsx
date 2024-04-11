import { Label } from './styled'
import { Upload } from '@mui/icons-material'

export const UploadFileButton = ({
  id,
  accept,
  onChangeAction,
  disabled=false,
  refInput
}) => {
  return (
    <Label disabled={ disabled }>
      <Upload 
        sx={{
          color: !disabled ? 'black' : '#535353'
        }}
      />
      <input
        id={ id }
        type="file"
        accept={ accept }
        onChange={ onChangeAction }
        disabled={ disabled }
        ref={ refInput }
      />
    </Label>
  )
}
