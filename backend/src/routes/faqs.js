import express from "express"
import faqsController from "../controllers/faqsController.js"

const router = express.Router();

router.route("/")
.get(faqsController.getFaqs)
.post(faqsController.postFaqs);

router.route("/:id")
.put(faqsController.putFaqs)
.delete(faqsController.deleteFaqs);

export default router;