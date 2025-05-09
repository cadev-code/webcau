import styled from 'styled-components'

const border = '1px solid var(--border-input-color)'

export const Container = styled.div`
  height: 100%;
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
  position: relative;
  display: flex;
`

export const TRowBtns = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  padding: 4px;
  display: flex;
  gap: 4px;
  background-color: var(--bg-container-400);

  button {
    padding: 0 4px;
    display: grid;
    place-content: center;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    svg {
      font-size: 20px;
    }

    &:last-of-type {
      color: #a31f1f;
    }
  }
`

export const THead = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--bg-container-700);
  border-radius: 5px 5px 0 0;
  user-select: none;
`

export const THeadCell = styled.div`
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 600;
  border-bottom: ${border};
  ${({accessorKey}) => (accessorKey === 'netbios' ? 'width: 204px;' : accessorKey && 'width: 352px;')};

  @media (max-width: 1600px) {
    ${({accessorKey}) => (accessorKey === 'netbios' ? 'width: 176px;' : accessorKey && 'width: 316px;')};
  }

  div {
    display: flex;
    align-items: center;
    gap: 4px;
    ${({accessorKey}) => accessorKey && 'cursor: pointer;'}

    svg {
      font-size: 20px;
      color: var(--border-color);
    }
  }
`

export const TBody = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .row {
    background-color: var(--bg-container-600);
  }

  .row:nth-child(even) {
    background-color: var(--bg-container-500);
  }

  ${({showForm}) => (!showForm && '.row:hover {background-color: var(--bg-container-400);}')}

  ${({showForm}) => (showForm && `&{background-color: #030e18;} .row::before { content: ''; position: absolute; top: 0; left: 0; height: 100%; width: 100%; background-color: var(--bg-container-900); opacity: 0.6; z-index: 1;}`)}
`

export const TBodyCell = styled.div`
  padding: 8px 16px;
  font-size: 16px;
  overflow: hidden;
  ${({accessorKey}) => (accessorKey === 'netbios' ? 'width: 204px;' : 'width: 352px;')};

  @media (max-width: 1600px) {
    font-size: 14px;
    ${({accessorKey}) => (accessorKey === 'netbios' ? 'width: 176px;' : 'width: 316px;')};
  }
`

export const Footer = styled.div`
  padding: ${({showForm}) => (showForm ? '16px' : '12px')};
  text-align: end;
  background-color: var(--bg-container-800);
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

export const InputFilterColumn = styled.input`
  width: 100%;
  margin-top: 8px;
  padding: 4px 8px;
  font-size: 16px;
  color: white;
  background-color: var(--bg-container-600);
  border: ${border};
  border-radius: 5px;
  outline: none;

  @media (max-width: 1600px) {
    font-size: 14px;
  }
`