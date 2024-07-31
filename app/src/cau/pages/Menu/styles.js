import styled from 'styled-components'

// hexagon custom properties
export const MenuContainer = styled.div`
  min-height: 100vh;
  display: grid;
  place-content: center;
  background-color: var(--c-bg);
`

export const ToolsContainer = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  div {
    display: flex;
    gap: 8px;
  }
  button {
    padding: 8px 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    color: white;
    background-color: var(--container-background);
    border: 1px solid var(--border-color);
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: var(--button-background);
      border-color: var(--border-color);
    }
    span {
      font-size: 11px;
      font-weight: 400;
    }
  }
`