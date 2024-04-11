import styled from 'styled-components'

export const FormGroup = styled.div`
  position: relative;
  width: ${(props) => props.width};
  height: 40px;
  
  input {
    width: 100%;
    height: 100%;
    padding: 10px;
    font-size: 16px;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    color: white;
    background: none;
    border: 1px solid var(--border-input-color);
    border-radius: 5px;
    outline: none;
    transition: 0.2s;

    &:focus {
      border: 1px solid var(--border-color);
    }
  }

  label {
    position: absolute;
    left: 10px;
    top: ${(props) => (props.value ? '-10px' : '8px')};//8px
    padding: ${(props) => (props.value ? '0 5px' : '0')};
    font-size: ${(props) => (props.value ? '12px' : '16px')};
    color: var(--opacity-text);
    background-color: ${(props) => (props.value ? props.bgLabel : 'transparent')}; 
    pointer-events: none;
    user-select: none;
    transition: 0.2s;
  }

  input:focus ~ label,
  input:visited ~ label {
    top: -10px;
    padding: 0 5px;
    font-size: 12px;
    color: var(--border-color);
    background-color: ${(props) => (props.bgLabel)}; 
  }

  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }

  input[type=number] { -moz-appearance:textfield; }
`