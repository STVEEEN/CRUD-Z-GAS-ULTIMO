import React from "react";
import CardBlog from "./CardBlog";

// Componente `ListBlogs` que muestra la lista de blogs y permite gestionar eliminaciones y ediciones
const ListBlogs = ({ deleteBlog, updateBlog, loading, blogs }) => {
  return (
    <>
      {/* Título de la lista de blogs */}
      <h1 className="text-2xl font-bold underline text-center">
        Listado de blogs
      </h1>

      {/* Contenedor de los blogs con diseño flexible */}
      <div className="flex flex-wrap gap-4 justify-center mt-5">

        {/* Mensaje de carga si `loading` está activo */}
        {loading && <div className="text-center text-gray-500">Loading...</div>}

        {/* Renderiza cada blog con el componente `CardBlog` */}
        {blogs?.map((blog) => (
          <CardBlog
            key={blog._id} // Clave única para cada blog
            blog={blog} // Propiedades del blog
            deleteBlog={deleteBlog} // Función para eliminar el blog
            updateBlog={updateBlog} // Función para editar el blog
          />
        ))}
      </div>
    </>
  );
};

// Exporta `ListBlogs` para que pueda ser usado en otros componentes
export default ListBlogs;
