export const fetchData = async (endPoint, form = null, action = null) => {

  // Si la acción es 'PUT' o 'DELETE' y el objeto form tiene un 'id',
  // entonces se concatena el 'id' al endpoint para dirigir la solicitud a un recurso específico.
  if ((action === 'PUT' || action === 'DELETE') && form?.id) {
    endPoint = `${endPoint}/${form.id}`;
  }

  // Se configura el objeto OPTIONS con los detalles de la solicitud.
  const OPTIONS = {
    // Define el método HTTP, validando que sea una acción permitida.
    method: ['POST', 'PUT', 'DELETE'].includes(action) ? action : 'GET',
    headers: {
      'Content-Type': 'application/json', // Indica que el cuerpo de la petición se enviará en formato JSON.
      'Accept': 'application/json', // Indica que se espera recibir una respuesta en formato JSON.
    },
    // Si la acción es 'POST' o 'PUT', se añade el cuerpo de la petición con los datos del formulario.
    ...(form && ['POST', 'PUT'].includes(action) && { body: JSON.stringify(form) })
  };

  try {
    // Construcción de la URL completa combinando SERVER_URL con el endpoint especificado.
    const PATH = new URL(SERVER_URL + endPoint);
    
    // Se realiza la solicitud HTTP utilizando fetch y las opciones configuradas.
    const RESPONSE = await fetch(PATH.href, OPTIONS);

    // Si la respuesta no es exitosa, se lanza un error con el código de estado HTTP.
    if (!RESPONSE.ok) {
      throw new Error(`HTTP error! status: ${RESPONSE.status}`);
    }

    // Se convierte la respuesta en formato JSON y se almacena en DATA.
    const DATA = await RESPONSE.json();
    
    // Se imprime la respuesta en consola para depuración.
    console.log('RESPONSE', DATA);

    // Se devuelve la respuesta obtenida.
    return DATA;

  } catch (error) {
    // Captura y muestra errores en la consola.
    console.error('Fetch error:', error);
    
    // Se relanza el error para que sea manejado externamente si es necesario.
    throw error;
  }
};
