import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100vh - 65px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  h1 {
    font-size: 42px;
  }
`

export const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

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