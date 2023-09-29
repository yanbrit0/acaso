import styled, { css } from 'styled-components/native';

import EyeSvg from '../../assets/svg/eye.svg';
import EyeOffSvg from '../../assets/svg/eye-off.svg';

type InputProps = {
  error?: boolean;
};

export const Container = styled.View`
  width: 100%;
  height: 70px;
`;

export const InputBox = styled.View<InputProps>`
  width: 100%;
  height: 50px;

  flex-direction: row;

  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors.input};

  ${({ error, theme }) =>
    error &&
    css`
      border: 1px solid ${theme.colors.error};
    `}
`;

export const TogglePasswordButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  padding: 0 16px 0 4px;

  justify-content: center;
`;

export const EyeIcon = styled(EyeSvg).attrs(({ theme }) => ({
  fill: theme.colors.p,
  width: 25,
  height: 25,
}))``;

export const EyeOffIcon = styled(EyeOffSvg).attrs(({ theme }) => ({
  fill: theme.colors.p,
  width: 25,
  height: 25,
}))``;
