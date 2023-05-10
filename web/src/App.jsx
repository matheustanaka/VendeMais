import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/home/index";
import { Sales } from "./pages/sales";
import { Products } from "./pages/products";

import AuthProvider from "./hooks/useAuth";
import { ProductProvider } from "./hooks/useProductContext";

import "./styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProductProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/sales" element={<Sales />} />
          </Routes>
        </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
