import React from 'react';
import { styled } from '@mui/material/styles';
import { Container } from '../atoms/container'
import { Input } from '../atoms/input';
import { Button } from '../atoms/button';
import { TypeButton, VariantButton, ColorButton } from '../atoms/button/types';
import { Typography } from '../atoms/typography';
import { Divider } from '../atoms/divider';

interface Props {
  gridArea?: string;
  title: string;
  inputLabel: string;
  buttonText: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const StyledDiv = styled('div')(() => ({
  marginTop: '30px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  '& button': {
    position: 'relative',
    left: '20px',
  },
}));

export const SubscribeCard = React.memo((props: Props) => {
  const {
    gridArea,
    title,
    inputLabel,
    buttonText,
    onClick,
  } = props;

  return (
    <Container
      gridArea={gridArea}
      justifyContent="flex-start"
      alignItems="flex-start"
      backgroundColor="blue"
    >
      <Typography variant="h4" component="h2" color="white">
        {title}
      </Typography>
      <Divider white/>
        <StyledDiv>
          <Input
            whiteBackground
            fullWidth
            variant="outlined"
            label={inputLabel}
          />
          <Button
            variant={VariantButton.TEXT}
            type={TypeButton.SUBMIT}
            onClick={onClick}
          >
            {buttonText}
          </Button>
        </StyledDiv>
    </Container>
  );
});
