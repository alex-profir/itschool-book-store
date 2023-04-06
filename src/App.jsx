import { CssBaseline } from "@mui/material";
import "./App.css";
import { AuthContextProvider } from "./contexts/auth/AuthContextProvider";
import Routes from "./routes";

function App() {
  return (
    <AuthContextProvider>
      <CssBaseline />
      <Routes />
    </AuthContextProvider>
  );
}

export default App;
