import { useSalesContext } from "../../hooks/useSalesContext";
import "./style.scss";

export function SalesDashboard() {
  const { sales } = useSalesContext();
  return (
    <div className="main-dashboard">
      <header className="header-sales">
        <h1>Vendas</h1>
        <button className="register-sales">Cadastrar Venda</button>
      </header>
      <div className="card-sales">
        <div className="card">
          <h2>Saldo Atual</h2>
          <p>Resultado</p>
        </div>
        <div className="card">
          <h2>Total de Vendas</h2>
          <p>Resultado</p>
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
    </div>
  );
}
