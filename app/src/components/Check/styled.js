import styled from 'styled-components'

export const CheckContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Checkmark = styled.div`
  width: 26px;
  height: 26px;
  display: grid;
  place-items: center;
  background-color: ${({ checked }) => checked ? 'var(--button-background)' : 'transparent'};
  border: 1px solid ${({ checked }) => checked ? 'var(--border-color)' : 'var(--border-input-color)'};

  & ~ p {
    color: ${({ checked }) => checked ? 'white' : 'var(--opacity-text)'};
    user-select: none;
  }
`