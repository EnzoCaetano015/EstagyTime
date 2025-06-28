import { createTheme, ThemeProvider } from '@mui/material/styles';
import Routes from './Routes';

const theme = createTheme({
  typography: {
    fontFamily: '"Titillium Web", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}

export default App;
