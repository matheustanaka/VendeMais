import Login from "../../components/Login";
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
    </div>
  );
}
