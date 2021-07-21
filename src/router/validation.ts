import { body, validationResult } from "express-validator";
import { Request, Response,NextFunction } from "express";

export const GenerateTollRecieptValidation = () => [
    body('vehicleNo').exists().withMessage("Vehicle No is requred").isAlphanumeric().isLength({ min: 5,max:12 }).withMessage("Please Enter Valid Vehicle Number"),
    body('way').exists().withMessage("Please specify type of toll").isString().withMessage("Please specify type of toll")
]


export const CreateUserValidation = () => [
  body('vehicleNo').exists().withMessage("Vehicle No is requred").isAlphanumeric().isLength({ min: 5,max:12 }).withMessage("Please Enter Valid Vehicle Number"),
  body('way').exists().withMessage("Please specify type of toll").isString().withMessage("Please specify type of toll")
]

export const validate = (req:Request,res:Response,next:NextFunction) =>{
  const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next()
    }
    const extractedErrors:any[] = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
  
    return res.status(422).json({
      validationError: extractedErrors,
    })
}




