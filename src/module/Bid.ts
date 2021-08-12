import { BidRepository } from "../Repository/Bid.repository";
import { Request, Response } from "express";

let bidRepository = new BidRepository();

export class BidModule {

    async create(req: Request, res: Response) {
        try {
            await bidRepository.create(
                {
                    productID:req.body.productID,
                    bidPrice:req.body.bidPrice,
                    userID:req.body.user._id
                }
            );
            return res.status(200).send({ data: true, msg: "Bid submitted sucessfully" });
        }
        catch (ex) {
            console.log(ex);
            return res.status(500).send({ error: "Something went wrong" });
        }
    }

    async getWinner(){

    }
}