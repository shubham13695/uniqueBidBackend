import { Router } from "express";
import { ProductModule } from "../module/Product";

export const ProductRouter = Router();

let _ = new ProductModule();

ProductRouter.post("/",_.create);
ProductRouter.get("/",_.get);



