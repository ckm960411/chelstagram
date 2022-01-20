import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRouter from "Router";

const themeOptions = createTheme({
  palette: {
    primary: {
      main: "#001487",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
