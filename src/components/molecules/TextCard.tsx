import React from 'react';
import { styled } from '@mui/material/styles';
import { Color } from '../../theme';
import { Container } from '../atoms/container';
import { Typography, TextVariant } from '../atoms/typography';
import { Divider } from '../atoms/divider';
import { Button } from '../atoms/button';
import { ColorButton } from '../atoms/button/types';

interface Props {
  gridArea?: string;
  backgroundColor?: Color;
  title: string;
  title2?: string;
  titleVariant?: TextVariant;
  titleComponent?: React.ElementType<any>;
  content: string;
  content2?: string;
  contentColor?: Color;
  withButton?: boolean;
  buttonText?: string;
  buttonTextColor?: Color;
  buttonColor?: ColorButton;
}

const StyledDiv = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
}));

export const TextCard = React.memo((props: Props) => {
  const {
    gridArea,
    backgroundColor = 'white',
    title,
    title2,
    titleVariant = 'h4',
    titleComponent = 'h2',
    content,
    content2,
    contentColor = 'black',
    withButton = false,
    buttonText,
    buttonTextColor = 'white',
    buttonColor = ColorButton.PRIMARY,
  } = props;

  return (
    <Container
      gridArea={gridArea}
      backgroundColor={backgroundColor}
      justifyContent='space-between'
      alignItems='flex-start'
    >
      <StyledDiv>
        <Typography variant={titleVariant} component={titleComponent}>
          {title} <br/>{title2}
        </Typography>
        <Divider/>
        <Typography variant='body2' component='p' color={contentColor}>
          {content}<br/><br/>{content2}
        </Typography>
      </StyledDiv>
      {withButton &&
        <Button textColor={buttonTextColor} color={buttonColor}>
          {buttonText}
        </Button>
      }
    </Container>
  );
});
