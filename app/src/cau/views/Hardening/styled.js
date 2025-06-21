import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100vh - 65px);
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const PoliciesContainer = styled.div`
  height: 100%;
  padding: 24px 48px;
  overflow-y: scroll;
  `

export const Policies = styled.div`
  width: fit-content;
  min-width: 900px;
`

export const Policy = styled.div`
  display: grid;
  grid-template-columns: 15fr 1fr;
`

export const PolicyDescription = styled.div`
  padding: 8px 16px;
  display: grid;
  color: black;
  background-color: white;
  border: 1px solid black;
  ${props => props.checked === 1 && ('background-color: #b4ffb4;')}
`

export const PolicyInputCheck = styled.div`
  display: grid;
  place-content: center;
`

export const CheckBox = styled.div`
  width: 24px;
  height: 24px;
  color: black;
  background-color: white;
`

export const NavBar = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  overflow-x: scroll;
  background-color: #373737;
`

const gpoSelectedStyle = `
  background-color: white;
  color: black; 
`

const gpoHoverStyle = `
  background-color: black;
  color: white; 
`

export const GPO = styled.div`
  width: fit-content;
  height: 100%;
  padding: 8px 16px;
  display: grid;
  place-content: center;
  white-space: nowrap;
  border: 1px solid black;
  border-right: none;
  cursor: default;
  user-select: none;
  ${props => props.isSelected && gpoSelectedStyle}

  &:last-of-type {
    border-right: 1px solid black;
  }

  &:hover {
    ${props => !props.isSelected && gpoHoverStyle };
  }
`