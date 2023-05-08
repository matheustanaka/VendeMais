import { auth, googleProvider } from "../../services/firebaseConfig";
import { signInWithPopup, getIdToken, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import "./style.scss";

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      console.log("UserCredential object:", result);

      const idToken = await getIdToken(result.user);

      // Send the ID token to your server for verification and user login
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: idToken,
        },
      });

      const data = await response.json();
      console.log("Server response:", data);

      const authState = getAuth();

      // Verify auth state to navigate into sales page
      authState.onAuthStateChanged((user, error) => {
        if (user) {
          navigate("/sales");
        } else {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        }
      });
    } catch (error) {
      console.error("Error logging in with Google:", error);
    }
  };

  return (
    <div>
      <button className="sign-up" onClick={handleGoogleLogin}>
        Entrar
      </button>
    </div>
  );
};

export default Login;
