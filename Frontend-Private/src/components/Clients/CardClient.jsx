import React from "react";
import Button from "../Button";

const CardClient = ({ client, deleteClient, updateClient }) => {
  if (!client) {
    return <div className="text-center" style={{ color: "#9575cd" }}>Loading...</div>;
  }

  return (
    <div
      className="card shadow-lg mb-4"
      style={{
        background: "white",
        border: "none",
        borderRadius: "1.5rem",
        boxShadow: "0 8px 32px 0 rgba(149, 117, 205, 0.3)",
        color: "#6a1b9a",
        padding: "2rem",
        maxWidth: "400px",
        margin: "auto",
      }}
    >
      <h2
        className="fw-bold mb-3 text-center"
        style={{
          color: "#6a1b9a",
          letterSpacing: "2px",
        }}
      >
        {client.name} {client.lastName}
      </h2>
      
      <p style={{ color: "#6a1b9a" }}>
        <span className="fw-semibold">Email:</span> {client.email}
      </p>
      <p style={{ color: "#6a1b9a" }}>
        <span className="fw-semibold">Teléfono:</span> {client.telephone}
      </p>
      <p style={{ color: "#6a1b9a" }}>
        <span className="fw-semibold">DUI:</span> {client.dui}
      </p>
      <p style={{ color: "#6a1b9a" }}>
        <span className="fw-semibold">Fecha de nacimiento:</span>{" "}
        {new Date(client.birthday).toLocaleDateString()}
      </p>
      <p style={{ color: "#6a1b9a" }}>
        <span className="fw-semibold">ID:</span> {client._id}
      </p>

      <div className="d-flex justify-content-center gap-3 mt-3">
        <Button 
          label={"Eliminar"}
          actionButton={() => deleteClient(client._id)}
          style={{
            background: "linear-gradient(135deg, #d32f2f 0%, #f44336 100%)",
            color: "white",
            border: "none",
            borderRadius: "0.75rem",
            padding: "0.5rem 1.5rem",
            boxShadow: "0 2px 8px rgba(211, 47, 47, 0.3)"
          }}
        />
        <Button 
          label={"Editar"}
          actionButton={() => updateClient(client)}
          style={{
            background: "linear-gradient(135deg, #7b1fa2 0%, #9c27b0 100%)",
            color: "white",
            border: "none",
            borderRadius: "0.75rem",
            padding: "0.5rem 1.5rem",
            boxShadow: "0 2px 8px rgba(156, 39, 176, 0.3)"
          }}
        />
      </div>
    </div>
  );
};

export default CardClient;