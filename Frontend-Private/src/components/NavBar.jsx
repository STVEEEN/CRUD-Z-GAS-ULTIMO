import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { logout, authCokie } = useAuth();
 
    const isActive = (path) => {
        return location.pathname.includes(path);
    };
 
    const handleLogout = async () => {
        await fetch('http://localhost:4000/api/logout', {
            method: 'POST',
            credentials: 'include'
        });
        logout();
        navigate('/');
    };
 
  // Si no hay sesión, no mostrar el NavBar
  if (!authCokie) return null;

  return (
    <nav
      className="shadow"
      style={{
        background: "white",
        borderBottom: "1px solid #e1bee7",
        boxShadow: "0 2px 16px 0 rgba(149, 117, 205, 0.1)",
      }}
    >
      <div className="container mx-auto px-4 py-3 d-flex justify-content-between align-items-center">
        <div
          className="fs-4 fw-bold"
          style={{ color: "#6a1b9a" }}
        >
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "text-decoration-none fw-bold" : "text-decoration-none"
            }
            style={({ isActive }) => ({
              color: isActive ? "#6a1b9a" : "#9575cd",
              letterSpacing: "2px",
              transition: "color 0.2s",
            })}
          >
            Z-GAS Administrativo
          </NavLink>
        </div>
        <ul className="d-flex gap-4 mb-0" style={{ listStyle: "none" }}>
          <li>
            <NavLink
              to="/blogs"
              className="text-decoration-none"
              style={({ isActive }) => ({
                color: isActive ? "#6a1b9a" : "#9575cd",
                fontWeight: isActive ? "bold" : "normal",
                transition: "color 0.2s",
                letterSpacing: "1px",
                padding: "0.5rem 0",
                borderBottom: isActive ? "2px solid #9c27b0" : "none"
              })}
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/clients"
              className="text-decoration-none"
              style={({ isActive }) => ({
                color: isActive ? "#6a1b9a" : "#9575cd",
                fontWeight: isActive ? "bold" : "normal",
                transition: "color 0.2s",
                letterSpacing: "1px",
                padding: "0.5rem 0",
                borderBottom: isActive ? "2px solid #9c27b0" : "none"
              })}
            >
              Clientes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/employees"
              className="text-decoration-none"
              style={({ isActive }) => ({
                color: isActive ? "#6a1b9a" : "#9575cd",
                fontWeight: isActive ? "bold" : "normal",
                transition: "color 0.2s",
                letterSpacing: "1px",
                padding: "0.5rem 0",
                borderBottom: isActive ? "2px solid #9c27b0" : "none"
              })}
            >
              Empleados
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="text-decoration-none"
              style={({ isActive }) => ({
                color: isActive ? "#6a1b9a" : "#9575cd",
                fontWeight: isActive ? "bold" : "normal",
                transition: "color 0.2s",
                letterSpacing: "1px",
                padding: "0.5rem 0",
                borderBottom: isActive ? "2px solid #9c27b0" : "none"
              })}
            >
              Productos
            </NavLink>
          </li>
        </ul>
        <div>
          <button
            onClick={handleLogout}
            className="fw-bold"
            style={{
              background: "linear-gradient(135deg, #9c27b0 0%, #e1bee7 100%)",
              color: "white",
              border: "none",
              borderRadius: "1rem",
              boxShadow: "0 4px 16px 0 rgba(156, 39, 176, 0.2)",
              letterSpacing: "1px",
              padding: "0.5rem 2rem",
              transition: "transform 0.2s, box-shadow 0.2s",
              cursor: "pointer"
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
            Cerrar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;