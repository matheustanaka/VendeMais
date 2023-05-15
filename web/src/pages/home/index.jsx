import { Header } from "../../components/Header";

import { useAuth } from "../../hooks/useAuth";

import matheus from "../../assets/matheus.jpeg";
import jesse from "../../assets/jesse.jpeg";
import luis from "../../assets/luis.jpeg";
import franciel from "../../assets/franciel.jpeg";
import printer from "../../assets/Finance app_Two Color.png";
import gestao from "../../assets/Finance app_Flatline.png";
import cadastro from "../../assets/Finance analytics _Monochromatic.png";
import table from "../../assets/Finance analytics _Flatline.png";

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
      <section className="product" id="product">
        <div className="product-functionality">
          <img src={table} alt="exemplo vendas" />
          <div className="text">
            <h1>Sua Venda na palma da mão</h1>
            <p>
              Com o Vende+, é muito mais fácil controlar <br /> as vendas e os
              lucros da sua empresa.
            </p>
          </div>
        </div>
        <div className="functionality-card">
          <h1 className="title-functional">Funcionalidades</h1>
          <div className="main-card">
            <div className="card">
              <img src={gestao} alt="exemplo vendas" />
              <h1>Gestão de Vendas</h1>
              <p>
                Com nossa plataforma, a gestão das suas vendas se torna simples
                e eficiente. Acompanhe todas as vendas em tempo real, gerencie
                pedidos e mantenha-se atualizado sobre o desempenho do seu
                negócio.
              </p>
            </div>
            <div className="card">
              <img src={cadastro} alt="exemplo vendas" />
              <h1>Cadastro de Produtos</h1>
              <p>
                Facilitamos o processo de adição de produtos ao seu catálogo.
                Com um sistema intuitivo, você pode registrar novos produtos,
                atualizar informações existentes e gerenciar seu inventário com
                facilidade.
              </p>
            </div>
            <div className="card">
              <img src={printer} alt="exemplo vendas" />
              <h1>Relatórios e extratos</h1>
              <p>
                Obtenha insights valiosos sobre suas vendas e rendimentos com
                nossos relatórios detalhados e extratos. Monitore as tendências,
                identifique oportunidades e tome decisões informadas para
                impulsionar o crescimento do seu negócio.
              </p>
            </div>
          </div>
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
              <h1>Luís</h1>
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
      <section className="plan" id="plan">
        <div className="price-title">
          <h1>Planos</h1>
        </div>
        <div className="price-card-content">
          <div className="price-card">
            <h1>Bronze</h1>
            <h2>R$ 20/Mês</h2>
            <ul className="pricing-card-features">
              <li>Cadastro de produtos</li>
              <li>Registro de Vendas</li>
              <li>Relatório de Vendas</li>
              <li>Atendimento por e-mail</li>
            </ul>
            <a href="mailto:exemplo@email.com" className="email-button">
              Contato
            </a>
          </div>
          <div className="price-card">
            <h1>Prata</h1>
            <h2>R$ 40/Mês</h2>
            <ul className="pricing-card-features">
              <li>Cadastro de produtos</li>
              <li>Registro de Vendas</li>
              <li>Relatório de Vendas</li>
              <li>Atendimento por WhatsApp</li>
            </ul>
            <a href="mailto:exemplo@email.com" className="email-button">
              Contato
            </a>
          </div>
          <div className="price-card">
            <h1>Ouro</h1>
            <h2>R$ 80/Mês</h2>
            <ul className="pricing-card-features">
              <li>Cadastro de produtos</li>
              <li>Registro de Vendas</li>
              <li>Relatório de Vendas</li>
              <li>Atendimento por telefone</li>
            </ul>
            <a href="matheus.ntanaka@senacsp.edu.br" className="email-button">
              Contato
            </a>
          </div>
        </div>
      </section>
      <footer className="site-footer">
        <div className="footer-content">
          <p>&copy; 2023 Vende+. Todos os direitos reservados.</p>
          <ul className="footer-links">
            <li>
              <a href="#">Termos de Serviço</a>
            </li>
            <li>
              <a href="#">Política de Privacidade</a>
            </li>
            <li>
              <a href="mailto:exemplo@email.com">Contato</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
