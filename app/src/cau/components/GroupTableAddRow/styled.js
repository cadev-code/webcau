import styled from 'styled-components'

export const Row = styled.div`
  width: 100%;
`

export const Register = styled.input`
  width: ${({width}) => width};
  padding: 10px;
  font-size: 16px;
  color: white;
  background-color: transparent;
  border: 1px solid var(--opacity-text);
  outline: none;
`