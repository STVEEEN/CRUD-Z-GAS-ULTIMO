import React from "react";

const CardDashboard = ({ label, data, icon }) => {
  // Definimos los estilos base
  const baseStyles = {
    border: "none",
    borderRadius: "1.5rem",
    boxShadow: "0 4px 20px rgba(149, 117, 205, 0.2)",
    transition: "all 0.3s ease",
    textAlign: "center",
    padding: "1.5rem",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
  };

  // Estilos según el tipo de tarjeta
  let cardStyle = {};
  let textColor = "#6a1b9a"; // Color morado oscuro base

  switch (label) {
    case "Empleados":
      cardStyle = {
        background: "linear-gradient(135deg, #f3e5f5 0%, #ce93d8 100%)",
      };
      break;
    case "Clientes":
      cardStyle = {
        background: "linear-gradient(135deg, #e1bee7 0%, #ba68c8 100%)",
      };
      break;
    case "Blogs":
      cardStyle = {
        background: "linear-gradient(135deg, #d1c4e9 0%, #9575cd 100%)",
      };
      break;
    case "Productos":
      cardStyle = {
        background: "linear-gradient(135deg, #b39ddb 0%, #7e57c2 100%)",
      };
      break;
    default:
      cardStyle = {
        background: "linear-gradient(135deg, #f3e5f5 0%, #b39ddb 100%)",
      };
  }

  return (
    <div
      style={{
        ...baseStyles,
        ...cardStyle,
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 8px 25px rgba(149, 117, 205, 0.3)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(149, 117, 205, 0.2)";
      }}
    >
      {icon && <div className="fs-1 mb-3" style={{ color: textColor }}>{icon}</div>}
      <h2 
        className="text-xl fw-bold mb-2" 
        style={{ 
          color: textColor,
          letterSpacing: "1px"
        }}
      >
        {label}
      </h2>
      <p 
        className="display-6 fw-bold mt-4" 
        style={{ 
          color: textColor,
          textShadow: "0 2px 4px rgba(106, 27, 154, 0.2)"
        }}
      >
        {data}
      </p>
    </div>
  );
};

export default CardDashboard;