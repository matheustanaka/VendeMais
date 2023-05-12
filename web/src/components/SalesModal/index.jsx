import Modal from "react-modal";
import { useSalesContext } from "../../hooks/useSalesContext";
import { useProductContext } from "../../hooks/useProductContext";
import "./style.scss";

Modal.setAppElement("#root");

// eslint-disable-next-line react/prop-types
export function SalesModal({ modalIsOpen, closeModal }) {
  const { customer, setCustomer, setProduct, quantity, setQuantity, addSale } =
    useSalesContext();

  const { products } = useProductContext();

  const handleChangeCustomer = (e) => {
    setCustomer(e.target.value);
  };

  const handleChangeProduct = (e) => {
    setProduct(e.target.value);
  };

  const handleChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSale();

    setCustomer("");
    setProduct("");
    setQuantity("");

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
            <h1 className="title-modal">Criar Venda</h1>
            <p className="closeBtn" onClick={closeModal}>
              Fechar
            </p>
          </div>

          <div className="content-product-modal">
            <form className="form" onSubmit={handleSubmit}>
              <label className="label-product">Nome do Cliente</label>
              <input
                className="input"
                type="text"
                name="title"
                value={customer}
                onChange={handleChangeCustomer}
              />
              <label className="label-product">Nome do Produto</label>
              <select onChange={handleChangeProduct} className="my-select">
                <option value="">Selecione um Produto</option>
                {products.map((product) => (
                  <option key={product._id} value={product._id}>
                    {product.name}
                  </option>
                ))}
              </select>
              <label className="label-product">Quantidade</label>
              <input
                className="input quantity"
                type="number"
                name="price"
                value={quantity}
                onChange={handleChangeQuantity}
              />
              <button className="btn-modal" type="submit">
                Registrar Venda
              </button>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
}
