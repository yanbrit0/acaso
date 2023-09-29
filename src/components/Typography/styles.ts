import styled, { css } from 'styled-components/native';
import { Text } from 'react-native';

import { Colors, TypoTypes } from '.';

type Typography = {
  type: TypoTypes;
  color: Colors;
  bold?: boolean;
  semibold?: boolean;
};

export const Typo = styled(Text)<Typography>`
  ${({ type, theme }) => {
    switch (type) {
      case 'H1':
        return css`
          font-family: ${theme.fonts.bold};
          font-size: 32px;
        `;
      case 'CTA':
        return css`
          font-family: ${theme.fonts.bold};
          font-size: 14px;
        `;
      case 'p':
        return css`
          font-family: ${theme.fonts.medium};
          font-size: 16px;
        `;
      case 'p2':
        return css`
          font-family: ${theme.fonts.regular};
          font-size: 14px;
        `;
      case 'p3':
        return css`
          font-family: ${theme.fonts.bold};
          font-size: 12px;
        `;
      default:
        return css`
          font-family: ${theme.fonts.regular};
          font-size: 11px;
        `;
    }
  }}

  ${({ bold, theme }) => {
    if (bold)
      return css`
        font-family: ${theme.fonts.bold};
      `;

    return null;
  }}
  
  color: ${({ theme, color }) => theme.colors[color]};
`;
