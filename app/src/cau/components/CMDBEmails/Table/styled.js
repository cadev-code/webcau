import styled from 'styled-components'

export const TableContainer = styled.div`
  background-color: var(--container-background);
  border: 1px solid var(--opacity-text);
  border-radius: 10px 0 0 10px;
  overflow: hidden;
  
  table {
    border-collapse: collapse;
  }

  thead {
    display: block;
    background-color: #0D1C2C;
    border-bottom: 1px solid var(--opacity-text);
    
    tr {
      padding-top: 5px;
    }
    
    th {
      padding: 10px 20px;
      font-size: 14px;
      font-weight: 500;
      text-align: left;
      color: var(--opacity-text);
    }
  }
  
  tbody {
    display: block;
    height: calc(40px * 15);
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