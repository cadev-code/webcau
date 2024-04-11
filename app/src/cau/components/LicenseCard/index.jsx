import { 
  AmountContainer,
  LicenseContainer, 
  TextContainer 
} from './styled'

export const LicenseCard = ({ 
  license,
  action
}) => {

  const { name, email, amount, amount_occupied } = license

  return (
    <LicenseContainer
      onClick={ action }
    >
      <TextContainer className="text-container">
        <h3>{ name }</h3>
      </TextContainer>
      <TextContainer className="text-container">
        <p>{ email }</p>
      </TextContainer>
      <AmountContainer isFull={ amount_occupied === amount }>
        <span>{ amount_occupied }</span>
      </AmountContainer>
    </LicenseContainer>
  )
}
