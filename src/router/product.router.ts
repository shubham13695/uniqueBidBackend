import { Router } from "express";
import { authenticateJWT } from "../middleware/auth";
import { ProductModule } from "../module/Product";

export const ProductRouter = Router();

let _ = new ProductModule();

ProductRouter.post("/",authenticateJWT,_.create);
ProductRouter.get("/",_.get);



