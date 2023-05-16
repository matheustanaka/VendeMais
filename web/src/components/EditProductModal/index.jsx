import Modal from "react-modal";
import { useProductContext } from "../../hooks/useProductContext";
import "./style.scss";

Modal.setAppElement("#root"); // This line is important for accessibility and must point to your app root.

export function EditProductModal({
  editModalIsOpen,
  EditCloseModal,
  productId,
}) {
  const {
    name,
    setName,
    rawPrice,
    setRawPrice,
    description,
    setDescription,
    editProduct,
  } = useProductContext();

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangePrice = (e) => {
    setRawPrice(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editProduct(productId, {
      name: name,
      description: description,
      price: rawPrice,
    });

    setName("");
    setDescription("");
    setRawPrice("");

    EditCloseModal();
  };

  return (
    <Modal
      isOpen={editModalIsOpen}
      onRequestClose={EditCloseModal}
      contentLabel="Product Modal"
      className="product-modal"
    >
      <div onClick={EditCloseModal} className="overlay">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="modalContainer"
        >
          <div className="header-modal">
            <h1 className="title-modal">Editar Produto</h1>
            <p className="closeBtn" onClick={EditCloseModal}>
              Fechar
            </p>
          </div>

          <div className="content-product-modal">
            <form className="form" onSubmit={handleSubmit}>
              <label className="label-product">Título do Produto</label>
              <input
                className="input"
                type="text"
                name="title"
                value={name}
                onChange={handleChangeName}
              />
              <label className="label-product">Descricão do Produto</label>
              <input
                className="input"
                type="text"
                name="title"
                value={description}
                onChange={handleChangeDescription}
              />
              <label className="label-product">Preço</label>
              <input
                className="input"
                type="text"
                name="price"
                value={rawPrice}
                onChange={handleChangePrice}
              />
              <button className="btn-modal" type="submit">
                Atualizar Produto
              </button>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
}
