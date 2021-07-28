import { Router } from "express";
import { UserRouter } from "./userRouter";

export const router = Router();

router.use('/user',UserRouter);
