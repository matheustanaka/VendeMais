import { Sidebar } from "../../components/Sidebar";
import { Dashboard } from "../../components/Dashboard";

import "./style.scss";

export function Products() {
  return (
    <div className="dashboard-content">
      <Sidebar />
      <Dashboard />
    </div>
  );
}
