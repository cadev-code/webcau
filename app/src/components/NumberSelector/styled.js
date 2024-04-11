import styled from 'styled-components'

export const SelectGroup = styled.div`
  position: relative;
  width: 80px;
  height: 40px;

  select {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10px 16px;
    font-size: 16px;
    color: white;
    background-color: transparent;
    border: 1px solid var(--border-input-color);
    border-radius: 5px;
    transition: 0.2s;
    outline: none;
    appearance: none;
    z-index: 1;

    &:focus {
      border: 1px solid var(--border-color);
    }

    option {
      background-color: var(--container-background);
    }
  }

  label {
    position: absolute;
    top: -9px;
    left: 8px;
    padding: 0 2px;
    font-size: 12px;
    color: ${(props) => (props.isFocus ? 'var(--border-color)' : 'var(--opacity-text)')};
    background-color: var(--container-background);
    transition: 0.2s;
    z-index: 2;
  }
`