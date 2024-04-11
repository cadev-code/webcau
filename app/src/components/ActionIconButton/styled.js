import styled from 'styled-components'

export const Button = styled.button`
  height: 100%;
  padding: 0 10px;
  display: grid;
  place-items: center;
  font-size: 16px;
  background-color: var(--action-button-background);
  border-color: transparent;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;

  &:hover,
  &:disabled {
    background-color: var(--action-button-hover);
  }

  &:disabled {
    cursor: default;
  }
`