import styled from 'styled-components'

export const LicenseContainer = styled.div`
  width: 760px;
  padding: 30px;
  display: grid;
  gap: 30px;
  background-color: var(--container-background);
  border: 1px solid var(--border-color);
  border-radius: 5px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    gap: 20px;
  }  
`

export const AccountContainer = styled.div`

  p {
    font-size: 18px;
    font-weight: 500;
    user-select: none;

    span {
      font-size: 16px;
      font-weight: 400;
      color: var(--opacity-text);
      user-select: text;
    }
  }

  div {
    display: flex;
    gap: 30px;
  }
`

export const UsersContainer = styled.div`
  display: grid;
  gap: 10px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`