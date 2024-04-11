import styled from 'styled-components'

export const Label = styled.label`
  height: 100%;
  padding: 0 10px;
  display: grid;
  place-items: center;
  background-color: ${({disabled}) => !disabled ? 'white' : 'var(--opacity-text)'};
  border-radius: 5px;
  cursor: ${({disabled}) => !disabled ? 'pointer' : 'default'};
  transition: all .2s;

  &:hover {
    background-color: var(--opacity-text);
  }
`