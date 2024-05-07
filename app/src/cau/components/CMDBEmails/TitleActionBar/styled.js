import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 14px 120px;
  display: flex;
  justify-content: space-between;
  background-color: var(--container-background);

  h2 {
    font-size: 26px;
    user-select: none;
  }
`

export const ActionBar = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  button {
    padding: 5px 10px;
    font-size: 16px;
    color: white;
    background-color: var(--button-background);
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`