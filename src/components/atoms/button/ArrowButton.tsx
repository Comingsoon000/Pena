import React from 'react';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { styled } from '@mui/material/styles';

interface Props {
  rotated?: boolean,
  white?: boolean,
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const StyledDiv =
  styled('div', {
    shouldForwardProp: (prop) => prop !== 'rotated' && prop !== 'white'
  })<Props>
  (({ theme, white }) => ({
    backgroundColor: white ? theme.palette.black : theme.palette.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70px',
    height: '70px',
    borderRadius: '50%',
  }));

const StyledIconButton = 
  styled(IconButton, {
    shouldForwardProp: (prop) => prop !== 'rotated' && prop !== 'white'
  })<Props>
  (({ theme, white }) => ({
    color: white ? theme.palette.white : theme.palette.black,
  }));

const StyledPlayArrowIcon =
  styled(PlayArrowIcon, {
    shouldForwardProp: (prop) => prop !== 'rotated' && prop !== 'whiteColor'
  })<Props>
  (({ rotated }) => ({
    transform: rotated ? 'rotate(180deg)' : 'none',
  }));

export const ArrowButton = React.memo((props: Props) => {
  const {
    rotated = false,
    white = false,
    onClick,
  } = props;

  return (
    <StyledDiv white={white}>
      <StyledIconButton white={white} onClick={onClick}>
        <StyledPlayArrowIcon rotated={rotated} fontSize="large" />
      </StyledIconButton>
    </StyledDiv>
  );
});
