import { useAuth } from "../../hooks/useAuth";

import "./style.scss";

const Login = () => {
  const { handleGoogleLogin } = useAuth();
  return (
    <div>
      <button className="sign-up" onClick={handleGoogleLogin}>
        Entrar
      </button>
    </div>
  );
};

export default Login;
