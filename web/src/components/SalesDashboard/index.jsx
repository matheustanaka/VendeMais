import { SalesModal } from "../SalesModal";
import { useSalesContext } from "../../hooks/useSalesContext";
import { useProductContext } from "../../hooks/useProductContext";
import { useState } from "react";
import "./style.scss";

export function SalesDashboard() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { sales } = useSalesContext();
  const { products } = useProductContext();

  const currentBalance = sales.reduce(
    (total, item) => total + item.totalAmount,
    0
  );

  const items = sales.flatMap((sale) => sale.items);
  const productsSold = items.reduce((total, i) => total + i.quantity, 0);

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
          <h2>Saldo Atual</h2>
          <p>R$ {currentBalance}</p>
        </div>
        <div className="card">
          <h2>Total Produtos Vendidos</h2>
          <p>{productsSold} produtos</p>
        </div>
        <div className="card">
          <h2>Última Venda</h2>
          <p>Resultado</p>
        </div>
      </div>
      <section className="table-section">
        <div className="table">
          <div className="row header">
            <div className="cell">Nome do Cliente</div>
            <div className="cell">Valor Total da Venda</div>
            <div className="cell">Quantidade de Produtos</div>
            <div className="cell">Data da compra</div>
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
                <div className="cell">{sale.totalAmount}</div>
                <div className="cell">{totalQuantity}</div>
                <div className="cell">{formattedDate}</div>
              </div>
            );
          })}
        </div>
      </section>
      <SalesModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
}
