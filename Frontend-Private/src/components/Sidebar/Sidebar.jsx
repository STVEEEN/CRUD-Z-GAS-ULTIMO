import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        <h2>TAMBOS</h2>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Productos
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/branches" 
              className={({ isActive }) => 
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Branches
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/blog" 
              className={({ isActive }) => 
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;