import React from 'react';
import CSS from 'csstype';
import { styled } from '@mui/material/styles';
import { Color } from '../../../theme';

interface Props {
  children?: React.ReactNode;
  width?: string;
  height?: string;
  padding?: string;
  alignItems?: CSS.Property.AlignItems,
  justifyContent?: CSS.Property.JustifyContent,
  gridArea?: string;
  backgroundColor?: Color;
}

const StyledDiv =
  styled('div', {
    shouldForwardProp: (prop) =>
      prop !== 'alignItems' &&
      prop !== 'justifyContent' &&
      prop !== 'backgroundColor' &&
      prop !== 'width' &&
      prop !== 'height' &&
      prop !== 'padding' &&
      prop !== 'gridArea'
  })<Props>
  (({
    theme,
    width,
    height,
    padding,
    alignItems,
    justifyContent,
    gridArea,
    backgroundColor = 'white'
  }) => ({
    width,
    height,
    padding,
    display: 'flex',
    flexDirection: 'column',
    alignItems,
    justifyContent,
    gridArea,
    backgroundColor: theme.palette[backgroundColor],
  }));

export const Container = React.memo((props: Props) => {
  const {
    children,
    width = 'auto',
    height = 'auto',
    padding = '30px',
    alignItems = 'center',
    justifyContent = 'space-between',
    gridArea,
    backgroundColor = 'white',
  } = props;

  return (
    <StyledDiv
      width={width}
      height={height}
      padding={padding}
      alignItems={alignItems}
      justifyContent={justifyContent}
      gridArea={gridArea}
      backgroundColor={backgroundColor}
    >
      {children}
    </StyledDiv>
  );
});
