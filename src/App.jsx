import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import PrincipalPage from "./pages/PrincipalPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/principalPage" element={<PrincipalPage />} />
    </Routes>
  );
}

export default App;
