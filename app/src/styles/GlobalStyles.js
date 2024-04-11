import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`

  /* Scrollbar style */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: #1a2d41;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #7c97b3;

    &:hover {
      background-color: #aed3f9;
    }
  }

  :root {
    --c-bg: #001e3c;
    --c-bg-el: #0a1929b3;
    --c-primary: #2196f3;
    --c-btn-m: #2283d330;
    --c-border: #132f4c;
    --c-border-table: #3c6691;

    // new format colors
    --background-color: #001E3C;
    --container-background: #071A2E;
    --button-background: #145E99;
    --action-button-background: #F6F6F6;
    --action-button-hover: #BFBBBB;
    --border-color: #2196F3;
    --border-nav-color: #132F4C;
    --border-input-color: #414F5D;
    --opacity-text: #AAB7BD;
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    background-color: var(--c-bg);
  }
  button {
    user-select: none;
  }
`