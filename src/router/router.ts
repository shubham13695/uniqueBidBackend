import { Router } from "express";
import { ProductRouter } from "./product.router";
import { UploadModule } from "../module/Upload";
import { UserRouter } from "./user.router";
let uploadModule = new UploadModule();

export const router = Router();

router.use('/user',UserRouter);
router.use('/upload',uploadModule.upload);
router.use('/product',ProductRouter);
