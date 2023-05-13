import Modal from "react-modal";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useSalesContext } from "../../hooks/useSalesContext";
import { useProductContext } from "../../hooks/useProductContext";
import "./style.scss";

Modal.setAppElement("#root");

// eslint-disable-next-line react/prop-types
export function SalesModal({ modalIsOpen, closeModal }) {
  const {
    customer,
    setCustomer,
    setProduct,
    quantity,
    setQuantity,
    addSale,
    items,
    setItems,
  } = useSalesContext();

  const { products } = useProductContext();

  const handleChangeCustomer = (e) => {
    setCustomer(e.target.value);
  };

  const handleChangeItemProduct = (index) => (e) => {
    const newItems = [...items];
    newItems[index].product = e.target.value;
    setItems(newItems);
  };

  const handleChangeItemQuantity = (index) => (e) => {
    const newItems = [...items];
    newItems[index].quantity = e.target.value;
    setItems(newItems);
  };

  const handleAddItem = () => {
    setItems([...items, { product: "", quantity: "" }]);
  };

  const handleRemoveItem = (index) => () => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSale();

    setCustomer("");
    setProduct("");
    setQuantity("");
    setItems([{ product: "", quantity: "" }]);

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
              {items.map((item, index) => (
                <div key={index}>
                  <label className="label-product">Nome do Produto</label>
                  <div className="product-area">
                    <select
                      onChange={handleChangeItemProduct(index)}
                      className="my-select"
                    >
                      <option value="">Selecione um Produto</option>
                      {products.map((product) => (
                        <option key={product._id} value={product._id}>
                          {product.name}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      className="btn-add"
                      onClick={handleRemoveItem(index)}
                    >
                      <AiOutlineMinus size={18} color="white" />
                    </button>
                  </div>
                  <label className="label-product">Quantidade</label>
                  <input
                    className="input quantity"
                    type="number"
                    value={item.quantity}
                    onChange={handleChangeItemQuantity(index)}
                  />
                </div>
              ))}
              <button
                className="btn-modal icon"
                type="button"
                onClick={handleAddItem}
              >
                <AiOutlinePlus size={28} color="white" />
              </button>
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
