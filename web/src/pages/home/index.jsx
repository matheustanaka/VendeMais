import Login from "../../components/Login";
import "./style.scss";

export function Home() {
  return (
    <div>
      <header className="main-header">
        <div className="logo">
          <h1>Vende+</h1>
        </div>
        <div className="list">
          <ul className="list-btns">
            <li>
              <a href="">Sobre nós</a>
            </li>
            <li>
              <a href="">Clientes</a>
            </li>
            <li>
              <a href="">Precos</a>
            </li>
          </ul>
        </div>
        <Login />
      </header>
      <section className="wrapper">
        <div className="content">
          <h1 className="title">
            Suas vendas,
            <br /> simplificadas.
          </h1>
          <div className="description">
            <p className="paragraph-content">
              Traga sua loja para Vende+, uma plataforma <br /> totalmente
              automatizada para administrar suas vendas online.
            </p>
          </div>
          <div className="register-btn">
            <a href="" className="anchor">
              Iniciar Vendas
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
