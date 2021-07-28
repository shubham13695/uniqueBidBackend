import { body, validationResult } from "express-validator";
import { Request, Response,NextFunction } from "express";

export const LoginValidation = () => [
  body('email').exists().withMessage("Please provide valid Email").isEmail().withMessage("Please provide valid Email")
]

export const validate = (req:Request,res:Response,next:NextFunction) =>{
  const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    const extractedErrors:any[] = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
  
    return res.status(422).json({
      validationError: extractedErrors,
    })
}




