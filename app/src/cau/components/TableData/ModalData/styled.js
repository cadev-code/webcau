import styled from 'styled-components'

export const Modal = styled.div`
  position: relative;
  padding: 20px 0;
  background-color: var(--container-background);
  border: 1px solid var(--opacity-text);
  border-radius: 5px 0 5px 5px;
`

export const BoxContainer = styled.div`
  max-height: 500px;
  max-width: 640px;
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

  &.resources {
    button {
      width: 100%;
      padding: 2px 4px;
      font-size: 14px;
      font-weight: 400;
      color: white;
      background-color: var(--button-background);
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .files-container {
      display: flex;
      flex-direction: column;
      gap: 4px;

      .file {
        padding: 4px 8px;
        display: flex;
        gap: 8px;
        justify-content: space-between;
        background-color: var(--bg-container-600);
        border-radius: 5px;

        div {
          display: flex;

          button {
            width: auto;
            color: rgb(255, 57, 57);
            background-color: transparent;
            border: none;
            cursor: pointer;
          }
        }
        .edit {
          color: var(--opacity-text);
        }
        .delete {
          color: rgb(255, 57, 57);
        }
      }
    }

    .actions-container {
      margin-top: 8px;
      display: flex;
      gap: 4px;

      button {
        width: 100%;
        color: white;
        background-color: var(--button-background);
      }
    }

    .form {
      display: flex;
      flex-direction: column;
      gap: 4px;

      input {
        width: 100%;
      }

      div:last-of-type {
        display: flex;
        gap: 4px;

        button {
          width: 50%;
          color: white;
          background-color: var(--button-background);

          &.delete {
            background-color: #d52020;
          }

          &:first-of-type {
            background-color: var(--border-input-color);
          }
        }
      }
    }
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