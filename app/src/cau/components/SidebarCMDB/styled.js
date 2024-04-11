import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  height: calc(100vh - 65px);
  width: 400px;
  background-color: #061422;
  overflow: hidden;
  
  @media (max-height: 725px) {
    overflow: auto;
  }
`

export const Title = styled.div`
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #153453;
  border-radius: 0 0 10px 0;

  h2 {
    font-size: 28px;
    user-select: none;
  }
`

export const Form = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`

export const SearchContainer = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`

export const FiltersContainer = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  @media (max-height: 870px) {
    gap: 5px;
  }
`