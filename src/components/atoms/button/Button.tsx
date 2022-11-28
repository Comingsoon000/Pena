import React from 'react';
import { styled } from '@mui/material/styles';
import ButtonMui from '@mui/material/Button';
import { Typography, TextVariant } from '../typography';
import { Color } from '../../../theme';
import { TypeButton, VariantButton, ColorButton } from './types';

interface Props {
  type?: TypeButton;
  variant?: VariantButton;
  color?: ColorButton;  
  textVariant?: TextVariant;
  textColor?: Color;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const StyledButtonMui = styled(ButtonMui)(() => ({
  width: 'fit-content',
  padding: '10px 20px'
}));

export const Button = React.memo((props: Props) => {
  const {
    children,
    variant = VariantButton.CONTAINED,
    color = ColorButton.PRIMARY,
    type = TypeButton.BUTTON,
    textVariant = 'subtitle2',
    textColor = 'white',
    onClick,
  } = props;

  return (
    <StyledButtonMui variant={variant} color={color} type={type} onClick={onClick}>
      <Typography variant={textVariant} color={textColor}>
        {children}
      </Typography>
    </StyledButtonMui>
  );
});
