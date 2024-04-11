import styled from 'styled-components'

export const UserContainer = styled.div`
  display: flex;
`

export const UserData = styled.div`
  width: ${(props) => (props.permissions ? '600px' : '100%' )};
  padding: 10px 90px 10px 30px;
  display: flex;
  gap: 30px;
  border: 1px solid var(--action-button-background);
  border-right-width: ${(props) => (props.permissions ? '0px' : '80px')};
  border-radius: ${(props) => (props.permissions ? '5px 0 0 5px' : '5px' )};

  span {
    font-weight: 600;
  }
  p:last-of-type {
    color: var(--opacity-text);
  }
`
export const ActionsContainer = styled.div`
  display: flex;
  gap: 1px;
`