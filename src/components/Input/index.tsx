import React, { Ref, useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import * as S from './styles';

type Props = TextInputProps & {
  isPassword?: boolean;
  innerRef?: Ref<TextInput>;
  error?: string;
};

export const Input: React.FC<Props> = ({ isPassword, error, ...rest }) => {
  const theme = useTheme();

  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordIsVisible((oldState) => !oldState);
  };

  return (
    <S.Container>
      <S.InputBox error={!!error}>
        <TextInput
          style={{
            flex: 1,
            color: theme.colors.p2,
            fontFamily: theme.fonts.regular,
            paddingLeft: 16,
            paddingRight: 10,
          }}
          placeholderTextColor={theme.colors.p2 + 50}
          secureTextEntry={isPassword && !passwordIsVisible}
          {...rest}
        />

        {isPassword ? (
          <S.TogglePasswordButton onPress={togglePasswordVisibility}>
            {passwordIsVisible ? <S.EyeOffIcon /> : <S.EyeIcon />}
          </S.TogglePasswordButton>
        ) : null}
      </S.InputBox>
    </S.Container>
  );
};
