import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  gap: 30px;
  padding: 50px;
  background-color: var(--container-background);
  border: 1px solid var(--border-color);
  border-radius: 5px;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h2 {
    font-size: 28px;
    font-weight: 400;
    user-select: none;
  }
  .icon {
    font-size: 42px;
    color: var(--opacity-text);
  }
`

export const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  & > .rentedContainer {
    height: 40px;
    grid-column: 1/4;
    display: grid;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
`