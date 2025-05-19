import jsonwebtoken from "jsonwebtoken"
import { config } from "../config.js";

export const validateAuthToken = (allowedUserTypes = []) => {
    return (req, res, next) => {
    try {

        //1- Extraer el token de las cookies
        const { authToken } = req.cookies;

        //2- validar si existen las cookies
        if(!authToken){
            return res.json({mssage: "message not found, you must login"})
        }

        //3- Extraemos la informacion del token
        const decoded = jsonwebtoken.verify(authToken, config.JWT.secret)

        req.user = decoded;

        //4. Verificar el tipo de ususario si puede ingresar o no

        if(allowedUserTypes.includes(decoded.userType)){
            return res.json({message: "Access denied"})
        }

        next();
        
    } catch (error) {
        console.log("error"+error)
    }
  }
}

export default validateAuthToken;