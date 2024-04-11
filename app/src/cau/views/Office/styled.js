import styled from 'styled-components'

export const OfficeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TitleContainer = styled.div`
  margin: 50px 0 30px;
  display: flex;
  align-items: center;
  gap: 20px;

  h1 {
    font-size: 42px;
    user-select: none;
    cursor: default;
  }
`

export const LicensesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 0 0 50px;
`

export const AddButton = styled.button`
  position: fixed;
  bottom: 80px;
  right: 80px;
  width: 58px;
  height: 58px;
  display: grid;
  place-items: center;
  background-color: var(--button-background);
  border: 2px solid var(--border-color);
  border-radius: 5px;
  cursor: pointer;

  span {
    color: white;
    font-size: 48px;
  }

  &:active {
    transform: scale(0.95);
  }
`