import styled from 'styled-components'

export const LicenseContainer = styled.div`
  width: fit-content;
  display: flex;
  background-color: var(--container-background);
  border: 2px solid var(--border-color);
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
  
  &:hover .text-container {
    background-color: var(--border-nav-color);
    border-radius: 5px 0 0 5px;
  }
`

export const TextContainer = styled.div`
  padding: 10px;
  display: grid;
  place-items: center;
  border-right: 2px solid var(--border-color);
  transition: 0.2s;
  user-select: none;
`

export const AmountContainer = styled.div`
  display: grid;
  padding: 0 18px;
  place-items: center;
  background-color: ${(props) => (props.isFull ? 'transparent' : 'var(--border-color)')};

  span {
    font-size: 20px;
    user-select: none;
  }
`