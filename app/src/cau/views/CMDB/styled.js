import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100vh - 65px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  h1 {
    font-size: 42px;
  }
`

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

export const LinkCMDB = styled.div`
  width: 100%;
  height: 52px;
  padding: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background-color: var(--container-background);
  border: 1px solid var(--border-input-color);
  border-radius: 5px;
  cursor: pointer;
  transition: all .2s;

  p {
    font-size: 20px;
    font-weight: 500;
  }

  .icon {
    font-size: 28px;
  }

  &:hover {
    background-color: var(--button-background);
    border-color: var(--border-color);
  }
`