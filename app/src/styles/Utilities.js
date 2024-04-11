import styled, { createGlobalStyle } from 'styled-components';

export const Utilities = createGlobalStyle`
  .css-ki1hdl-MuiAlert-action {
    padding: 0!important;
    margin-left: 20px!important;
  }

  .MuiButtonBase-root {
    text-transform: capitalize !important;
  }

  .css-at26bj-MuiPaper-root-MuiMenu-paper-MuiPopover-paper {
    background-image: none !important;
    background-color: #0a1929 !important;
    border: 1px solid var(--c-border);
  }
  .css-13y70ab-MuiButtonBase-root-MuiMenuItem-root.Mui-selected {
    background-color: #555555 !important;

    &:hover {
      background-color: rgba(33, 150, 243, 0.24) !important;
    }
  }
  .label-t-center {
    display: grid;
    place-content: center;
  }
  .label-border {
    border: 1px solid var(--c-border-table);
  }
`

export const TitleForm = styled.h3`
    font-size: 28px;
    font-weight: 500;
    user-select: none;
`