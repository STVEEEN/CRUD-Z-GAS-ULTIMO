import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

// Definición de las URLs para la API de blogs
const ApiRegister = "http://localhost:4000/api/blog";
const ApiBlogs = "http://localhost:4000/api/blog";

// Hook personalizado para manejar los datos de los blogs
const useDataBlogs = () => {
  const [activeTab, setActiveTab] = useState("list"); // Estado para gestionar la pestaña activa
  const [id, setId] = useState(""); // Estado para el identificador del blog
  const [title, setTitle] = useState(""); // Estado para el título del blog
  const [content, setContent] = useState(""); // Estado para el contenido del blog
  const [image, setImage] = useState(null); // Estado para la imagen del blog
  const [errorBlog, setError] = useState(null); // Estado para manejar errores
  const [success, setSuccess] = useState(null); // Estado para manejar mensajes de éxito
  const [loading, setLoading] = useState(false); // Estado para mostrar estado de carga
  const [blogs, setBlogs] = useState([]); // Estado para almacenar la lista de blogs

  // Función para limpiar los estados del formulario
  const cleanData = () => {
    setTitle("");
    setContent("");
    setImage(null);
    setId("");
  };

  // Registrar un nuevo blog
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      setError("Todos los campos son obligatorios");
      toast.error("Todos los campos son obligatorios");
      return;
    }

    try {
      setLoading(true);

      // Creación de `formData` para enviar los datos del blog
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      if (image) formData.append("image", image);

      // Envío de datos al servidor
      const response = await fetch(ApiRegister, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Hubo un error al registrar el blog");
      }

      // Mensajes de éxito
      toast.success("Blog registrado");
      setSuccess("Blog registrado correctamente");
      cleanData();
      fetchData(); // Se vuelve a obtener la lista de blogs
    } catch (error) {
      setError(error.message);
      toast.error("Ocurrió un error al registrar el blog");
    } finally {
      setLoading(false);
    }
  };

  // Obtener blogs desde el servidor
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(ApiBlogs);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setBlogs(data); // Se actualiza el estado con los blogs obtenidos
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Llamar `fetchData` al montar el componente
  useEffect(() => {
    fetchData();
  }, []);

  // Eliminar un blog por su ID
  const deleteBlog = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`${ApiBlogs}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete blog");
      }

      toast.success("Blog eliminado");
      fetchData(); // Se actualiza la lista de blogs
    } catch (error) {
      console.error("Error deleting blog:", error);
    } finally {
      setLoading(false);
    }
  };

  // Cargar datos de un blog para edición
  const updateBlog = (dataBlog) => {
    setId(dataBlog._id);
    setTitle(dataBlog.title);
    setContent(dataBlog.content);
    setImage(null); // Se evita cargar la imagen existente
    setError(null);
    setSuccess(null);
    setActiveTab("form"); // Cambia la pestaña a edición
  };

  // Actualizar un blog existente
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Creación de `formData` para actualizar el blog
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      if (image) formData.append("image", image);

      // Petición `PUT` para actualizar el blog en el servidor
      const response = await fetch(`http://localhost:4000/api/blog/${id}`, {
        method: "PUT",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el blog");
      }

      // Mensajes de éxito
      toast.success("Blog actualizado");
      setSuccess("Blog actualizado correctamente");
      cleanData();
      setId("");
      setActiveTab("list"); // Se vuelve a la lista de blogs
      fetchData(); // Se actualiza la lista de blogs
    } catch (error) {
      setError(error.message);
      toast.error("Error al actualizar el blog");
    } finally {
      setLoading(false);
    }
  };

  return {
    activeTab,
    setActiveTab,
    id,
    setId,
    title,
    setTitle,
    content,
    setContent,
    image,
    setImage,
    errorBlog,
    setError,
    success,
    setSuccess,
    loading,
    setLoading,
    blogs,
    setBlogs,
    cleanData,
    handleSubmit,
    fetchData,
    deleteBlog,
    updateBlog,
    handleUpdate,
  };
};

export default useDataBlogs;
