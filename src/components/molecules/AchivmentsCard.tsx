import React from 'react';
import { styled } from '@mui/material/styles';
import { Color } from '../../theme';
import { Container } from '../atoms/container';
import { Typography } from '../atoms/typography';

interface Props {
  gridArea?: string;
  backgroundColor?: Color;
  amount: string;
  text: string;
  children?: React.ReactNode;
}

const StyledDiv = styled('div')(({ theme }) => ({
  width: '80px',
  height: '80px',
  marginBottom: '30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.blue,
  backgroundColor: theme.palette.yellow,
}));

export const AchivmentsCard = React.memo((props: Props) => {
  const {
    gridArea,
    backgroundColor = 'white',
    amount,
    text,
    children,
  } = props;

  return (
    <Container
      gridArea={gridArea}
      backgroundColor={backgroundColor}
      justifyContent='flex-start'
      alignItems='flex-start'
    >
      <StyledDiv>
        {children}
      </StyledDiv>
      <Typography variant="h3" component="p">
        {amount}
      </Typography>
      <Typography variant="body1" component="h3" color="gray3">
        {text}
      </Typography>
    </Container>
  );
});