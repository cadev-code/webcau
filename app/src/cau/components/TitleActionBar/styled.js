import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 14px 120px;
  display: flex;
  justify-content: space-between;
  background-color: var(--container-background);

  .title {
    display: flex;
    gap: 16px;

    h2 {
      font-size: 26px;
      user-select: none;
    }
  }
`

export const ActionBar = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  button {
    padding: 5px 10px;
    font-size: 16px;
    font-weight: 500;
    color: black;
    background-color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .blue {
    color: white;
    background-color: var(--button-background);
  }
`