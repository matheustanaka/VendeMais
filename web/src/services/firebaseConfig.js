import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2De11t66t20x61nioJiQN1cft-jwqt_0",
  authDomain: "sales-management-fd8a0.firebaseapp.com",
  projectId: "sales-management-fd8a0",
  storageBucket: "sales-management-fd8a0.appspot.com",
  messagingSenderId: "202767345467",
  appId: "1:202767345467:web:283846c7a1f3a56d92f91e",
  measurementId: "G-MG0N9R77N3",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
