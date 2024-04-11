import { grey } from '@mui/material/colors'
import styled from 'styled-components'

export const PrintersContainter = styled.div`
  position: relative;
  padding: 0 30px 30px;
`

export const NavInformer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const CardPeople = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 10px 50px;
  display: flex;
  justify-content: space-between;
  background-color: var(--c-bg-el);
  border: 1px solid var(--c-primary);
  border-top: none;
  
  div {
    display: flex;
    gap: 20px;

    p:first-of-type {
      color: ${ grey[500] };
    }
  }
`

export const PrintersMain = styled.div`
  width: 100%;
  margin-top: 30px;
  padding: 10px;
  background-color: var(--c-btn-m);
`

export const PrintersTable = styled.div`
  width: 100%;
  background-color: var(--c-bg-el);
`

export const PrintersHeader = styled.div`
  width: 100%;
  display: flex;
  background-color: #091722;
  text-align: center;
`

export const PrintersBody = styled.div`
  width: 100%;
`
export const PrintersBodyEdit = styled.div`
  width: 100%;
`
