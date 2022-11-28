import React from 'react';
import { styled } from '@mui/material/styles';

interface Props {
  white?: boolean;
}

const StyledDiv =
  styled('div', { shouldForwardProp: (prop) => prop !== 'white' })<Props>
  (({ theme, white }) => ({
    width: '40px',
    height: '5px',
    margin: '15px 0',
    backgroundColor: white ? theme.palette.white : theme.palette.black,
  }));

export const Divider = React.memo((props: Props) => {
  const {
    white = false,
  } = props;

  return (
    <StyledDiv white={white} />
  );
});
