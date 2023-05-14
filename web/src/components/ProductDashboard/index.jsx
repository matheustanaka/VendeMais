import { Menu, Dropdown, Button } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

import { ProductModal } from "../ProductModal";
import { useProductContext } from "../../hooks/useProductContext";
import { useState } from "react";
import "./style.scss";
import { EditProductModal } from "../EditProductModal";

export function ProductDashboard() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(null);
  const {
    products,
    fetchProductById,
    setName,
    setDescription,
    setPrice,
    deleteProduct,
  } = useProductContext();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const EditOpenModal = (productId) => async () => {
    setCurrentProductId(productId);

    const product = await fetchProductById(productId);

    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);

    setEditModalIsOpen(true);
  };

  const EditCloseModal = () => {
    setCurrentProductId(null);
    setEditModalIsOpen(false);
  };

  const handleDeleteProduct = (productId) => async () => {
    deleteProduct(productId);
  };

  // Dropdown
  const menu = (id) => (
    <Menu style={{ background: "var(--background)" }}>
      <Menu.Item className="dropdownItem" key="0">
        <button
          style={{
            color: "white",
            border: "none",
            background: "var(--background)",
          }}
          onClick={EditOpenModal(id)}
        >
          Editar
        </button>
      </Menu.Item>
      <Menu.Item className="dropdownItem" key="1">
        <button
          style={{
            color: "white",
            border: "none",
            background: "var(--background)",
          }}
          onClick={handleDeleteProduct(id)}
        >
          Deletar
        </button>
      </Menu.Item>
    </Menu>
  );

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
            <div className="cell">Nome do Produto</div>
            <div className="cell">Descrição</div>
            <div className="cell">Preço</div>
            <div className="cell"></div>
          </div>
          {products.map((product) => (
            <div className="row" key={product._id}>
              <div className="cell">{product.name}</div>
              <div className="cell">{product.description}</div>
              <div className="cell">R$ {product.price}</div>
              <div className="cell">
                <Dropdown overlay={menu(product._id)}>
                  <Button className="dropdownButton">
                    <EllipsisOutlined />
                  </Button>
                </Dropdown>
              </div>
            </div>
          ))}
        </div>
      </section>
      <ProductModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <EditProductModal
        editModalIsOpen={editModalIsOpen}
        EditCloseModal={EditCloseModal}
        productId={currentProductId}
      />
    </div>
  );
}
