import React from 'react';
import { styled } from '@mui/material/styles';
import { Container } from '../atoms/container';
import { ArrowButton } from '../atoms/button';
import { Typography } from '../atoms/typography';

interface Props {
  gridArea?: string;
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const StyledDiv = styled('div')(() => ({
  marginBottom: '15px',
}));

export const VideoCard = React.memo((props: Props) => {
  const {
    gridArea,
    text,
    onClick,
  } = props;

  return (
    <Container gridArea={gridArea} justifyContent="center" backgroundColor="blue">
      <StyledDiv>
        <ArrowButton white onClick={onClick}/>
      </StyledDiv>
      <Typography color="white" >
        {text}
      </Typography>
    </Container>
  );
});
