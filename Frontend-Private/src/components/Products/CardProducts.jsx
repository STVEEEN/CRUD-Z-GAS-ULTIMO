import React from "react";
import Button from "../Button";

const CardProduct = ({ product, deleteProduct, updateProduct }) => {
  if (!product) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div
      className="card shadow-lg mb-4"
      style={{
        background: "linear-gradient(135deg,rgb(255, 255, 255) 0%,rgb(255, 255, 255) 100%)",
        border: "none",
        borderRadius: "1.5rem",
        boxShadow: "0 8px 32px 0 rgba(77, 29, 131, 0.37)",
        color: "#00fff7",
        padding: "2rem",
        maxWidth: "400px",
        margin: "auto",
      }}
    >
      <h2
        className="fw-bold mb-3 text-center"
        style={{
          color: "#6b21a8",
        
          letterSpacing: "2px",
        }}
      >
        {product.name}
      </h2>
      <p style={{ color: "#6a1b9a" }}>
        <span className="fw-semibold">Descripción:</span> {product.description || "N/A"}
      </p>
      <p style={{ color: "#6a1b9a" }}>
        <span className="fw-semibold">Precio:</span> ${product.price.toFixed(2)}
      </p>
      <p style={{ color: "#6a1b9a" }}> 
        <span className="fw-semibold">Stock:</span> {product.stock}
      </p>
      <p style={{ color: "#6a1b9a" }}>
        <span className="fw-semibold">ID:</span> {product._id}
      </p>
      <div className="d-flex justify-content-center mt-3">
        <Button 
          label={"Eliminar"}
          actionButton={() => deleteProduct(product._id)}
 
        />
        <Button 
          label={"Editar Información"}
          actionButton={() => updateProduct(product)}
  
        />
      </div>
    </div>
  );
};

export default CardProduct;