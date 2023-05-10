import { Header } from "../../components/Header";
import "./style.scss";

export function Home() {
  return (
    <div>
      <Header />
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
