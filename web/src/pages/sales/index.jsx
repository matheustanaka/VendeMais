import { SalesDashboard } from "../../components/SalesDashboard";
import { Sidebar } from "../../components/Sidebar";
import "./style.scss";

export function Sales() {
  return (
    <div className="dashboard-content">
      <Sidebar />
      <SalesDashboard />
    </div>
  );
}
