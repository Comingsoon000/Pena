import React from 'react';
import TypographyMui from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import { TextVariant } from './types';
import { Color } from '../../../theme';

interface Props {
  variant?: TextVariant;
  component?: React.ElementType<any>;
  color?: Color;
  lineHeight?: number;
  children: React.ReactNode;
}

export const Typography = React.memo((props: Props) => {
  const theme = useTheme();

  const {
    component = 'span',
    variant = 'subtitle2',
    color = 'black',
    lineHeight,
    children,
  } = props;

  const currentColor = theme.palette[color];

  return (
    <TypographyMui variant={variant} component={component} color={currentColor} lineHeight={lineHeight}>
      {children}
    </TypographyMui>
  );
});
