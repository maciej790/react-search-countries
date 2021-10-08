import styled from "styled-components";

export const Results = styled.section`
  width: 90%;
  margin-top: 100px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 50px 50px;
  justify-items: center;
`;

export const LoadoningIcon = styled.div`
  width: 90%;
  height: 200px;
  margin-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  animation: rotate-center 0.6s ease-in-out infinite both;

  @keyframes rotate-center {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ErrorIcon = styled(LoadoningIcon)`
  animation: none;
`;
