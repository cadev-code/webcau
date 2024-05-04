import styled from 'styled-components'

export const TableContainer = styled.div`
  position: relative;
  
  & > div:first-of-type {
    background-color: var(--container-background);
    border: 1px solid var(--opacity-text);
    border-radius: 10px 0 0 10px;
    overflow: hidden;
  }
  
  table {
    border-collapse: collapse;
  }

  thead {
    display: block;
    background-color: #12202f;
    border-bottom: 1px solid var(--opacity-text);
    
    tr {
      padding-top: 5px;
    }
    
    th {
      padding: 10px 20px;
      font-size: 14px;
      font-weight: 500;
      color: var(--opacity-text);
      text-align: left;
      user-select: none;
      border-right: 1px solid var(--border-input-color);
      
      &:last-of-type {
        border-right: none;
      }
      
      div {
        display: flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;

        svg {
          font-size: 20px;
          color: var(--border-color);
        }
      }
    }
  }
  
  tbody {
    display: block;
    height: calc(40px * 12 + 10px);
    overflow-y: scroll;
    padding-bottom: 10px;

    tr {
      font-size: 16px;
      
      &:nth-child(even) {
        background-color: #092038;
      }
    }
    
    td {
      padding: 0 20px;
      height: 40px;
    }
  }
`

export const PaginationContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: -51px;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: var(--container-background);
  border: 1px solid var(--opacity-text);
  border-radius: 0 0 5px 5px;

  div:first-of-type {
    display: flex;
    gap: 5px
  }

  button {
    padding: 5px;
    font-size: 14px;
    font-weight: bold;
    background-color: var(--opacity-text);
    border-color: transparent;
    border-radius: 5px;
    cursor: pointer;

    &:disabled {
      cursor: default;
    }
  }

  span {
    font-size: 14px;
  }

  select {
    padding: 5px 5px;
    font-size: 14px;
    color: white;
    background-color: var(--container-background);
    border-radius: 5px;
    outline: none;

    option {
      color: white;
    }
  }
`

export const InputFilterColumn = styled.input`
  width: 100%;
  margin-top: 5px;
  padding: 5px 10px;
  font-size: 16px;
  color: white;
  background-color: #0D1C2C;
  border: 1px solid var(--border-input-color);
  border-radius: 5px;
  outline: none;
`

export const SelectFilterColumn = styled.select`
  width: 100%;
  margin-top: 5px;
  padding: 5px 10px;
  font-size: 16px;
  color: white;
  background-color: #0D1C2C;
  border: 1px solid var(--border-input-color);
  border-radius: 5px;
  outline: none;
`