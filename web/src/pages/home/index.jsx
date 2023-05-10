import { Header } from "../../components/Header";

import { useAuth } from "../../hooks/useAuth";

import "./style.scss";

export function Home() {
  const { handleGoogleLogin } = useAuth();
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
          <button className="register-btn" onClick={handleGoogleLogin}>
            Iniciar Vendas
          </button>
        </div>
      </section>
    </div>
  );
}
