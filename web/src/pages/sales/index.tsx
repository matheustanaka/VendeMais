import React from "react";
import { Sidebar } from "../../components/Sidebar";
import "./style.scss";
import { Table } from "../../components/Table";

export function Sales() {
  return (
    <div className="dashboard-content">
      <Sidebar />
      <Table />
    </div>
  );
}
