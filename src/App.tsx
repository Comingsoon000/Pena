import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { Home } from './components/pages';

export const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
};
