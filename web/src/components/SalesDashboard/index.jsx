import { SalesModal } from "../SalesModal";
import { useSalesContext } from "../../hooks/useSalesContext";
import { useState } from "react";
import "./style.scss";

export function SalesDashboard() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { sales, loading } = useSalesContext();

  // wait sales data load
  if (loading) {
    return <div>Loading...</div>;
  }

  const currentBalance = sales.reduce(
    (total, item) => total + item.totalAmount,
    0
  );

  // transform items in array
  const items = sales.flatMap((sale) => sale.items);
  const productsSold = items.reduce((total, i) => total + i.quantity, 0);

  const lastSale = sales[sales.length - 1];
  const dateLastSale = new Date(lastSale.createdAt);
  const FormattedDateLastSale = `${String(dateLastSale.getDate()).padStart(
    2,
    "0"
  )}/${String(dateLastSale.getMonth() + 1).padStart(
    2,
    "0"
  )}/${dateLastSale.getFullYear()}`;

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
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
            R$ <span>{currentBalance}</span>
          </h4>
        </div>
        <div className="card">
          <h1>Total Produtos Vendidos</h1>
          <h4>{productsSold} produtos vendidos</h4>
        </div>
        <div className="card">
          <h1>Última Venda</h1>
          <h4>
            {lastSale.customer}, {FormattedDateLastSale}
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
            <div className="cell">Detalhes da venda</div>
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

            return (
              <div className="row" key={sale._id}>
                <div className="cell">{sale.customer}</div>
                <div className="cell">R$ {sale.totalAmount}</div>
                <div className="cell">{totalQuantity} produtos comprados</div>
                <div className="cell">{formattedDate}</div>
                <div className="cell">
                  <button className="details">Detalhes</button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <SalesModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
}
