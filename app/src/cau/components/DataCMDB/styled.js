import styled from 'styled-components'

export const Container = styled.div`
  max-width: 832px;
  display: grid;
  gap: 30px;
  padding: 50px;
  background-color: var(--container-background);
  border: 1px solid var(--border-color);
  border-radius: 5px;
`
export const CardsContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    gap: 10px;
  }
`