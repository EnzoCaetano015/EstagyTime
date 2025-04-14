import { createTheme, ThemeProvider } from '@mui/material/styles';
import Rotas from "./routes/Routes";

const theme = createTheme({
  typography: {
    fontFamily: '"Titillium Web", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Rotas/>
    </ThemeProvider>  
  )
}

export default App;
