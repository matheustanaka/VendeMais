import Logout from "../../components/LogoutButton";
import { FiShoppingBag, FiUsers } from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";

import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import "./style.scss";

export function Sidebar() {
  const auth = getAuth();
  const [user] = useAuthState(auth);

  return (
    <div className="navbar-info">
      <aside className="sidebar">
        <div className="logo">
          <h1>Vende+</h1>
        </div>
        <div className="user-info">
          <img src={user?.photoURL} alt="" />
          <div className="user-content">
            <h2>{user?.displayName}</h2>
            <p>{user?.email}</p>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">
                {" "}
                <FiShoppingBag style={{ marginRight: "8px" }} /> Produtos
              </a>
            </li>
            <li>
              <a href="#">
                <BsBoxSeam style={{ marginRight: "8px" }} /> Pedidos
              </a>
            </li>
            <li>
              <a href="#">
                <FiUsers style={{ marginRight: "8px" }} /> Clientes
              </a>
            </li>
          </ul>
        </nav>
        <div className="exit">
          <Logout />
        </div>
      </aside>
    </div>
  );
}
