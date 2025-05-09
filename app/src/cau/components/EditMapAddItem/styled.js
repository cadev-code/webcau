import styled from 'styled-components'

export const MapItem = styled.div`
  position: relative;
  height: 42px;
  display: flex;
  align-items: center;
  gap: 10px;

  label {
    height: 100%;

    input[type=file] {
      display: none;
    }
  }
`

export const MapInput = styled.input`
  width: 280px;
  height: 100%;
  padding: 10px;
  text-align: center;
  font-size: 20px;
  color: white;
  background-color: var(--container-background);
  border: 1px solid var(--border-input-color);
  border-radius: 5px;
  outline: none;
  transition: all .2s;

  &:focus {
    border-color: var(--border-color);
  }

  &:disabled {
    color: var(--opacity-text);
  }
`