import { createContext, useContext } from "react";

import { auth, googleProvider } from "../services/firebaseConfig";
import { signInWithPopup, signOut, getIdToken, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      console.log("UserCredential object:", result);

      const idToken = await getIdToken(result.user);

      // Send the ID token to your server for verification and user login
      const response = await fetch(`${import.meta.env.REACT_APP_BACKEND_URL}/login`, {
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
          navigate("/products");
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

  const handleGoogleLogout = async () => {
    try {
      const authState = getAuth();

      await signOut(authState);

      // Redirect user to home page after logout
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ handleGoogleLogin, handleGoogleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  const { handleGoogleLogin, handleGoogleLogout } = context;

  return { handleGoogleLogin, handleGoogleLogout };
}
