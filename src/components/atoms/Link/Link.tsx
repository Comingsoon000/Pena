import React from 'react';
import CSS from 'csstype';
import { styled } from '@mui/material/styles';
import LinkMui from '@mui/material/Link';

interface Props {
  children?: React.ReactNode;
  padding?: CSS.Property.Padding;
}

const StyledLinkMui = styled(LinkMui, { shouldForwardProp: (prop) => prop !== 'padding' })<Props>
  (({ padding }) => ({
    textDecoration: 'none',
    cursor: 'pointer',
    padding,
  }));

export const Link = React.memo((props: Props) => {
  const {
    children,
    padding = '0',
  } = props;

  return (
    <StyledLinkMui color="inherit" padding={padding}>
      {children}
    </StyledLinkMui>
  );
});
