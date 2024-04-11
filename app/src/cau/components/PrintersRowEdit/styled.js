import styled from 'styled-components'

export const InputPercent = styled.label`
  width: 60%;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #182d40;
  cursor: text;
  border: ${ props => props.$focus ? '2px solid var(--c-primary)' : 'none'};

  &:hover {
    border: 2px solid white;
  }
`
export const Input = styled.input`
  box-sizing: border-box;
  width: 40px;
  height: 30px;
  font-family: 'Roboto';
  font-size: 18px;
  color: white;
  background-color: transparent;
  border: none;
  outline: none;

  &[type=number]::-webkit-inner-spin-button, 
  &[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }
`