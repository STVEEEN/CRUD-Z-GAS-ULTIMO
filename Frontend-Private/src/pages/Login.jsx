// Login.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Complete todos los campos para iniciar sesion.");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Las credenciales son incorrectas");
      }

      const data = await response.json();
      toast.success("Inicio de sesión exitoso");
      localStorage.setItem("authToken", data.token);
      document.cookie = `authToken=${data.token}; path=/; max-age=86400;`;
      navigate("/dashboard");
    } catch (error) {
      toast.error("Error al iniciar sesión: " + error.message);
    }
  };

  useEffect(() => {
    const miCookie = localStorage.getItem("authToken");
    console.log(miCookie, "cookie desde Login useEffect");
  }, []);

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(120deg, #f3e5f5 0%, #e1bee7 100%)",
        minHeight: "100vh",
      }}
    >
      <Toaster position="top-center" />
      <div
        className="card shadow-lg p-4"
        style={{
          width: "24rem",
          background: "white",
          border: "none",
          borderRadius: "1.5rem",
          boxShadow: "0 8px 32px 0 rgba(149, 117, 205, 0.3)",
          color: "#6a1b9a",
        }}
      >
        <h2
          className="text-center mb-4 fw-bold"
          style={{
            color: "#6a1b9a",
            letterSpacing: "2px",
          }}
        >
          Iniciar Sesión
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label" style={{ color: "#6a1b9a" }}>
              Correo Electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                color: "#6a1b9a",
                border: "1px solid #9c27b0",
                borderRadius: "0.75rem",
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label" style={{ color: "#6a1b9a" }}>
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                color: "#6a1b9a",
                border: "1px solid #9c27b0",
                borderRadius: "0.75rem",
              }}
            />
          </div>
          <button
            type="submit"
            className="btn w-100 fw-bold"
            style={{
              background: "linear-gradient(135deg,rgb(159, 59, 177) 0%,rgb(218, 139, 231) 100%)",
              color: "white",
              border: "none",
              borderRadius: "1rem",
              boxShadow: "0 4px 16px 0 rgba(156, 39, 176, 0.2)",
              textShadow: "0 0 8px #ffffff",
              letterSpacing: "1px",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 32px 0 rgba(156, 39, 176, 0.3)";
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 16px 0 rgba(156, 39, 176, 0.2)";
            }}
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;