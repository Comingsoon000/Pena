import React from 'react';
import { SvgIcon } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledSvgIcon = styled(SvgIcon)(({ theme }) => ({
  width: '70px',
  height: '100px',
  color: theme.palette.black,
}));

export const ContactsIcon = () => {
  return (
    <StyledSvgIcon viewBox="0 0 84 110">
      <g>
        <ellipse
          ry="41"
          rx="40.5"
          id="svg_1"
          cy="41.984672"
          cx="41.669808"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="currentColor"/>
        <path
          d="m19.490583,76.601396l22.207533,28.306658l22.207533,-28.306658l-44.415066,0z"
          strokeWidth="1.5"
          strokeOpacity="null"
          stroke="#ffffff"
          fill="#ffffff"/>
      </g>
    </StyledSvgIcon>
  );
};