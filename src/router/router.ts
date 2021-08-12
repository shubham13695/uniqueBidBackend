import { Router } from "express";
import { ProductRouter } from "./product.router";
import { UploadModule } from "../module/Upload";
import { UserRouter } from "./user.router";
import { BidRouter } from "./bid.router";
import { authenticateJWT } from "../middleware/auth";
let uploadModule = new UploadModule();

export const router = Router();

router.use('/user',UserRouter);
router.use('/upload',authenticateJWT,uploadModule.upload);
router.use('/product',ProductRouter);
router.use('/bid',BidRouter);
