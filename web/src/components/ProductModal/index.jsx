import { useState } from "react";
import Modal from "react-modal";
import "./style.scss";

Modal.setAppElement("#root"); // This line is important for accessibility and must point to your app root.

export function ProductModal({ modalIsOpen, closeModal }) {
  //   const [name, setName] = useState("");
  //   const [description, setDescription] = useState("");
  //   const [price, setPrice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you would typically send the form data to your server
    console.log({ name, description, price: Number(price) });
    closeModal();
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Product Modal"
      className="product-modal"
    >
      <div onClick={closeModal} className="overlay">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="modalContainer"
        >
          <div className="header-modal">
            <h1 className="title-modal">Adicionar Produto</h1>
            <p className="closeBtn" onClick={closeModal}>
              Fechar
            </p>
          </div>

          <div className="content-product-modal">
            <form className="form" onSubmit={handleSubmit}>
              <label className="label-product">Título do Produto</label>
              <input className="input" type="text" name="title" />
              <label className="label-product">Descricão do Produto</label>
              <input className="input" type="text" name="title" />
              <label className="label-product">Preço</label>
              <input className="input" type="text" name="price" />
              <button className="btn-modal" type="submit">
                Cadastrar Produto
              </button>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
}
