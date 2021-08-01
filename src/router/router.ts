import { Router } from "express";
import { ProductRouter } from "./product.router";

import { UserRouter } from "./user.router";

export const router = Router();

router.use('/user',UserRouter);
router.use('/upload',ProductRouter);
