import styled from 'styled-components'

const border = '1px solid var(--border-input-color)'

export const Container = styled.div`
  height: 100%;
  overflow: hidden;
`

export const Table = styled.div`
  height: ${({footerHeight}) => (`calc(100% - ${footerHeight})`)};
  display: flex;
  flex-direction: column;
  background-color: var(--bg-container-600);
  border: ${border};
  border-radius: 5px 5px 0 0;
`

export const TRow = styled.div`
  display: flex;
`

export const THead = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--bg-container-700);
  border-radius: 5px 5px 0 0;
`

export const THeadCell = styled.div`
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 600;
  border-bottom: ${border};
  ${({accessorKey}) => (accessorKey === 'netbios' ? 'width: 192px;' : accessorKey && 'width: 332px;')};

  @media (max-width: 1600px) {
    ${({accessorKey}) => (accessorKey === 'netbios' ? 'width: 164px;' : accessorKey && 'width: 296px;')};
  }
`

export const TBody = styled.div`
  padding-bottom: 12px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  .row:nth-child(even) {
    background-color: var(--bg-container-500);
  }

  .row:hover {
    background-color: var(--bg-container-400);
  }
`

export const TBodyCell = styled.div`
  padding: 8px 16px;
  font-size: 16px;
  overflow: hidden;
  ${({accessorKey}) => (accessorKey === 'netbios' ? 'width: 192px;' : 'width: 332px;')};

  @media (max-width: 1600px) {
    font-size: 14px;
    ${({accessorKey}) => (accessorKey === 'netbios' ? 'width: 164px;' : 'width: 296px;')};
  }
`

export const Footer = styled.div`
  padding: ${({showForm}) => (showForm ? '20px' : '12px')};
  text-align: end;
  background-color: var(--bg-container-700);
  border: ${border};
  border-top: none;
  border-radius: 0 0 5px 5px;
  ${({showForm}) => (showForm && 'border: 1px solid var(--border-color);')}

  button {
    padding: 4px 8px;
    font-size: 14px;
    font-weight: 500;
    background-color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.1s;

    &:hover {
      opacity: 0.8;
    }

    &:disabled {
      color: black;
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const InputForm = styled.input`
  padding: 8px;
  font-size: 16px;
  color: white;
  background-color: transparent;
  border: ${border};
  border-radius: 5px;
  outline: none;
  ${({isInvalid}) => (isInvalid && 'border: 1px solid #a31f1f;')}

  &::placeholder {
    color: white;
    opacity: 0.6;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;

  button {
    width: 100%;
    padding: 8px;

    &:last-of-type {
      color: white;
      background-color: var(--button-background);
    }

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }
`