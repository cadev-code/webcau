import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--opacity-text);
  border-radius: 5px;
`

export const IconContainer = styled.div`
  padding: 0 10px;

  div {
    padding: 6px;
    display: flex;
    background-color: #353535;
    border-radius: 5px;

    .icon {
      font-size: 28px;
      color: #7D7D7D
    }
  }
`

export const DataContainer = styled.div`
  padding: 5px 35px 5px 0;

  p:first-of-type {
    font-size: 14px;
    font-weight: 500;
    color: var(--opacity-text);
  }
  p:last-of-type {
    font-size: 20px;
  }
`