import styled from 'styled-components'

export const Dialog = styled.div`
  padding: 20px;
  display: grid;
  place-items: center;
  gap: 20px;
  background-color: var(--container-background);
  border: 1px solid var(--opacity-text);
  border-radius: 5px;

  p {
    font-size: 18px;
    text-align: center;
  }
`

export const ContainerBtns = styled.div`
  display: flex;
  gap: 20px;
`