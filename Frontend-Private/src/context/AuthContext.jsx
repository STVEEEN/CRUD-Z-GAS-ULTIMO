import React from "react";
import { createContext, useContext, useState, useEffect } from "react";

const SERVER_URL = "http://localhost:4000/api"; // URL base del servidor

// Creación del contexto de autenticación
const AuthContext = createContext();

// Proveedor de autenticación que gestiona el estado del usuario y las funciones de login/logout
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado para almacenar los datos del usuario autenticado
  const [authCokie, setAuthCokie] = useState(null); // Estado para manejar el token de autenticación

  // Función para iniciar sesión del usuario
  const Login = async (email, password) => {
    try {
      // Envío de solicitud POST al servidor con credenciales del usuario
      const response = await fetch(`${SERVER_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      // Manejo de errores si la autenticación falla
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error en la autenticación");
      }

      const data = await response.json();
      
      // Guarda el token de autenticación y datos del usuario en localStorage
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("user", JSON.stringify({ email }));
      
      // Actualiza los estados de autenticación
      setAuthCokie(data.token);
      setUser({ email });

      return { success: true, message: data.message };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  // Función para cerrar sesión del usuario
  const logout = async () => {
    // Elimina el token y los datos del usuario de localStorage
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    
    // Restablece los estados de autenticación
    setAuthCokie(null);
    setUser(null);
  };

  // Verificación automática del estado de autenticación cuando el componente se monta
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const savedUser = localStorage.getItem("user");

    if (token) {
      setAuthCokie(token);
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    }
  }, []);

  // Proporciona el contexto de autenticación a los componentes hijos
  return (
    <AuthContext.Provider value={{ user, Login, logout, authCokie, setAuthCokie }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para acceder al contexto de autenticación desde otros componentes
export const useAuth = () => useContext(AuthContext);

// Función para iniciar sesión (puedes integrar esto en `AuthProvider`)
const useLogin = async (email, password) => {
  try {
    // Envío de solicitud de inicio de sesión al servidor
    const response = await fetch(`${SERVER_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    // Manejo de errores en la autenticación
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error en la autenticación");
    }

    const data = await response.json();
    setUser({ email }); // Se actualiza el estado del usuario con los datos recibidos

    return { success: true, message: data.message };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// Función para verificar si existen empleados en la base de datos
const checkEmployeesExist = async () => {
  try {
    const response = await fetch("http://localhost:4000/api/employees");
    const data = await response.json();

    // Verifica si el arreglo de empleados no está vacío
    if (response.ok && Array.isArray(data) && data.length > 0) {
      setUsersExist(true);
    } else {
      setUsersExist(false);
    }

    setLoading(false);
  } catch (error) {
    console.error("Error al verificar empleados:", error);
    setLoading(false);
  }
};
