import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;

  padding-top: 20px;

  background-color: ${({ theme }) => theme.colors.background};
`;
