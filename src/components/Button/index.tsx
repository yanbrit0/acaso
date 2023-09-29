import React from 'react';

import { Typography } from '../Typography';

import * as S from './styles';

type Props = {
  title: string;
  type?: 'default' | 'dark';
};

export const Button: React.FC<Props> = ({ title, type = 'default' }) => {
  return (
    <S.Container type={type}>
      <Typography as="CTA" color={type === 'dark' ? 'p' : 'p3'}>
        {title}
      </Typography>
    </S.Container>
  );
};
