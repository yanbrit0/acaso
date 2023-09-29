import React, { useState } from 'react';

import { Alert } from 'react-native';
import Logo from '../../assets/svg/logo.svg';

import { useAuth } from '../../hooks/useAuth';

import { Typography } from '../../components/Typography';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import * as S from './styles';

export const Login: React.FC = () => {
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    try {
      if (email.length < 5 || password.length < 5) return;

      setIsLoading(true);

      const credentials = {
        email,
        password,
      };

      await signIn(credentials);
    } catch (e) {
      Alert.alert('Não foi possível realizar o login!', 'Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.Container>
      <Logo width={100} height={18.14} />

      <S.TitleContainer>
        <Typography as="H1">Login</Typography>
      </S.TitleContainer>

      <S.Form>
        <S.LabelContainer>
          <Typography as="p">E-mail</Typography>
        </S.LabelContainer>
        <Input
          value={email}
          onChangeText={setEmail}
          placeholder="E-mail"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCapitalize="none"
        />
        <S.LabelContainer>
          <Typography as="p">Senha</Typography>
        </S.LabelContainer>
        <Input
          value={password}
          onChangeText={setPassword}
          placeholder="Senha"
          textContentType="password"
          isPassword
        />

        <Button title="Entrar" onPress={handleLogin} isLoading={isLoading} />

        <S.CreateAccountContainer>
          <S.LabelContainer>
            <Typography as="p2">Não possui conta em aca.so?</Typography>
          </S.LabelContainer>

          <Button title="Criar uma conta" type="dark" />
        </S.CreateAccountContainer>
      </S.Form>
    </S.Container>
  );
};
