import React from "react";

const RegisterProducts = ({
  id,
  name,
  setName,
  description,
  setDescription,
  price,
  setPrice,
  stock,
  setStock,
  handleSubmit,
  handleUpdate,
}) => {
  return (
    <form
      className="mx-auto mb-5"
      style={{
        maxWidth: "600px",
        background: "#ffffff",
        borderRadius: "1.5rem",
        boxShadow: "0 10px 30px rgba(176, 143, 210, 0.3)",
        color: "#6b21a8",
        padding: "2rem",
      }}
      onSubmit={id ? handleUpdate : handleSubmit}
    >
      <h1
        className="fw-bold mb-4 text-center"
        style={{
          color: "#6b21a8",
          textShadow: "0 0 10px rgba(107, 33, 168, 0.4)",
          letterSpacing: "1.5px",
        }}
      >
        {id ? "Actualizar Producto" : "Registrar Producto"}
      </h1>

      <div className="row g-3">
        <div className="col-md-12">
          <label
            className="form-label"
            htmlFor="name"
            style={{ color: "#6b21a8", fontWeight: "bold" }}
          >
            Nombre
          </label>
          <input
            className="form-control"
            style={{
              background: "#f5f0fa",
              color: "#4b0082",
              border: "1px solid #b38add",
              borderRadius: "0.75rem",
              boxShadow: "0 4px 12px rgba(179, 138, 221, 0.2)",
            }}
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="col-md-12">
          <label
            className="form-label"
            htmlFor="description"
            style={{ color: "#6b21a8", fontWeight: "bold" }}
          >
            Descripción
          </label>
          <textarea
            className="form-control"
            style={{
              background: "#f5f0fa",
              color: "#4b0082",
              border: "1px solid #b38add",
              borderRadius: "0.75rem",
              boxShadow: "0 4px 12px rgba(179, 138, 221, 0.2)",
            }}
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="col-md-6">
          <label
            className="form-label"
            htmlFor="price"
            style={{ color: "#6b21a8", fontWeight: "bold" }}
          >
            Precio
          </label>
          <input
            className="form-control"
            style={{
              background: "#f5f0fa",
              color: "#4b0082",
              border: "1px solid #b38add",
              borderRadius: "0.75rem",
              boxShadow: "0 4px 12px rgba(179, 138, 221, 0.2)",
            }}
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            min="0"
            required
          />
        </div>

        <div className="col-md-6">
          <label
            className="form-label"
            htmlFor="stock"
            style={{ color: "#6b21a8", fontWeight: "bold" }}
          >
            Stock
          </label>
          <input
            className="form-control"
            style={{
              background: "#f5f0fa",
              color: "#4b0082",
              border: "1px solid #b38add",
              borderRadius: "0.75rem",
              boxShadow: "0 4px 12px rgba(179, 138, 221, 0.2)",
            }}
            id="stock"
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            min="0"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="btn w-100 fw-bold mt-4"
        style={{
          background: "linear-gradient(135deg, #6b21a8, #9d4edd)",
          color: "#fff",
          border: "none",
          borderRadius: "1rem",
          boxShadow: "0 4px 16px rgba(157, 78, 221, 0.4)",
          letterSpacing: "1px",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 8px 32px rgba(157, 78, 221, 0.6)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 16px rgba(157, 78, 221, 0.4)";
        }}
      >
        {id ? "Actualizar" : "Registrar"}
      </button>
    </form>
  );
};

export default RegisterProducts;
