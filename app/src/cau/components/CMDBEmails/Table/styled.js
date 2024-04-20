import styled from 'styled-components'

export const TableContainer = styled.div`
  table {
    width: 100%;
    border: 1px solid #ddd;
    border-collapse: collapse;
    border-spacing: 0;

    thead {
      background-color: #333;
      color: white;
    }

    th, td {
      padding: 10px 20px;
      text-align: left;
    }

    th {
      user-select: none;
    }

    tbody tr:nth-child(even) {
      background-color: #012345;
    }
    tbody tr:hover {
      background-color: #07325d;
    }
  }
`