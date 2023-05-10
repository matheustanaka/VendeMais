import { ProductModal } from "../ProductModal";
import { useProductContext } from "../../hooks/useProductContext";
import { useState } from "react";
import "./style.scss";

export function ProductDashboard() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { products } = useProductContext();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="content-section">
      <main className="main-content">
        <header className="header-content">
          <h1>Produtos</h1>
          <div className="btn-register-product">
            <button className="register-product" onClick={openModal}>
              Cadastrar Produto
            </button>
          </div>
        </header>
      </main>
      <section className="table-section">
        <div className="table">
          <div className="row header">
            <div className="cell">Product Name</div>
            <div className="cell">Description</div>
            <div className="cell">Price</div>
            <div className="cell">User</div>
          </div>
          {products.map((product) => (
            <div className="row" key={product.id}>
              <div className="cell">{product.name}</div>
              <div className="cell">{product.description}</div>
              <div className="cell">{product.price}</div>
              <div className="cell">{product.user}</div>
            </div>
          ))}
        </div>
      </section>
      <ProductModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
}
