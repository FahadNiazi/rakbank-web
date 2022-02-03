import { createTheme, MuiThemeProvider } from "@material-ui/core";
import "./App.css";
import { LoginForm } from "./screens/login-form";
import { store } from "./store/store";
import { Provider } from "react-redux";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f05a4f",
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <div>
          <LoginForm />
        </div>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
