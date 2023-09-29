import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';

import { Typography } from '../Typography';

import * as S from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  type?: 'default' | 'dark';
  isLoading?: boolean;
};

export const Button: React.FC<Props> = ({
  title,
  type = 'default',
  isLoading,
  ...rest
}) => {
  return (
    <S.Container
      type={type}
      activeOpacity={0.8}
      disabled={isLoading}
      style={{ opacity: isLoading ? 0.7 : 1 }}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color={type === 'dark' ? '#FFF' : '#000'} />
      ) : (
        <Typography as="CTA" color={type === 'dark' ? 'p' : 'p3'}>
          {title}
        </Typography>
      )}
    </S.Container>
  );
};
