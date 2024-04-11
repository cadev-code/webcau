import styled from 'styled-components'

// style variables
const bgRegister = '#101E2E'

export const Container = styled.div`
  width: calc(100vw - 400px);
  height: 100%;
  padding: 30px;
`

export const Table = styled.div`
  max-width: 1350px;
  height: 100%;
  margin: 0 auto;
  background-color: var(--container-background);
  border: 1px solid #395D82;
  border-radius: 5px;
`

export const HeaderTable = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  background-color: ${ bgRegister };
  border-bottom: 1px solid #395D82;
  border-radius: 5px 5px 0 0;
`

export const ColumnTitle = styled.div`
  position: relative;
  width: ${({ width }) => width};
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  /* cursor: pointer; */
  user-select: none;
  
  p {
    font-size: 20px;
    font-weight: 700;
  }
  .icon {
    color: #7D7D7D;
    font-size: 28px;
  }

  /* span {
    margin-left: -10px;
    display: flex;
    align-items: center;
  } */
`

export const BodyTable = styled.div`
  position: relative;
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: auto;
  scroll-behavior: smooth;
`

export const Register = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  background-color: ${ bgRegister };
  cursor: pointer;
`

export const Data = styled.div`
  width: ${({width}) => width};
  font-size: 18px;
  text-align: center;
  user-select: none;
`

export const SearchMessage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .icon {
    font-size: 68px;
    color: var(--opacity-text);
  }

  h3 {
    font-size: 24px;
    font-weight: 400;
    color: var(--opacity-text);
    user-select: none;
  }
`