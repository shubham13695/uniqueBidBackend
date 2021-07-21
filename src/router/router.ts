import { Router } from "express";
import { TollRouter } from "./tollRouter";
import { UserRouter } from "./userRouter";

export const router = Router();

router.use('/toll',TollRouter);
router.use('/user',UserRouter);
