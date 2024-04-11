import styled from 'styled-components'

export const CheckInputContainer = styled.div`
  height: 32px;
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

  & + label {
    display: inline-block;
    color: ${({checked}) => checked ? 'white' : 'var(--opacity-text)'};
    white-space: nowrap;
    user-select: none;
  }
  & + label + select {
    flex: auto;
    height: 32px;
    padding: 0 10px;
    display: ${({checked}) => checked ? 'block' : 'none'};
    font-size: 16px;
    font-family: 'Roboto';
    color: white;
    background-color: transparent;
    border: 1px solid ${({value}) => value.length > 0 ? 'var(--border-color)' : 'var(--border-input-color)'};
    border-radius: 5px;
    outline: none;

    &:focus,
    &:visited {
      border-color: var(--border-color);
    }

    option {
      background-color: var(--container-background);
    }
  }
`