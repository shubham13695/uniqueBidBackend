import { Router } from "express";
import { UserModule } from "../module/User";
import { LoginValidation, validate } from "./validation";
export const UserRouter = Router();

let _ = new UserModule();

UserRouter.post("/login",LoginValidation(),validate,_.login)




