import styled from 'styled-components'

export const Period = styled.div`
  height: 45px;
  padding: 10px 50px;
  display: flex;
  gap: 10px;
  background-color: var(--c-bg-el);
  border: 1px solid var(--c-primary);
  border-top: none;
`

export const Dialog = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-content: center;
  background-color: rgb(0 0 0 / 78%);
`

export const FormSelect = styled.div`
  padding: 20px;
  background-color: #0a1929;
  border: 1px solid var(--c-primary);
  border-radius: 5px;

  h5 {
    margin-bottom: 15px;
    font-size: 20px;
  }
`