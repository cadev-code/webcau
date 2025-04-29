import styled from 'styled-components';

export const Container = styled.div`
  // se resta tamaño del contenedor del nabvar, titleActionBar
  height: calc(100vh - 65px - 68px);
  padding-top: 86px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  h1 {
    font-size: 42px;
    user-select: none;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ListItem = styled.div`
  height: 48px;
  padding: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background-color: var(--container-background);
  border: 1px solid var(--border-input-color);
  border-radius: 5px;
  transition: all 0.2s;
  cursor: pointer;
  user-select: none;

  p {
    font-size: 20px;
    font-weight: 500;
  }

  svg {
    font-size: 28px;
  }

  &:hover {
    background-color: var(--button-background);
    border-color: var(--border-color);
  }
`;
