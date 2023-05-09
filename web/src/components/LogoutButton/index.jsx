import { useAuth } from "../../hooks/useAuth";

import "./style.scss";

const Logout = () => {
  const { handleGoogleLogout } = useAuth();
  return (
    <div>
      <button className="logout" onClick={handleGoogleLogout}>
        Sair
      </button>
    </div>
  );
};

export default Logout;
