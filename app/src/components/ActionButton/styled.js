import styled from 'styled-components'

export const Button = styled.button`
  height: ${({height}) => height};
  padding: ${({padding}) => padding};
  font-size: 16px;
  font-family: Roboto;
  font-weight: 500;
  color: black;
  background-color: var(--action-button-background);
  border-color: transparent;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: var(--action-button-hover);
  }
`