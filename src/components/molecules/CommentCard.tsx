import React from 'react';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { Color } from '../../theme';
import { Container } from '../atoms/container';
import { Typography } from '../atoms/typography';

interface Props {
  gridArea?: string;
  backgroundColor?: Color;
  author: string;
  comment: string;
  withToggleButtons?: boolean;
}

const StyledDiv = styled('div')(({ theme }) => ({
  width: '60px',
  height: '60px',
  backgroundColor: theme.palette.gray2,
}));

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  '&.MuiButtonBase-root': {
    padding: '0',
    border: 'none',
    color: theme.palette.black,
    '&.Mui-disabled': {
      color: theme.palette.gray2,
    }
  }
}));

export const CommentCard = React.memo((props: Props) => {
  const {
    gridArea,
    backgroundColor = 'white',
    author,
    comment,
    withToggleButtons = false,
  } = props;

  return (
    <Container
      gridArea={gridArea}
      backgroundColor={backgroundColor}
      justifyContent='space-between'
      alignItems='center'
    >
      <StyledDiv/>
      <Typography variant="h6" component="h4">
        {author}
      </Typography>
      <Rating defaultValue={5} />
      <Typography variant="body2" component="p" color="gray3">
        {comment}
      </Typography>
      {withToggleButtons &&
        <ToggleButtonGroup>
          <StyledToggleButton value="left" disabled>
            <HorizontalRuleIcon fontSize="large"/>
          </StyledToggleButton>
          <StyledToggleButton value="right">
            <HorizontalRuleIcon fontSize="large"/>
          </StyledToggleButton>
        </ToggleButtonGroup>
      }
    </Container>
  );
});
