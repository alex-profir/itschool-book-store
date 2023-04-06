import "./App.css";
import { AuthContextProvider } from "./contexts/auth/AuthContextProvider";
import Routes from "./routes";

function App() {
  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  );
}

export default App;
