import styled from 'styled-components'

export const Button = styled.button`
  padding: ${({padding}) => padding};
  font-size: 16px;
  color: var(--opacity-text);
  background-color: transparent;
  border: 1px solid var(--opacity-text);
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
  
  &:hover {
    color: white;
    border-color: white;
    background-color: rgba(255,255,255,0.1);
  }
`