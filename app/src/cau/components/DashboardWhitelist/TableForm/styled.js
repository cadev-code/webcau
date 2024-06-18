import styled from 'styled-components'

const border = '1px solid var(--border-input-color)'

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const InputForm = styled.input`
  padding: 8px;
  font-size: 16px;
  color: white;
  background-color: transparent;
  border: ${border};
  border-radius: 5px;
  outline: none;
  ${({isInvalid}) => (isInvalid && 'border: 1px solid #a31f1f;')}

  &::placeholder {
    color: white;
    opacity: 0.6;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;

  button {
    width: 100%;
    padding: 8px;

    &:last-of-type {
      color: white;
      background-color: var(--button-background);
    }

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }
`