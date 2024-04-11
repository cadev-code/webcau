import { NegativeButton } from '../NegativeButton'
import { SubmitButton } from '../SubmitButton'
import { ContainerBtns, Dialog } from './styled'

export const ConfirmDialog = ({ 
  text,
  actionCancel,
  actionSubmit 
}) => {
  return (
    <Dialog>
      <p>{ text }</p>
      <ContainerBtns>
        <NegativeButton 
          text="Cancelar"
          action={ actionCancel }
        />
        <SubmitButton
          text="Confirmar"
          action={ actionSubmit }
        />
      </ContainerBtns>
    </Dialog>
  )
}
