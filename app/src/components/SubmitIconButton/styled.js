import styled from 'styled-components'

export const Button = styled.button`
  padding: 0 10px;
  display: grid;
  place-items: center;
  font-size: 16px;
  background-color: var(--button-background);
  border-color: transparent;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #10446d;
  }
`