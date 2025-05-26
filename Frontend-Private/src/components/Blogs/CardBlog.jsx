import React, { useState } from "react";
import Button from "../Button";

const CardBlog = ({ blog, deleteBlog, updateBlog }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Manejar la eliminación del blog con validaciones
  const handleDelete = async () => {
    if (!blog?._id) {
      console.error("ID de blog no válido:", blog?._id);
      return;
    }

    try {
      setIsDeleting(true);
      await deleteBlog(blog._id);
    } catch (error) {
      console.error("Error en CardBlog al eliminar:", error);
      // El toast de error ya se maneja en deleteBlog
    } finally {
      setIsDeleting(false);
    }
  };

  if (!blog) {
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
      <h2 className="fw-bold mb-3 text-center" style={{ color: "#6a1b9a", letterSpacing: "2px" }}>
        {blog.title}
      </h2>

      {blog.image && (
        <div className="text-center mb-3">
          <img
            src={blog.image}
            alt={blog.title}
            style={{
              maxWidth: "100%",
              maxHeight: "200px",
              borderRadius: "1rem",
              boxShadow: "0 2px 8px 0 rgba(156, 39, 176, 0.15)",
              objectFit: "cover",
            }}
          />
        </div>
      )}

      <p style={{ color: "#6a1b9a" }}>
        <span className="fw-semibold">Contenido:</span> {blog.content}
      </p>

      <p style={{ color: "#6a1b9a" }}>
        <span className="fw-semibold">ID:</span> {blog._id}
      </p>

      <div className="d-flex justify-content-center gap-3 mt-3">
        <Button
          label={isDeleting ? "Eliminando..." : "Eliminar"}
          actionButton={handleDelete}
          disabled={isDeleting}
          style={{
            background: isDeleting 
              ? "linear-gradient(135deg, #b71c1c 0%, #d32f2f 100%)" 
              : "linear-gradient(135deg, #d32f2f 0%, #f44336 100%)",
            color: "white",
            border: "none",
            borderRadius: "0.75rem",
            padding: "0.5rem 1.5rem",
            opacity: isDeleting ? 0.7 : 1,
            cursor: isDeleting ? "not-allowed" : "pointer",
          }}
        />

        <Button
          label={"Editar"}
          actionButton={() => updateBlog(blog)}
          disabled={isDeleting}
          style={{
            background: "linear-gradient(135deg, #7b1fa2 0%, #9c27b0 100%)",
            color: "white",
            border: "none",
            borderRadius: "0.75rem",
            padding: "0.5rem 1.5rem",
            opacity: isDeleting ? 0.5 : 1,
          }}
        />
      </div>
    </div>
  );
};

export default CardBlog;