import styled from 'styled-components'

export const Modal = styled.div`
  position: relative;
  padding: 20px 0;
  background-color: var(--container-background);
  border: 1px solid var(--opacity-text);
  border-radius: 5px 0 5px 5px;
`

export const BoxContainer = styled.div`
  max-height: 450px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
`

export const TextBox = styled.div`
  min-width: 300px;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-input-color);
  border-radius: 5px;

  span {
    font-size: 14px;
    color: var(--opacity-text);
  }

  select {
    margin: 2px 0;
    padding: 5px 10px;
    width: 300px;
    font-size: 16px;
    color: white;
    background-color: #0f2237;
    border: none;
    border-radius: 5px;
  }

  input {
    margin: 2px 0;
    padding: 5px 10px;
    width: 300px;
    font-size: 16px;
    color: white;
    background-color: #0f2237;
    border: 1px solid transparent;
    border-radius: 5px;
    outline: none;

    &:focus:invalid {
      border-color: #ff3939;
    }

    &[type=number]::-webkit-inner-spin-button, 
    &[type=number]::-webkit-outer-spin-button { 
      -webkit-appearance: none; 
      margin: 0; 
    }
    &[type=number] { -moz-appearance:textfield; }
  }
`

export const CloseBtn = styled.div`
  position: absolute;
  bottom: 100%;
  right: -1px;
  padding: 5px;
  display: grid;
  background-color: var(--container-background);
  border: 1px solid var(--opacity-text);
  border-radius: 5px 5px 0 0;
  cursor: pointer;
`

export const ActionBtns = styled.div`
  position: absolute;
  top: -1px;
  left: 100%;
  padding: 5px 10px;
  display: flex;
  gap: 10px;
  background-color: var(--container-background);
  border: 1px solid var(--opacity-text);
  border-radius: 0 5px 5px 0;

  div {
    display: grid;
    cursor: pointer;
  }

  div:last-of-type {
    color: #ff3939;
  }
`

export const FormBtns = styled.div`
  position: absolute;
  top: 100%;
  right: calc(100% / 2 - 96px);
  padding: 10px;
  display: flex;
  gap: 10px;
  background-color: var(--container-background);
  border: 1px solid var(--opacity-text);
  border-radius: 0 0 5px 5px;

  button {
    padding: 5px 10px;
    font-size: 16px;
    font-weight: 500;
    background-color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:last-of-type {
      color: white;
      background-color: var(--button-background);
    }
  }
`