import styled from 'styled-components';

export const SpinnerStyled = styled.div`
  border: 5px solid #ccc;
  border-top: 5px solid black;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  z-index: 1005;
  animation: spin 0.8s linear infinite;
  margin: 20px auto;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export default SpinnerStyled;
