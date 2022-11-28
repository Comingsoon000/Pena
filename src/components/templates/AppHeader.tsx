import React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { NavMenu } from '../molecules';
import { Link } from '../atoms/Link';
import { FdnIcon } from '../atoms/icons';

const StyledDiv = styled('div')(() => ({
  position: 'absolute',
  width: '100%',
}));

const StyledHeader = styled('header')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '0 auto',
  [theme.breakpoints.up('mobile')]: {
    width: '293px',
  },
  [theme.breakpoints.up('tablet')]: {
    width: '586px',
  },
  [theme.breakpoints.up('laptop')]: {
    width: '879px',
  },
  [theme.breakpoints.up('desktop')]: {
    width: '1172px',
  },
}));

export const AppHeader = () => {
  return (
    <StyledDiv>
      <StyledHeader>
        <IconButton>
          <FdnIcon/>
        </IconButton>
        <NavMenu
          gap="5px"
          items={[
            <Link padding="5px">
              <FacebookIcon/>
            </Link>,
            <Link padding="5px">
              <TwitterIcon/>
            </Link>,
            <Link padding="5px">
              <ShoppingCartIcon/>
            </Link>,
            <Link padding="5px">
              <MenuIcon/>
            </Link>,
          ]}
        />
      </StyledHeader>
    </StyledDiv>
  );
};
