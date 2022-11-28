import React from 'react';
import { Typography } from '../typography/Typography';
import { styled } from '@mui/material/styles';

interface Props {
  current?: number,
  amount?: number,
}

const convertToString = ( num: number ) => {
  return (
    num > 9 ? `${num}` : `0${num}`
  )
};

const StyledContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
}));

export const Counter = React.memo((props: Props) => {
  const {
    current = 1,
    amount = 3,
  } = props;

  return (
    <StyledContainer>
      <Typography variant="h4">{convertToString(current)}</Typography>
      <Typography variant="h6">&nbsp;/&nbsp;{convertToString(amount)}</Typography>
    </StyledContainer>
  );
});