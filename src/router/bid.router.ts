import { Router } from "express";
import { authenticateJWT } from "../middleware/auth";
import { BidModule } from "../module/Bid";


export const BidRouter = Router();
let _ = new BidModule();

BidRouter.post("/",authenticateJWT,_.create);
BidRouter.get("/winner",authenticateJWT,_.getWinner);


