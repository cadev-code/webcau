import styled  from 'styled-components'

export const Container = styled.div`
  width: 1000px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: var(--container-background);
  border: 1px solid var(--border-input-color);
  border-radius: 5px;
`

export const HeaderGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  h3 {
    font-size: 20px;
    font-weight: 500;
    user-select: none;
  }

  svg {
    font-size: 38px;
  }
`

export const TableContent = styled.div``

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
`

