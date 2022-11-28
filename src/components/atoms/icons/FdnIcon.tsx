import React from 'react';
import { SvgIcon } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledFdnIcon = styled(SvgIcon)(() => ({
  width: '60px',
  height: '60px',
}));

export const FdnIcon = () => {
  return (
    <StyledFdnIcon  viewBox="0 0 60 60">
      <g>
        <line stroke="#000" y2="2" x2="2" y1="59" x1="2" strokeWidth="8" fill="none"/>
        <line stroke="#000" y2="2.4375" x2="60" y1="2.4375" x1="0" strokeWidth="8" fill="none"/>
        <line stroke="#000" y2="58" x2="60" y1="58" x1="0" strokeWidth="8"  fill="none"/>
        <line stroke="#000" y2="18" x2="58" y1="2" x1="58"strokeWidth="8" fill="none"/>
        <line stroke="#000" y2="58" x2="58" y1="43" x1="58" strokeWidth="8" fill="none"/>
        <text fontWeight="bold" xmlSpace="preserve" textAnchor="start" fontFamily="Rubik, Arial, sans-serif" fontSize="22" id="svg_10" y="38.079527" x="16.181806" strokeWidth="0" stroke="#000" fill="#000000">
          FDN
        </text>
      </g>
    </StyledFdnIcon>
  );
};