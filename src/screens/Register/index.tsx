import React from 'react';
import { useForm } from 'react-hook-form';

import { Logo } from '../../components/Logo';
import { Typography } from '../../components/Typography';
import { ControlledInput } from '../../components/ControlledInput';

import * as S from './styles';

export const Register: React.FC = () => {
  const { control } = useForm();

  return (
    <S.Container>
      <Logo />

      <S.TitleContainer>
        <Typography as="H1">Cadastro</Typography>
      </S.TitleContainer>

      <S.Form>
        <S.LabelContainer>
          <Typography as="p">E-mail*</Typography>
        </S.LabelContainer>
        <ControlledInput
          name="email"
          control={control}
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCapitalize="none"
        />

        <S.LabelContainer>
          <Typography as="p">E-mail*</Typography>
        </S.LabelContainer>
        <ControlledInput
          name="email"
          control={control}
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCapitalize="none"
        />
      </S.Form>
    </S.Container>
  );
};
