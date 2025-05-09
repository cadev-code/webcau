import styled from 'styled-components'

export const CustomLoader = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: 
    radial-gradient(farthest-side,#F4F4F4 94%,#0000) top/8px 8px no-repeat,
    conic-gradient(#0000 30%,#F4F4F4);
  -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0);
  animation:s3 0.5s infinite linear;

  @keyframes s3{ 
    100%{transform: rotate(1turn)}
  }
`