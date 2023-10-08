import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Components/Routes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
