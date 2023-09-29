import styled from 'styled-components/native';

type ContainerProps = {
  type: 'default' | 'dark';
};

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<ContainerProps>`
  width: 100%;
  height: 55px;

  justify-content: center;
  align-items: center;

  border-radius: 30px;

  background-color: ${({ theme, type }) =>
    type === 'dark' ? theme.colors.secondary : theme.colors.primary};
`;
