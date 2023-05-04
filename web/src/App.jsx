import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/index";
import { Sales } from "./pages/sales";
import "./styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sales" element={<Sales />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
