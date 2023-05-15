import Modal from "react-modal";
import "./style.scss";

Modal.setAppElement("#root");

// eslint-disable-next-line react/prop-types
export function DetailModal({
  DetailModalIsOpen,
  closeDetailModal,
  sale,
  loading,
}) {
  if (loading || !sale) {
    return console.log("Loading", loading);
  }

  // Calculate total quantity of products
  const totalQuantity = sale.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  //Format Date
  const date = new Date(sale.createdAt);
  const formattedDate = `${String(date.getDate()).padStart(2, "0")}/${String(
    date.getMonth() + 1
  ).padStart(2, "0")}/${date.getFullYear()}`;

  let products = sale.items.map((item) => ({
    name: item.product.name,
    price: item.product.price,
    quantity: item.quantity,
  }));

  return (
    <Modal
      isOpen={DetailModalIsOpen}
      onRequestClose={closeDetailModal}
      contentLabel="Product Modal"
      className="product-modal"
    >
      <div onClick={closeDetailModal} className="overlay">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="modalContainer"
        >
          <div className="header-modal">
            <h1 className="title-modal">Detalhes da Venda</h1>
            <p className="closeBtn" onClick={closeDetailModal}>
              Fechar
            </p>
          </div>
          <div className="content-sale-modal">
            <div className="client-detail">
              <div className="detail-header">
                <h2>Nome do Cliente</h2>
                <p>{sale.customer}</p>
                <h2>Valor Total</h2>
                <p>R$ {sale.totalAmount}</p>
              </div>
              <div className="detail-header">
                <h2>Quantidade vendida</h2>
                <p>{totalQuantity} produtos</p>
                <h2>Data da venda</h2>
                <p>{formattedDate}</p>
              </div>
            </div>

            <section className="table-section-sale">
              <div className="table-sale">
                <div className="row-sale header-sale">
                  <div className="cell-sale">Produto</div>
                  <div className="cell-sale">Preço</div>
                  <div className="cell-sale">Quantidade</div>
                </div>
                {products.map((product, index) => (
                  <div className="row-sale" key={index}>
                    <div className="cell-sale">{product.name}</div>
                    <div className="cell-sale">R$ {product.price}</div>
                    <div className="cell-sale">{product.quantity}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </Modal>
  );
}
