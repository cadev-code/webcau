import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  left: 50px;
`

export const InputUsers = styled.input`
  width: 320px;
  height: 40px;
  padding: 0 20px;
  font-size: 16px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  color: white;
  background-color: var(--container-background);
  border: 1px solid var(--border-input-color);
  border-radius: 0 0 5px 5px;
  outline: none;
  transition: .2s;

  &::placeholder {
    color: #a7a4a4;
  }

  &:focus,
  &:valid {
    border-color: var(--border-color);
  }
`

export const ResultContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  background-color: var(--container-background);
  border-width: 0 1px 1px;
  border-style: solid;
  border-color: ${({ users }) => users !== 0 ? 'var(--border-color)' : 'transparent'};
  border-radius: 0 0 5px 5px;
`

export const Result = styled.div`
  padding: 10px 20px;
  font-size: 16px;
  color: var(--opacity-text);
  border-bottom: 1px solid var(--border-input-color);
  cursor: pointer;

  &:last-of-type {
    border-color: transparent;
  }
`