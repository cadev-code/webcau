import styled from 'styled-components'

const border = '1px solid var(--border-input-color)'

export const Container = styled.div`
  width: 100%;
  height: 69px;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--bg-container-700);
  border-bottom: ${border};
  border-radius: 0 5px 0 0;

  .title {
    display: flex;
    align-items: center;
    gap: 16px;

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

      &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }
    }
  }

  .download-btn {
    height: 100%;
    padding: 0 4px;
    display: grid;
    place-content: center;
    background-color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    &:disabled {
      color: black;
      opacity: 0.4;
      cursor: not-allowed;
    }
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
    width: 360px;
    padding: 8px;
    font-size: 20px;
    color: white;
    background-color: transparent;
    border: ${({invalidInput}) => (invalidInput ? '1px solid #a31f1f' : border)};
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

      ${({invalidInput}) => (invalidInput && 
        '&:first-of-type { opacity: 0.4; cursor: not-allowed; }'
      )}
    }
  }

  @media (max-width: 1600px) {
    input {
      font-size: 16px;
    }
  }
`