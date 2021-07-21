import { Router } from "express";
import { UserModule } from "../module/User";

export const UserRouter = Router();

UserRouter.post("/create",UserModule.CreateUser)




