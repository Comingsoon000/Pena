import React from 'react';
import { IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

interface Props {
  witchSearchIcon?: boolean,
  fullWidth?: boolean,
  whiteBackground?: boolean,
  label?: string,
  variant?: 'standard' | 'outlined' | 'filled',
  type?: 'text' | 'email', 
  value?: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const StyledTextField =
  styled(TextField, { shouldForwardProp: (prop) => prop !== 'whiteBackground' })<Props>
  (({ theme, whiteBackground }) =>
  ({
    '& .MuiOutlinedInput-notchedOutline': {
      borderWidth: 0,
    },
    '& .MuiFormLabel-root': {
      color: whiteBackground ? theme.palette.blue : theme.palette.white,
    },
    '& .MuiFormLabel-root.Mui-focused ': {
      color: whiteBackground ? theme.palette.black : theme.palette.white,
      borderColor: theme.palette.white,
    },
    '& .MuiInputBase-input': {
      borderColor: theme.palette.white,
    },
    '& .MuiInputBase-root': {
      color: whiteBackground ? theme.palette.black: theme.palette.white,
      backgroundColor: whiteBackground ? theme.palette.white : theme.palette.transparent,
    },
    '& .MuiInputBase-root:before': {
      borderColor: theme.palette.white,
    },
    '& .MuiInputBase-root:after': {
      borderColor: theme.palette.white,
    },
    '& .MuiButtonBase-root': {
      color: whiteBackground ? theme.palette.black: theme.palette.white,
      backgroundColor: whiteBackground ? theme.palette.white : theme.palette.transparent,
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.white,
      }
    },
  })
);

export const Input = React.memo((props: Props) => {
  const {
    witchSearchIcon = false,
    fullWidth = true,
    whiteBackground = false,
    label,
    variant = 'standard',
    type = 'text',
    value,
    onClick,
  } = props;

  const endAdornment = witchSearchIcon
    ?
    <IconButton onClick={onClick}>
      <SearchIcon />
    </IconButton>
    :
    null;

  return (
    <StyledTextField
      label={label}
      variant={variant}
      value={value}
      fullWidth={fullWidth}
      type={type}
      InputProps={{ endAdornment }}
      whiteBackground={whiteBackground}
    />
  );
});
