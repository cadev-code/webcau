import styled from 'styled-components'

const border = '1px solid var(--border-input-color)'

export const Container = styled.div`
  width: 100%;
  height: 69px;
  padding: 16px 24px;
  display: flex;
  gap: 16px;
  align-items: center;
  background-color: var(--bg-container-700);
  border-bottom: ${border};
  border-radius: 0 5px 0 0;

  p {
    font-size: 24px;
    font-weight: 600;
  }

  .edit-icon {
    display: grid;
    color: var(--border-color);
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 1600px) {
    height: 63px;
    padding: 16px 24px;
    gap: 12px;

    p {
      font-size: 20px;
    }
  }
`

export const EditInputForm = styled.div`
  display: flex;
  gap: 8px;

  input {
    height: 100%;
    padding: 8px;
    font-size: 20px;
    color: white;
    background-color: transparent;
    border: ${border};
    border-radius: 5px;
    outline: none;
  }

  div {
    display: flex;
    gap: 8px;
    align-items: center;

    button {
      width: 100%;
      padding: 8px;
      font-size: 14px;
      font-weight: 500;
      color: white;
      background-color: var(--button-background);
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.1s;

      &:hover {
        opacity: 0.8;
      }

      &:last-of-type {
        color: black;
        background-color: white;
      }
    }
  }

  @media (max-width: 1600px) {
    input {
      font-size: 16px;
    }
  }
`