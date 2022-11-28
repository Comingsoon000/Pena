import React from 'react';
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import { Color } from '../../theme';
import { Container } from '../atoms/container';
import { Typography } from '../atoms/typography';


interface Props {
  gridArea?: string;
  icon: React.ReactNode;
  text: string;
  textColor: Color;
  backgroundColor: Color;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const CardWithIcon = React.memo((props: Props) => {
  const {
    gridArea,
    icon,
    text,
    textColor = 'white',
    backgroundColor = 'blue',
    onClick,
  } = props;

  return (
    <Container gridArea={gridArea} justifyContent="center" backgroundColor={backgroundColor}>
      <IconButton onClick={onClick}>
        {icon}
      </IconButton>
      <Typography color={textColor} >
        {text}
      </Typography>
    </Container>
  );
});