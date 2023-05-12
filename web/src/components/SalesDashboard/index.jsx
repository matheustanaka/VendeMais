import "./style.scss";

export function SalesDashboard() {
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
          <div className="row">
            <div className="cell">oi</div>
            <div className="cell">oi</div>
            <div className="cell">oi</div>
            <div className="cell">oi</div>
          </div>
        </div>
      </section>
    </div>
  );
}
