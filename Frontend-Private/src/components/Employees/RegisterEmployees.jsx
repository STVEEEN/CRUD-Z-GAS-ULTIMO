import React from "react";

const RegisterEmployees = ({
  id,
  name,
  setName,
  lastName,
  setLastName,
  email,
  setEmail,
  password,
  setPassword,
  telephone,
  setTelephone,
  dui,
  setDui,
  address,
  setAddress,
  birthdate,
  setBirthdate,
  hireDate,
  setHireDate,
  isssNumber,
  setIsssNumber,
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
        {id ? "Actualizar Empleado" : "Registrar Empleado"}
      </h1>

      <div className="row g-3">
        {[
          { label: "Nombre", id: "name", value: name, setter: setName, type: "text" },
          { label: "Apellido", id: "lastName", value: lastName, setter: setLastName, type: "text" },
          { label: "Email", id: "email", value: email, setter: setEmail, type: "email" },
          { label: "Contraseña", id: "password", value: password, setter: setPassword, type: "password", required: !id },
          { label: "Teléfono", id: "telephone", value: telephone, setter: setTelephone, type: "text" },
          { label: "DUI", id: "dui", value: dui, setter: setDui, type: "text" },
          { label: "Dirección", id: "address", value: address, setter: setAddress, type: "text", full: true },
          { label: "Fecha de nacimiento", id: "birthdate", value: birthdate, setter: setBirthdate, type: "date" },
          { label: "Fecha de contratación", id: "hireDate", value: hireDate, setter: setHireDate, type: "date" },
          { label: "Número ISSS", id: "isssNumber", value: isssNumber, setter: setIsssNumber, type: "text", full: true },
        ].map(({ label, id, value, setter, type, full, required = true }) => (
          <div key={id} className={full ? "col-md-12" : "col-md-6"}>
            <label
              className="form-label"
              htmlFor={id}
              style={{ color: "#6b21a8", fontWeight: "bold" }}
            >
              {label}
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
              id={id}
              type={type}
              value={value}
              onChange={(e) => setter(e.target.value)}
              required={required}
            />
          </div>
        ))}
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

export default RegisterEmployees;
