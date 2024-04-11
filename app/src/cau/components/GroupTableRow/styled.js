import styled from 'styled-components'

export const Row = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid var(--border-input-color);
  border-bottom: 0;
  
  &:last-of-type {
    border-bottom: 1px solid var(--border-input-color);
  }
  `

export const Register = styled.div`
  width: ${({width}) => width};
  padding: 10px;
  font-size: 16px;
  border-right: 1px solid var(--border-input-color);
`