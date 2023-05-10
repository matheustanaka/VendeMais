import "./style.scss";

export function Dashboard() {
  return (
    <div className="content-section">
      <main className="main-content">
        <header className="header-content">
          <h1>Produtos</h1>
          <div className="btn-register-product">
            <button className="register-product">Cadastrar Produto</button>
          </div>
        </header>
      </main>
      <section className="table-section">
        <div className="table">
          <div className="row header">
            <div className="cell">Product Name</div>
            <div className="cell">Description</div>
            <div className="cell">Price</div>
          </div>
          <div className="row">
            <div className="cell">Teclado Mecanico</div>
            <div className="cell">RGB</div>
            <div className="cell">$ 500</div>
          </div>
          <div className="row">
            <div className="cell">Teclado Mecanico</div>
            <div className="cell">RGB</div>
            <div className="cell">$ 500</div>
          </div>
          <div className="row">
            <div className="cell">Teclado Mecanico</div>
            <div className="cell">RGB</div>
            <div className="cell">$ 500</div>
          </div>
        </div>
      </section>
    </div>
  );
}
