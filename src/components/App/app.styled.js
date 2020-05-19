import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const App = styled.div`
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const AppTitle = styled.h1`
  margin: ${({ theme }) => theme.spaces.m} 0;
`;
