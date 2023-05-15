import { useAuth } from "../../hooks/useAuth";

import "./style.scss";

const SignUp = () => {
  const { handleGoogleLogin } = useAuth();
  return (
    <div>
      <button className="sign-up" onClick={handleGoogleLogin}>
        Inscreva-se
      </button>
    </div>
  );
};

export default SignUp;
