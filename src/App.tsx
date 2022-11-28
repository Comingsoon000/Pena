import React from 'react';
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { Home } from './components/pages';

export const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </ThemeProvider>
  )
};
