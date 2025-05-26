import blogModel from "../models/blog.js";
import { v2 as cloudinary } from "cloudinary";

import { config } from "../config.js";

//1- Configurar cloudinary
cloudinary.config({
  cloud_name: config.cloudinary.cloudinary_name,
  api_key: config.cloudinary.cloudinary_api_key,
  api_secret: config.cloudinary.cloudinary_api_secret,
});

// Array de funciones vacio
const blogController = {};

//Select
blogController.getAllBlog = async (req, res) => {
  const blogs = await blogModel.find();
  res.json(blogs);
};

// Borrar
blogController.deleteBlog = async (req, res) => {
  try {
    // Verifica que el ID sea válido
    if (!req.params.id || req.params.id.length !== 24) {
      return res.status(400).json({ 
        success: false,
        message: "ID no válido" 
      });
    }

    console.log(`Eliminando blog con ID: ${req.params.id}`);
    
    const deletedBlog = await blogModel.findByIdAndDelete(req.params.id);
    
    if (!deletedBlog) {
      return res.status(404).json({ 
        success: false,
        message: "Blog no encontrado" 
      });
    }
    
    // Elimina la imagen asociada a cloudinary
    if (deletedBlog.image) {
      const publicId = deletedBlog.image.split('/').pop().split('.')[0];
      await cloudinary.uploader.destroy(`public/${publicId}`);
    }
    
    res.status(200).json({ 
      success: true,
      message: "Blog eliminado correctamente",
      data: deletedBlog
    });
    
  } catch (error) {
    console.error(`Error al eliminar blog: ${error.message}`);
    res.status(500).json({ 
      success: false,
      message: "Error interno del servidor",
      error: error.message
    });
  }
};

//Guardar
blogController.createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    let imageUrl = "";

    if (req.file) {
      //Subir el archivo a Cloudinary
      const result = await cloudinary.uploader.upload(
        req.file.path, 
        {
        folder: "public",
        allowed_formats: ["jpg", "png", "jpeg", "webp"],
        });
      imageUrl = result.secure_url;
    }

    const newBlog = new blogModel({ title, content, image: imageUrl });
    newBlog.save();

    res.json({ newBlog});
  } catch (error) {
    console.log("error" + error);
  }
};

blogController.updateBlog = async (req, res) => {
  try {
    console.log("Received data:", req.body); // Verifica que el backend recibe los datos correctos

    const { title, content } = req.body;
    let imageUrl = "";

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "public",
        allowed_formats: ["jpg", "png", "jpeg"],
      });
      imageUrl = result.secure_url;
    }

    const updatedBlog = await blogModel.findByIdAndUpdate(
      req.params.id,
      { title, content, image: imageUrl || undefined },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json({ message: "Blog updated", updatedBlog });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "An error occurred while updating the blog" });
  }
};


export default blogController;
