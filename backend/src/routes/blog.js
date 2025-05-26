import express from "express";
import multer from "multer";
import blogController from "../controllers/blogController.js";

const router = express.Router();

//configurar una carpeta local que guarde las imagenes
const upload = multer({dest: "public/"})

router
  .route("/")
  .get(blogController.getAllBlog)
  .post(upload.single("image"), blogController.createBlog);

  router
  .route("/:id")
  .delete(blogController.deleteBlog)
  .put(upload.single("image"), blogController.updateBlog)

export default router;
