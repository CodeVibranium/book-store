import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Components/Routes";
import Layout from "./Layout/Layout";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Layout>
  );
}

export default App;
