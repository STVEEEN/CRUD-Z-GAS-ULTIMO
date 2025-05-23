import React from "react";
import Button from "../Button";

// Componente `CardBlog` para mostrar la información de un blog individual
const CardBlog = ({ blog, deleteBlog, updateBlog }) => {
  
  // Si no hay datos de blog, muestra un mensaje de carga
  if (!blog) {
    return <div className="text-center" style={{ color: "#9575cd" }}>Loading...</div>;
  }

  return (
    <div
      className="card shadow-lg mb-4"
      style={{
        background: "white", // Fondo blanco
        border: "none", // Sin bordes
        borderRadius: "1.5rem", // Bordes redondeados
        boxShadow: "0 8px 32px 0 rgba(149, 117, 205, 0.3)", // Sombra elegante
        color: "#6a1b9a", // Color del texto
        padding: "2rem", // Espaciado interno
        maxWidth: "400px", // Ancho máximo de la tarjeta
        margin: "auto", // Centrar la tarjeta
      }}
    >
      {/* Título del blog */}
      <h2
        className="fw-bold mb-3 text-center"
        style={{
          color: "#6a1b9a", // Color púrpura oscuro
          letterSpacing: "2px", // Espaciado entre letras
        }}
      >
        {blog.title}
      </h2>

      {/* Mostrar imagen si existe */}
      {blog.image && (
        <div className="text-center mb-3">
          <img
            src={blog.image} // Fuente de la imagen
            alt={blog.title} // Texto alternativo
            style={{
              maxWidth: "100%", // Ajustar imagen al contenedor
              maxHeight: "200px", // Altura máxima
              borderRadius: "1rem", // Bordes redondeados
              boxShadow: "0 2px 8px 0 rgba(156, 39, 176, 0.15)", // Sombra suave
              objectFit: "cover", // Ajustar imagen sin distorsión
            }}
          />
        </div>
      )}

      {/* Contenido del blog */}
      <p style={{ color: "#6a1b9a" }}>
        <span className="fw-semibold">Contenido:</span> {blog.content}
      </p>

      {/* Identificador del blog */}
      <p style={{ color: "#6a1b9a" }}>
        <span className="fw-semibold">ID:</span> {blog._id}
      </p>

      {/* Botones de acción */}
      <div className="d-flex justify-content-center gap-3 mt-3">
        {/* Botón para eliminar el blog */}
        <Button
          label={"Eliminar"}
          actionButton={() => deleteBlog(blog._id)}
          style={{
            background: "linear-gradient(135deg, #d32f2f 0%, #f44336 100%)", // Fondo rojo degradado
            color: "white", // Texto blanco
            border: "none", // Sin bordes
            borderRadius: "0.75rem", // Bordes redondeados
            padding: "0.5rem 1.5rem", // Espaciado interno
          }}
        />

        {/* Botón para editar el blog */}
        <Button
          label={"Editar"}
          actionButton={() => updateBlog(blog)}
          style={{
            background: "linear-gradient(135deg, #7b1fa2 0%, #9c27b0 100%)", // Fondo púrpura degradado
            color: "white", // Texto blanco
            border: "none", // Sin bordes
            borderRadius: "0.75rem", // Bordes redondeados
            padding: "0.5rem 1.5rem", // Espaciado interno
          }}
        />
      </div>
    </div>
  );
};

// Exportar `CardBlog` para su uso en otros componentes
export default CardBlog;
