import styled from 'styled-components'

export const Modal = styled.div`
  position: relative;
  padding: 20px;
  background-color: var(--container-background);
  border: 1px solid var(--opacity-text);
  border-radius: 5px 0 5px 5px;
`

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const TextBox = styled.div`
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-input-color);
  border-radius: 5px;

  span {
    font-size: 14px;
    color: var(--opacity-text);
  }

  input {
    padding: 2px 0;
    width: 300px;
    font-size: 16px;
    color: white;
    background-color: transparent;
    border: none;
    outline: none;
  }
`

export const CloseBtn = styled.div`
  position: absolute;
  top: -38px;
  right: -1px;
  padding: 5px 5px 0;
  background-color: var(--container-background);
  border: 1px solid var(--opacity-text);
  border-bottom: none;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
`