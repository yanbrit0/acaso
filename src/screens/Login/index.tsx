import React from 'react';

import Logo from '../../assets/svg/logo.svg';

import { Typography } from '../../components/Typography';
import { Input } from '../../components/Input';

import * as S from './styles';
import { Button } from '../../components/Button';

export const Login: React.FC = () => {
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
          placeholder="E-mail"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <S.LabelContainer>
          <Typography as="p">Senha</Typography>
        </S.LabelContainer>
        <Input placeholder="Senha" isPassword textContentType="password" />

        <Button title="Entrar" />

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
