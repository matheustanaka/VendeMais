import { createContext, useContext, useState, useEffect } from "react";
import { getAuth, getIdToken, onAuthStateChanged } from "firebase/auth";

const SalesContext = createContext();

// eslint-disable-next-line react/prop-types
export const SalesProvider = ({ children }) => {
  const [costumer, setCostumer] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState("");
  const [sales, setSales] = useState([]);

  const auth = getAuth();

  const fetchSales = async () => {
    try {
      const idToken = await getIdToken(auth.currentUser);
      console.log(idToken);

      const response = await fetch("http://localhost:3000/sales", {
        headers: {
          "Content-Type": "application/json",
          Authorization: idToken,
        },
      });

      if (!response) {
        throw new Error("Server respondend with an error");
      }

      const sales = await response.json();
      console.log("Server response:", sales);

      return setSales(sales);
    } catch (error) {
      console.log("Error fetching sales:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchSales();
      }
      return () => unsubscribe();
    });
  }, []);

  return (
    <SalesContext.Provider
      value={{
        sales,
        setSales,
        fetchSales,
        costumer,
        setCostumer,
        totalAmount,
        setTotalAmount,
        quantity,
        setQuantity,
        date,
        setDate,
      }}
    >
      {children}
    </SalesContext.Provider>
  );
};

export const useSalesContext = () => {
  const context = useContext(SalesContext);

  if (context === undefined) {
    throw new Error("useSalesContext must be used within a SalesProvider");
  }

  return context;
};
