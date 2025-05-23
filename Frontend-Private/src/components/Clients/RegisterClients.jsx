import React from "react";

const RegisterClients = ({
  id,
  name,
  setName,
  lastName,
  setLastName,
  birthday,
  setBirthday,
  email,
  setEmail,
  password,
  setPassword,
  telephone,
  setTelephone,
  dui,
  setDui,
  handleSubmit,
  handleUpdate,
}) => {
  return (
    <>
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
          {id ? "Actualizar Cliente" : "Registrar Cliente"}
        </h1>
        <div className="row g-3">
          {[
            ["name", "Nombre", name, setName],
            ["lastName", "Apellido", lastName, setLastName],
            ["email", "Email", email, setEmail],
            ["password", "Contraseña", password, setPassword],
            ["telephone", "Teléfono", telephone, setTelephone],
            ["dui", "DUI", dui, setDui],
            ["birthday", "Fecha de nacimiento", birthday, setBirthday, "date"],
          ].map(([idField, label, value, setter, type = "text"], idx) => (
            <div className="col-md-6" key={idField}>
              <label
                className="form-label"
                htmlFor={idField}
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
                }}
                id={idField}
                type={type}
                value={value}
                onChange={e => setter(e.target.value)}
                required={idField !== "password" || !id}
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
          onMouseOver={e => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 8px 32px rgba(157, 78, 221, 0.6)";
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 16px rgba(157, 78, 221, 0.4)";
          }}
        >
          {id ? "Actualizar" : "Registrar"}
        </button>
      </form>
    </>
  );
};

export default RegisterClients;
