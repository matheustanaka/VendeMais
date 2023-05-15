import SignUp from "../SignUpButton";
import Login from "../../components/LoginButton";
import "./style.scss";

export function Header() {
  return (
    <div>
      <header className="main-header">
        <div className="logo">
          <h1>Vende+</h1>
        </div>
        <div className="list">
          <ul className="list-btns">
            <li>
              <a href="#about">Sobre Nós</a>
            </li>
            <li>
              <a href="">Segmentos</a>
            </li>
            <li>
              <a href="">Planos</a>
            </li>
          </ul>
        </div>
        <div className="btn-login-register">
          <SignUp />
          <Login />
        </div>
      </header>
    </div>
  );
}
