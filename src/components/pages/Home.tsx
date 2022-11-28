import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Introduction,
  Services,
  Info,
  AboutCompany,
  Conclusion,
  AppHeader,
  AppFooter
} from '../../components/templates';

const StyledDiv = styled('div')(({ theme} ) => ({
  backgroundColor: theme.palette.gray1,
}));

export const Home = () => {
  return(
    <StyledDiv>
      <AppHeader/>
      <main>
        <Introduction/>
        <Services/>
        <Info/>
        <AboutCompany/>
        <Conclusion/>
      </main>
      <AppFooter/>
    </StyledDiv>
  );
};