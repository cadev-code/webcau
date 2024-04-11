import styled from 'styled-components'

export const Dialog = styled.div`
  padding: 30px;
  display: grid;
  gap: 20px;
  background-color: var(--container-background);
  border: 1px solid white;
  border-radius: 5px;

  p {
    font-size: 20px;
    text-align: center;
  }
`

export const ContainerBtns = styled.div`
  display: flex;
  gap: 30px;
`