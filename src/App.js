import { createTheme, MuiThemeProvider } from "@material-ui/core";
import "./App.css";
import { LoginForm } from "./screens/login-form";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f05a4f",
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <LoginForm />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
