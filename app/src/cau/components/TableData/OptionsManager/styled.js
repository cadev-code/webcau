import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  padding-bottom: 20px;
  background-color: var(--container-background);
  border: 1px solid var(--opacity-text);
  border-radius: 5px 0 0 5px;

  h2 {
    margin: 20px 0 10px;
    text-align: center;
    user-select: none;
  }

  .empty-message {
    text-align: center;
    color: var(--opacity-text);
    user-select: none;
  }

  input {
    width: 100%;
    padding: 5px 10px;
    font-size: 16px;
    color: white;
    background-color: #0f2237;
    border: 1px solid transparent;
    border-radius: 5px;
    outline: none;

    &:focus:invalid {
      border-color: #ff3939;
    }
  }
`

export const OptionsContainer = styled.div`
  max-height: 326px;
  position: relative;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
`

export const Option = styled.div`
  min-width: 380px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border: 1px solid var(--border-input-color);
  border-radius: 5px;
`

export const AddInput = styled.div`
  width: 380px;
  margin: 0 20px;
  padding: 10px;
  display: grid;
  gap: 5px;
  border: 1px solid var(--border-input-color);
  border-radius: 5px;

  span {
    font-size: 14px;
    color: var(--opacity-text);
  }
`

export const ActionBtns = styled.div`
  display: flex;
  gap: 5px;

  div {
    display: grid;
    cursor: pointer;
  }
`

export const DeleteConfirm = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  button {
    padding: 2px 10px;
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
    color: white;
    background-color: #ff3939;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  div {
    display: grid;
    cursor: pointer;
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

export const AddActions = styled.div`
  position: absolute;
  top: 100%;
  right: -1px;
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
  }

  .submit {
    color: white;
    background-color: var(--button-background);
  }
`