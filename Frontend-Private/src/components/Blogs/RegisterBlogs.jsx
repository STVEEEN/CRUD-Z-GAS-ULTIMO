import React from "react";

// Componente `RegisterBlogs` para registrar o actualizar un blog
const RegisterBlogs = ({
  id, // ID del blog en caso de actualización
  title, // Estado para el título del blog
  setTitle, // Función para actualizar el título
  content, // Estado para el contenido del blog
  setContent, // Función para actualizar el contenido
  image, // Estado para la imagen del blog
  setImage, // Función para actualizar la imagen
  handleSubmit, // Función para enviar un nuevo blog
  handleUpdate, // Función para actualizar un blog existente
}) => {
  return (
    <div 
      className="d-flex justify-content-center align-items-center"
      style={{
        padding: "2rem" // Espaciado externo
      }}
    >
      {/* Formulario para registrar o actualizar un blog */}
      <form
        className="mx-auto mb-5"
        style={{
          maxWidth: "600px", // Ancho máximo del formulario
          background: "white", // Fondo blanco
          border: "none", // Sin bordes
          borderRadius: "1.5rem", // Bordes redondeados
          boxShadow: "0 8px 32px rgba(149, 117, 205, 0.3)", // Sombra elegante
          color: "#6a1b9a", // Color del texto
          padding: "2rem", // Espaciado interno
        }}
        onSubmit={id ? handleUpdate : handleSubmit} // Decide si registrar o actualizar según `id`
        encType="multipart/form-data" // Permite enviar imágenes
      >
        {/* Título dinámico según si es actualización o registro */}
        <h1
          className="fw-bold mb-4 text-center"
          style={{
            color: "#6a1b9a",
            letterSpacing: "2px",
          }}
        >
          {id ? "Actualizar Blog" : "Registrar Blog"}
        </h1>

        {/* Campos del formulario */}
        <div className="row g-3">
          <div className="col-md-12">
            <label className="form-label" htmlFor="title" style={{ color: "#6a1b9a" }}>
              Título
            </label>
            <input
              className="form-control"
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                color: "#6a1b9a",
                border: "1px solid #9c27b0",
                borderRadius: "0.75rem",
              }}
              id="title"
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)} // Manejo del cambio de título
              required
            />
          </div>

          <div className="col-md-12">
            <label className="form-label" htmlFor="content" style={{ color: "#6a1b9a" }}>
              Contenido
            </label>
            <textarea
              className="form-control"
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                color: "#6a1b9a",
                border: "1px solid #9c27b0",
                borderRadius: "0.75rem",
              }}
              id="content"
              value={content}
              onChange={e => setContent(e.target.value)} // Manejo del cambio de contenido
              required
              rows={5}
            />
          </div>

          <div className="col-md-12">
            <label className="form-label" htmlFor="image" style={{ color: "#6a1b9a" }}>
              Imagen
            </label>
            <input
              className="form-control"
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                color: "#6a1b9a",
                border: "1px solid #9c27b0",
                borderRadius: "0.75rem",
              }}
              id="image"
              type="file"
              accept="image/*" // Solo permite imágenes
              onChange={e => setImage(e.target.files[0])} // Manejo de la imagen
            />
          </div>
        </div>

        {/* Botón para registrar o actualizar blog */}
        <button
          type="submit"
          className="btn w-100 fw-bold mt-4"
          style={{
            background: "linear-gradient(135deg, #6b21a8 0%, #9d4edd 100%)",
            color: "white",
            border: "none",
            borderRadius: "1rem",
            boxShadow: "0 4px 16px rgba(156, 39, 176, 0.2)",
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
    </div>
  );
};

// Exporta `RegisterBlogs` para su uso en otros componentes
export default RegisterBlogs;
