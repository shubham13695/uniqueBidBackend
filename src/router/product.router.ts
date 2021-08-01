import { Router } from "express";
import { ProductModule } from "../module/Upload";
// import { UserModule } from "../module/User";
import { validate } from "./validation";
export const ProductRouter = Router();

let productModule = new ProductModule();

ProductRouter.post("/",productModule.upload);
ProductRouter.get("/",validate);





