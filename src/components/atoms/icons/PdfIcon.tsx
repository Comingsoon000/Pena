import React from 'react';
import { SvgIcon } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledSvgIcon = styled(SvgIcon)(({ theme }) => ({
  width: '70px',
  height: '100px',
  fill: theme.palette.black,
}));

export const PdfIcon = () => {
  return (
    <StyledSvgIcon
      x="0px"
      y="0px"
      viewBox="0 0 46 46"
    >
      <g>
        <path
          d="M17.467,20.792c-0.248-0.287-0.572-0.527-0.972-0.721c-0.4-0.191-0.893-0.287-1.477-0.287h-4.416v8.568h2.641V25.76h1.56 c0.488,0,0.938-0.062,1.351-0.188c0.411-0.123,0.768-0.312,1.067-0.563c0.299-0.252,0.532-0.567,0.696-0.948 c0.164-0.38,0.246-0.83,0.246-1.351c0-0.305-0.054-0.627-0.162-0.973C17.893,21.395,17.716,21.079,17.467,20.792z M15.542,23.316 c-0.084,0.125-0.192,0.217-0.324,0.277c-0.132,0.059-0.282,0.096-0.45,0.107c-0.168,0.011-0.336,0.018-0.504,0.018h-1.02v-1.74 h1.176c0.16,0,0.316,0.006,0.468,0.02c0.152,0.012,0.286,0.045,0.402,0.102c0.116,0.055,0.208,0.139,0.276,0.252 c0.067,0.111,0.102,0.264,0.102,0.455C15.668,23.023,15.626,23.193,15.542,23.316z">
        </path>
        <path
          d="M26.383,21.11c-0.304-0.396-0.701-0.717-1.192-0.961c-0.492-0.244-1.096-0.365-1.808-0.365h-4.332v8.568h3.816 c0.744,0,1.392-0.1,1.945-0.301c0.551-0.199,1.008-0.486,1.366-0.857c0.36-0.373,0.628-0.824,0.806-1.354 c0.176-0.533,0.264-1.127,0.264-1.783c0-0.534-0.068-1.063-0.204-1.578C26.907,21.963,26.688,21.507,26.383,21.11z M24.542,24.691c-0.044,0.248-0.133,0.48-0.264,0.695c-0.133,0.217-0.322,0.398-0.57,0.547c-0.248,0.149-0.576,0.221-0.983,0.221 h-1.032v-4.175h0.84c0.479,0,0.858,0.08,1.134,0.24c0.275,0.16,0.484,0.352,0.624,0.576c0.14,0.225,0.229,0.449,0.264,0.678 c0.036,0.229,0.056,0.41,0.056,0.547C24.608,24.219,24.586,24.443,24.542,24.691z">
        </path>
        <polygon
          points="28.387,28.352 31.028,28.352 31.028,25.089 34.448,25.089 34.448,23.048 31.028,23.048 31.028,21.979 35.011,21.979 35.011,19.784 28.387,19.784 ">
        </polygon>
        <path
          d="M33.431,0H5.179v45.057h34.699V6.251L33.431,0z M36.878,42.056H8.179V3h23.706v4.76h4.992L36.878,42.056L36.878,42.056z">
        </path>
      </g>
    </StyledSvgIcon>
  );
};
