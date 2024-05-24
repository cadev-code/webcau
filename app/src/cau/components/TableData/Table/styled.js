import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  
  & > div:first-of-type {
    background-color: var(--container-background);
    border: 1px solid var(--opacity-text);
    overflow: hidden;
  }
`

export const TableContainer = styled.div`
  width: 1350px;
  display: grid;
  overflow: auto;
  border-collapse: collapse;

  @media (max-width: 1600px) {
    width: 1200px;
  }

  .tHead {
    display: flex;
    background-color: #12202f;
    border-bottom: 1px solid var(--opacity-text);

    .tR {
      display: flex;
    }

    .tH {
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

  .tBody {
    height: calc(40px * 12 + 10px);
    overflow-y: scroll;
    padding-bottom: 10px;
    direction: rtl;

    @media (max-height: 830px) {
      height: calc(40px * 10 + 10px);
    }

    .tR {
      display: flex;
      flex-direction: row-reverse;
      font-size: 16px;

      &:nth-child(even) {
        background-color: #092038;
      }
    }

    .tD {
      min-height: 40px;
      padding: 5px 20px;
      display: flex;
      justify-content: end;
      align-items: center;
      text-align: end;
      overflow: hidden;

      &:first-of-type {
        justify-content: center;
      }
    }
  }
`

export const PaginationContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: -52px;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: var(--container-background);
  border: 1px solid var(--opacity-text);

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

  .downloadBtn {
    padding: 0;
    display: grid;
    background-color: transparent;
    border: none;
    
    svg {
      color: white;
      font-size: 30px;  
    }
  }
`

export const HideColumns = styled.div`
  position: absolute;
  top: 0;
  right: -45px;
  padding: 10px;
  display: flex;
  flex-direction: row-reverse;
  gap: 5px;
  background-color: #12202f;
  border: 1px solid var(--opacity-text);

  .btns {
    display: flex;
    justify-content: end;

    div {
      display: grid;
      cursor: pointer;
    }
  }

  .columns {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .column {
    display: flex;
    gap: 10px;
    cursor: pointer;

    p {
      font-size: 14px;
    }

    div {
      display: grid;

      svg {
        font-size: 18px;
      }
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