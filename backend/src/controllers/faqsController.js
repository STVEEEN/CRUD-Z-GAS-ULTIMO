const faqsController = {};
import faqsModel from "../models/faqs.js";
 
faqsController.getFaqs = async (req, res) => {
 try {
     const faqs = await faqsModel.find()
     res.status(200).json(faqs)
 } catch (error) {
    console.log("Error: " + error)
    res.status(500).json({message : "Internal Server Error"})
 }
};
 
faqsController.postFaqs = async (req, res) => {
  const { question, answer, level, isActive } = req.body;
  try {
    if(!question || !answer || !level || !isActive){
        res.status(400).json({message : "Falta algún campo"})
    }
    if(level > 5 || level < 1){
        res.status(400).json({message : "Ingrese un nivel permitido"})
    }
 
    const newFaq = new faqsModel({question, answer, level, isActive})
    newFaq.save()
  } catch (error) {
    console.log("Error: " + error)
    res.status(400).json({message : "Error saving"})
  }
};
 
faqsController.deleteFaqs = async (req, res) => {
    try {
        const deletedFaq = await faqsModel.findByIdAndDelete(
            req.params.id
        )
        if(!deletedFaq){
            return res.status(400).json({message : "Faq not found"})
        }
        res.status(200).json({message : "Faq deleted successfully"})
    } catch (error) {
       console.log("Error: " + error)
       res.status(400).json({message : "Error"})
    }
};
 
faqsController.putFaqs = async (req, res) => {
 try {
    const {question, answer, level, isActive} = req.body
 
    if(!question || !answer || !level || !isActive){
        res.status(400).json({message : "Falta algún campo"})
    }
    if(level > 5 || level < 1){
        res.status(400).json({message : "Ingrese un nivel permitido"})
    }
 
    const updatedFaq = await faqsModel.findByIdAndUpdate(
        req.params.id,
        {question, answer, level, isActive},
        {new : true}
    )
 
    if(!updatedFaq){
        return res.status(404).json({message : "Faq not found"})
    }
 
    res.status(200).json("Faqs updated successfully")
 
 } catch (error) {
    console.log("Error: " + error)
    res.status(400).json({message : "Error updating"})
 }
};
 
export default faqsController;