import styled from 'styled-components'

export const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  background-color: transparent;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: var(--button-background);
  }
`