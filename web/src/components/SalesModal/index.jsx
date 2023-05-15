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

  const handleRemoveItem = (index) => {
    if (index > 0) {
      const newItems = [...items];
      newItems.splice(index, 1);
      setItems(newItems);
    }
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
      contentLabel="Sales Modal"
      className="sales-modal"
    >
      <div onClick={closeModal} className="overlay">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="sales-modalContainer"
        >
          <div className="header-modal">
            <h1 className="title-modal">Criar Venda</h1>
            <p className="closeBtn" onClick={closeModal}>
              Cancelar
            </p>
          </div>

          <div className="content-product-modal">
            <form className="form" onSubmit={handleSubmit}>
              <label className="label-sale">Nome do Cliente</label>
              <input
                className="input-name"
                type="text"
                name="title"
                value={customer}
                onChange={handleChangeCustomer}
              />
              {items.map((item, index) => (
                <div key={index} className="parent-product">
                  <label className="label-sale">Nome do Produto</label>
                  <div className="product-area">
                    <select
                      onChange={handleChangeItemProduct(index)}
                      className="my-select"
                    >
                      <option value="">Selecione um Produto</option>
                      {products.map((product) => {
                        const formattedPrice = new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(product.price);
                        return (
                          <option key={product._id} value={product._id}>
                            {product.name} - {formattedPrice}
                          </option>
                        );
                      })}
                    </select>
                    <button
                      type="button"
                      className="btn-remove"
                      onClick={() => handleRemoveItem(index)}
                    >
                      <AiOutlineMinus />
                    </button>
                  </div>
                  <label className="label-sale">Quantidade</label>
                  <input
                    className="input-quantity"
                    type="number"
                    value={item.quantity}
                    onChange={handleChangeItemQuantity(index)}
                  />
                  <div className="row"></div>
                </div>
              ))}
              <div className="btn-fn">
                <button
                  type="button"
                  className="btn-add"
                  onClick={handleAddItem}
                >
                  Adicionar Produto
                </button>
                <button className="btn-sale" type="submit">
                  Registrar Venda
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
}
