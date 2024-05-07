import { 
  BoxContainer, 
  CloseBtn, 
  Modal, 
  TextBox 
} from './styled'
import { BackgroundOpacity } from '../../../../components'
import { Close } from '@mui/icons-material'

export const ModalData = ({ 
  data,
  boxes,
  closeModalData
}) => {

  return (
    <BackgroundOpacity>
      <Modal>
        <BoxContainer>
          {
            boxes.map(({header, accessorKey, meta}) => (
              <TextBox key={ accessorKey }>
                <span>{ header }</span>
                <p>{ data[accessorKey] }</p>
                {/* <input
                  value={ data[accessorKey] }
                /> */}
              </TextBox>
            ))     
          }
        </BoxContainer>
        <CloseBtn
          onClick={closeModalData}
        >
          <Close />
        </CloseBtn>
      </Modal>
    </BackgroundOpacity>
  )
}
