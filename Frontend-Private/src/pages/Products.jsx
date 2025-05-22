import React, { useEffect } from "react";
import RegisterProducts from "../components/Products/RegisterProducts";
import ListProducts from "../components/Products/ListProducts";
import { Toaster } from "react-hot-toast";
import useDataProducts from "../components/Products/hooks/useDataProducts";

const Products = () => {
  useEffect(() => {
    document.title = "Productos";
  }, []);

  const {
    activeTab,
    setActiveTab,
    id,
    setId,
    name,
    setName,
    description,
    setDescription,
    price,
    setPrice,
    stock,
    setStock,
    errorProduct,
    setError,
    success,
    setSuccess,
    loading,
    setLoading,
    products,
    setProducts,
    cleanData,
    handleSubmit,
    fetchData,
    deleteProduct,
    updateProduct,
    handleUpdate,
  } = useDataProducts();

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: "linear-gradient(120deg, #f3e5f5 0%, #e1bee7 100%)",
        padding: "40px 0",
      }}
    >
      <div className="w-100" style={{ maxWidth: "900px" }}>
        <div
          className="shadow-lg p-4"
          style={{
            background: "white",
            border: "none",
            borderRadius: "1.5rem",
            boxShadow: "0 8px 32px 0 rgba(149, 117, 205, 0.3)",
            color: "#6a1b9a",
          }}
        >
          <h1
            className="fw-bold mb-4 text-center"
            style={{
              color: "#6a1b9a",
              textShadow: "0 0 10px #6a1b9a, 0 0 20px #6a1b9a",
              letterSpacing: "2px",
            }}
          >
            Productos
          </h1>
          <div className="d-flex border-bottom mb-4" style={{ borderColor: "#9c27b0" }}>
            <button
              className="btn me-2 fw-bold"
              style={{
                color: activeTab === "list" ? "#6a1b9a" : "#b0b0b0",
                background: "transparent",
                border: "none",
                borderBottom: activeTab === "list" ? "2px solid #9c27b0" : "none",
                borderRadius: 0,
                letterSpacing: "1px",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              onClick={() => setActiveTab("list")}
            >
              Lista de productos
            </button>
            <button
              className="btn fw-bold"
              style={{
                color: activeTab === "form" ? "#6a1b9a" : "#b0b0b0",
                background: "transparent",
                border: "none",
                borderBottom: activeTab === "form" ? "2px solid #9c27b0" : "none",
                borderRadius: 0,
                letterSpacing: "1px",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              onClick={() => {
                setActiveTab("form");
                cleanData();
              }}
            >
              Gestionar Productos
            </button>
          </div>
          <div>
            {activeTab === "list" && (
              <ListProducts
                setId={setId}
                setActiveTab={setActiveTab}
                updateProduct={updateProduct}
                handleUpdate={handleUpdate}
                deleteProduct={deleteProduct}
                products={products}
                loading={loading}
              />
            )}
            {activeTab === "form" && (
              <RegisterProducts
                id={id}
                setId={setId}
                name={name}
                setName={setName}
                description={description}
                setDescription={setDescription}
                price={price}
                setPrice={setPrice}
                stock={stock}
                setStock={setStock}
                errorProduct={errorProduct}
                setError={setError}
                success={success}
                setSuccess={setSuccess}
                loading={loading}
                setLoading={setLoading}
                products={products}
                setProducts={setProducts}
                cleanData={cleanData}
                handleSubmit={handleSubmit}
                handleUpdate={handleUpdate}
              />
            )}
          </div>
        </div>
      </div>
      <Toaster toastOptions={{ duration: 1000 }} />
    </div>
  );
};

export default Products;
