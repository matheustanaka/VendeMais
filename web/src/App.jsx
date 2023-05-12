import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/home/index";
import { Sales } from "./pages/sales";
import { Products } from "./pages/products";

import AuthProvider from "./hooks/useAuth";
import { ProductProvider } from "./hooks/useProductContext";

import "./styles/global.scss";
import { SalesProvider } from "./hooks/useSalesContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProductProvider>
          <SalesProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/sales" element={<Sales />} />
            </Routes>
          </SalesProvider>
        </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
