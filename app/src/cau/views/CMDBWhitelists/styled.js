import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 65px);
  padding: 20px;
`

export const Dashboard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: var(--bg-container-500);
  border: 1px solid var(--border-input-color);
  border-radius: 5px;
  border-collapse: collapse;
`

export const Main = styled.div`
  width: calc(100% - 350px);
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1600px) {
    width: calc(100% - 312px);
  }
`