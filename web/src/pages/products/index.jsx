import { Sidebar } from "../../components/Sidebar";
import { ProductDashboard } from "../../components/ProductDashboard";

import "./style.scss";

export function Products() {
  return (
    <div className="dashboard-content">
      <Sidebar />
      <ProductDashboard />
    </div>
  );
}
