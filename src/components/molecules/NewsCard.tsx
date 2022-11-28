import React from 'react';
import { styled } from '@mui/material/styles';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { Color } from '../../theme';
import { Container } from '../atoms/container';
import { Typography } from '../atoms/typography';

interface Props {
  gridArea?: string;
  backgroundColor?: Color;
  date: string;
  theme: string;
  comments: string;
  withToggleButtons?: boolean;
}

const StyledDiv = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: '20px',
}));

const InnerBox = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
}));

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  '&.MuiButtonBase-root': {
    padding: '0',
    border: 'none',
    color: theme.palette.white,
    '&.Mui-disabled': {
      color: theme.palette.gray3,
    }
  }
}));

export const NewsCard = React.memo((props: Props) => {
  const {
    gridArea,
    backgroundColor = 'white',
    date,
    theme,
    comments,
    withToggleButtons = false,
  } = props;

  return (
    <Container
      gridArea={gridArea}
      backgroundColor={backgroundColor}
      justifyContent='space-between'
      alignItems='center'
    >
      <StyledDiv>
        <Typography variant="h4" component="h2" color="white">
          NEWS
        </Typography>
        <InnerBox>
          <Typography variant="body2" component="p" color="gray2">
            {date}
          </Typography>
          <Typography variant="h6" component="h3" color="white" lineHeight={1.2}>
            {theme}
          </Typography>
        </InnerBox>
        <Typography variant="body2" component="p" color="gray2">
          {comments}
        </Typography>
      </StyledDiv>
      {withToggleButtons &&
        <ToggleButtonGroup>
          <StyledToggleButton value="left">
            <HorizontalRuleIcon fontSize="large"/>
          </StyledToggleButton>
          <StyledToggleButton value="center" disabled>
            <HorizontalRuleIcon fontSize="large"/>
          </StyledToggleButton>
          <StyledToggleButton value="right" disabled>
            <HorizontalRuleIcon fontSize="large"/>
          </StyledToggleButton>
        </ToggleButtonGroup>
      }
    </Container>
  );
});
