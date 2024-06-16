import styled from 'styled-components'

const border = '1px solid var(--border-input-color)'
const transition = 'transition: all .1s;'

export const ListContainer = styled.div`
  width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--bg-container-600);
  border-right: ${border};
  border-radius: 5px 0 0 5px;

  @media (max-width: 1600px) {
    width: 312px;
  }
`

export const ListMain = styled.div`
  height: calc(100% - ${({isFormVisible}) => (isFormVisible ? '103px' : '58px')});
`

export const ListTitle = styled.div`
  width: 100%;
  padding: 12px;
  display: flex;
  align-items: center;
  background-color: var(--bg-container-700);
  border-bottom: ${border};
  border-radius: 5px 0 0;
  cursor: pointer;
  ${transition}

  p {
    font-size: 20px;
    font-weight: 600;
    user-select: none;

    @media (max-width: 1600px) {
      font-size: 16px;
    }
  }

  div {
    display: grid;
    color: var(--border-color);

    svg {
      font-size: 28px;
    }
  }

  @media (max-width: 1600px) {
    height: 53px;
  }
`

export const ListItems = styled.nav`
  height: 100%;

  ul {
    height: calc(100% - 58px);
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    li {
      list-style: none;

      p {
        margin-top: 32px;
        padding: 0 12px;
        text-align: center;
        font-size: 24px;
        color: var(--opacity-text);
        user-select: none;

        @media (max-width: 1600px) {
          font-size: 20px;
        }
      }
    }
  }
`

export const ListButton = styled.button`
  width: 100%;
  padding: 8px 16px;
  text-align: start;
  font-size: 16px;
  font-weight: 500;
  color: ${({isSelected}) => (isSelected ? 'white' : 'var(--opacity-text)')};
  background-color: ${({isSelected}) => (isSelected ? 'var(--bg-container-400)' : 'transparent')};
  border: none;
  cursor: pointer;
  ${transition}

  &:hover {
    color: white;
    background-color: var(--bg-container-400);
  }

  &:hover:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  @media (max-width: 1600px) {
    font-size: 14px;
  }
`

export const ListFooter = styled.div`
  padding: 12px;
  background-color: var(--bg-container-700);
  border-top: ${border};
  border-radius: 0 0 0 5px;
  ${({isFormVisible}) => (isFormVisible && 'border: 1px solid var(--border-color);')}

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
    ${transition}

    &:hover {
      opacity: 0.8;
    }

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }
`

export const AddInputForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  input {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    color: white;
    background-color: transparent;
    border: ${border};
    border-radius: 5px;
    outline: none;
    ${({invalidInput}) => (invalidInput && 'border: 1px solid #a31f1f;')}

    &::placeholder {
      color: white;
      opacity: 0.6;
    }
  }

  div {
    display: flex;
    gap: 8px;

    ${({invalidInput}) => (invalidInput && 
      'button:last-of-type { opacity: 0.4; cursor: not-allowed; }'
    )}

    button:first-of-type {
      color: black;
      background-color: white;
    }
  }
`