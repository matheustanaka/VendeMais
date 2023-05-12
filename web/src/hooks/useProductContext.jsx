import { createContext, useContext, useState, useEffect } from "react";
import { getAuth, getIdToken, onAuthStateChanged } from "firebase/auth";

const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const auth = getAuth();

  const fetchProducts = async () => {
    try {
      const idToken = await getIdToken(auth.currentUser);

      console.log(idToken);

      const response = await fetch("http://localhost:3000/products", {
        headers: {
          "Content-Type": "application/json",
          Authorization: idToken,
        },
      });

      if (!response) {
        throw new Error("Server responded with an error");
      }

      const products = await response.json();
      // console.log("Server response:", products);

      return setProducts(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const addProduct = async () => {
    try {
      const idToken = await getIdToken(auth.currentUser);

      console.log(idToken);

      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: idToken,
        },
        body: JSON.stringify({
          name: name,
          description: description,
          price: price,
        }),
      });

      console.log(response);

      fetchProducts();
    } catch (error) {
      console.error("Error sending products:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchProducts();
      }
      return () => unsubscribe();
    });
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        fetchProducts,
        name,
        setName,
        price,
        setPrice,
        description,
        setDescription,
        addProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);

  if (context === undefined) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
