import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        <img src="placeholder.png" alt="Logo" className="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/MainScreen" activeClassName="active">Productos</NavLink>
          </li>
          <li>
            <NavLink to="/sales" activeClassName="active">Ventas</NavLink>
          </li>
          <li>
            <NavLink to="/reports" activeClassName="active">Reportes</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
