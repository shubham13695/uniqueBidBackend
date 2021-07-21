import { Router } from "express";
import { TollModule } from "../module/Toll";
import { GenerateTollRecieptValidation,validate } from "./validation";
export const TollRouter = Router();

TollRouter.post('/create',GenerateTollRecieptValidation(),validate, TollModule.create);
TollRouter.get('/validate', TollModule.validateTwoWayTicket);


