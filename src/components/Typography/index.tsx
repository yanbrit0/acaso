import React from 'react';
import { TextProps } from 'react-native';

import theme from '../../styles/themes';

import { Typo } from './styles';

export type TypoTypes = 'H1' | 'CTA' | 'p' | 'p2' | 'p3';

export type Colors = keyof typeof theme.colors;

type Props = TextProps & {
  as: TypoTypes;
  children: React.ReactNode;
  color?: Colors;
  underline?: boolean;
  bold?: boolean;
};

export const Typography: React.FC<Props> = ({
  as = 'p',
  color = 'p',
  underline,
  bold,
  children,
  ...rest
}) => {
  return (
    <Typo
      type={as}
      color={color}
      bold={bold}
      style={{
        textDecorationLine: underline ? 'underline' : 'none',
      }}
      {...rest}
    >
      {children}
    </Typo>
  );
};
