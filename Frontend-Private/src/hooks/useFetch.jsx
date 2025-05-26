import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Hook personalizado para manejar peticiones a un servidor.
const useFetch = () => {

  // URL base del servidor donde se realizarán las solicitudes.
  const SERVER_URL = 'http://localhost:4000/api';

  // Función asíncrona para realizar la autenticación de usuario.
  const useLogin = async (email, password) => {

    // Se envía una solicitud POST al endpoint '/login' con el email y contraseña.
    const response = await fetch(`${SERVER_URL}/login`, {
      method: 'POST', // Especifica que la solicitud será de tipo POST.
      headers: {
        'Content-Type': 'application/json', // Indica que se envían datos en formato JSON.
      },
      body: JSON.stringify({ email, password }), // Convierte los datos del usuario en JSON.
    });

    // Si la respuesta no es exitosa, se lanza un error indicando que hubo un problema en la autenticación.
    if (!response.ok) {
      throw new Error('Error en la autenticación');
    }

    // Se convierte la respuesta del servidor en formato JSON.
    const data = await response.json();

    // Se muestra un mensaje en una alerta con la respuesta del servidor.
    alert(data.message);

    // Se retorna el objeto de datos recibido.
    return data;
  };

  // Retorna la función useLogin para su uso en otros componentes.
  return { useLogin };
};

// Exporta el hook personalizado para que pueda ser utilizado en otros archivos.
export default useFetch;
