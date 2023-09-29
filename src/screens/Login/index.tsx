import React from 'react';

import Logo from '../../assets/svg/logo.svg';

import * as S from './styles';

export const Login: React.FC = () => {
  return (
    <S.Container>
      <Logo width={100} height={100} />
    </S.Container>
  );
};
