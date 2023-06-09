import { Menu, Dropdown, Button } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { SalesModal } from "../SalesModal";
import { DetailModal } from "../DetailModal";
import { useSalesContext } from "../../hooks/useSalesContext";
import { useState } from "react";
import "./style.scss";

export function SalesDashboard() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [detailModalIsOpen, setDetailModalIsOpen] = useState(false);
  const { sales, loading, fetchSaleById, saleById } = useSalesContext();

  const menu = (saleById) => (
    <Menu style={{ background: "var(--background)" }}>
      <Menu.Item className="dropdownItem" key="0">
        <button
          style={{
            color: "white",
            border: "none",
            background: "var(--background)",
          }}
          onClick={() => {
            fetchSaleById(saleById);
            openDetailModal();
          }}
        >
          Detalhes
        </button>
      </Menu.Item>
    </Menu>
  );

  // wait sales data load
  if (loading) {
    return <div>Loading...</div>;
  }
  const currentBalance =
    sales && sales.length > 0
      ? sales.reduce((total, item) => total + item.totalAmount, 0)
      : "0";

  const formattedCurrentBalance = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(currentBalance);

  const items =
    sales && sales.length > 0 ? sales.flatMap((sale) => sale.items) : [];

  const productsSold =
    items && items.length > 0
      ? items.reduce((total, i) => total + i.quantity, 0)
      : "0";

  const lastSale = sales && sales.length > 0 ? sales[sales.length - 1] : null;

  const dateLastSale = lastSale ? new Date(lastSale.createdAt) : "N/A";

  const FormattedDateLastSale =
    dateLastSale !== "N/A"
      ? `${String(dateLastSale.getDate()).padStart(2, "0")}/${String(
          dateLastSale.getMonth() + 1
        ).padStart(2, "0")}/${dateLastSale.getFullYear()}`
      : "N/A";

  const openModal = () => {
    setModalIsOpen(true);
  };

  const openDetailModal = () => {
    setDetailModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setDetailModalIsOpen(false);
  };

  const closeDetailModal = () => {
    setDetailModalIsOpen(false);
  };

  return (
    <div className="main-dashboard">
      <header className="header-sales">
        <h1>Vendas</h1>
        <button className="register-sales" onClick={openModal}>
          Cadastrar Venda
        </button>
      </header>
      <div className="card-sales">
        <div className="card">
          <h1>Saldo Atual</h1>
          <h4>
            <span>{formattedCurrentBalance}</span>
          </h4>
        </div>
        <div className="card">
          <h1>Total Produtos Vendidos</h1>
          <h4>{productsSold} produtos vendidos</h4>
        </div>
        <div className="card">
          <h1>Última Venda</h1>
          <h4>
            {lastSale ? `${lastSale.customer}, ${FormattedDateLastSale}` : ""}
          </h4>
        </div>
      </div>
      <section className="table-section">
        <div className="table">
          <div className="row header">
            <div className="cell">Nome do Cliente</div>
            <div className="cell">Valor Total da Venda</div>
            <div className="cell">Quantidade de Produtos</div>
            <div className="cell">Data da compra</div>
            <div className="cell"></div>
          </div>
          {sales.map((sale) => {
            const totalQuantity = sale.items.reduce(
              (total, item) => total + item.quantity,
              0
            );

            // Format Date
            const date = new Date(sale.createdAt);
            const formattedDate = `${String(date.getDate()).padStart(
              2,
              "0"
            )}/${String(date.getMonth() + 1).padStart(
              2,
              "0"
            )}/${date.getFullYear()}`;

            const formattedTotalAmount = new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(sale.totalAmount);

            return (
              <div className="row" key={sale._id}>
                <div className="cell">{sale.customer}</div>
                <div className="cell">{formattedTotalAmount}</div>
                <div className="cell">{totalQuantity} produtos comprados</div>
                <div className="cell">{formattedDate}</div>
                <div className="cell">
                  <Dropdown overlay={menu(sale._id)}>
                    <Button className="dropdownButton">
                      <EllipsisOutlined />
                    </Button>
                  </Dropdown>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <SalesModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <DetailModal
        DetailModalIsOpen={detailModalIsOpen}
        closeDetailModal={closeDetailModal}
        sale={saleById}
        loading={loading}
      />
    </div>
  );
}
