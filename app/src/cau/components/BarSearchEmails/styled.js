import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px 120px;
  display: flex;
  justify-content: space-between;
  background-color: var(--container-background);

  h2 {
    font-size: 28px;
    user-select: none;
  }
`

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`

export const SearchInput = styled.label`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    height: 32px;
    width: 250px;
    padding: 0 10px;
    font-size: 18px;
    color: white;
    background-color: transparent;
    border: 1px solid var(--border-input-color);
    border-radius: 5px;
    outline: none;

    &:focus {
      border-color: var(--border-color);
    }
  }
`