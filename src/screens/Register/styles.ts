import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;

  padding-top: 20px;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const TitleContainer = styled.View`
  flex: 0.4;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.View`
  width: 85%;
  flex: 1;
`;

export const LabelContainer = styled.View`
  margin-left: 16px;
  margin-bottom: 8px;
`;
