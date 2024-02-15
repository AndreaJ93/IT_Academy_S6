import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import PrincipalPage from "./pages/PrincipalPage";
import SingleBudget from "./pages/SingleBudget";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/principalPage" element={<PrincipalPage />} />
      <Route
        path="/singleBudget/:seo/:ads/:web/:pages/:lang"
        element={<SingleBudget />}
      />
    </Routes>
  );
}

export default App;
