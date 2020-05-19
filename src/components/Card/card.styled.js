import styled from "styled-components";

export const Card = styled.article`
  width: 370px;
  background: ${({ theme }) => theme.colors.secondary};
  margin: ${({ theme }) => theme.spaces.m};
`;

export const Background = styled.div`
  background: transparent url(${({ url }) => url}) no-repeat 50%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 340px;
`;

export const Content = styled.div`
  padding: ${({ theme }) => theme.spaces.m};
`;

export const Title = styled.h2`
  margin: 0;
  font-weight: 500;
`;

export const Body = styled.p`
  margin: ${({ theme }) => theme.spaces.s} 0;
`;
