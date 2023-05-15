import { Header } from "../../components/Header";

import { useAuth } from "../../hooks/useAuth";

import matheus from "../../assets/matheus.jpeg";
import jesse from "../../assets/jesse.jpeg";
import luis from "../../assets/luis.jpeg";
import franciel from "../../assets/franciel.jpeg";

import "./style.scss";

export function Home() {
  const { handleGoogleLogin } = useAuth();
  return (
    <div>
      <Header />
      <section className="wrapper">
        <div className="content">
          <h1 className="title">
            Suas <span className="span-title">Vendas</span>
            <br /> Simplificadas.
          </h1>
          <div className="description">
            <p className="paragraph-content">
              Traga sua loja para Vende+, uma plataforma <br /> totalmente{" "}
              <span className="span-paragraph">automatizada</span> para
              administrar suas{" "}
              <span className="span-paragraph">vendas online.</span>
            </p>
          </div>
          <button className="register-btn" onClick={handleGoogleLogin}>
            Iniciar Vendas
          </button>
        </div>
      </section>
      <section className="about" id="about">
        <h1 className="aboutTitle">Sobre nós</h1>
        <div className="main-content">
          <div className="team">
            <div className="card-user">
              <img src={matheus} alt="" />
              <h1>Matheus</h1>
              <p>Desenvolvedor</p>
            </div>
            <div className="card-user">
              <img src={jesse} alt="" />
              <h1>Jesse</h1>
              <p>Desenvolvedor</p>
            </div>
            <div className="card-user">
              <img src={luis} alt="" />
              <h1>luis</h1>
              <p>Desenvolvedor</p>
            </div>
            <div className="card-user">
              <img src={franciel} alt="" />
              <h1>Franciel</h1>
              <p>Desenvolvedor</p>
            </div>
          </div>
          <div className="product-text">
            <p>
              Somos um grupo de estudantes motivados pela inovação e pela
              possibilidade de transformar o mundo dos negócios. Com a economia
              digital expandindo em ritmo acelerado, percebemos a necessidade
              emergente de sistemas eficientes para o controle de vendas online.
              Nosso objetivo com este Saas (Software-as-a-Service) é contribuir
              positivamente para esse cenário, fornecendo uma solução que possa
              auxiliar pequenos e médios empresários a terem controle sobre suas
              vendas, mantendo um registro organizado e simplificado de seus
              produtos.
            </p>
            <p>
              Nosso projeto tem como propósito desenvolver uma plataforma
              intuitiva e confiável para o gerenciamento de vendas online. Esta
              plataforma permitirá o cadastro de produtos e o registro de
              vendas, oferecendo aos empresários uma ferramenta eficaz para o
              controle de suas operações. Acreditamos que nosso sistema pode
              simplificar as operações de vendas, proporcionando insights
              valiosos para o crescimento dos negócios e facilitando a tomada de
              decisões estratégicas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
