import { BidRepository } from "../Repository/Bid.repository";
import { Request, Response } from "express";
import { ProductRepository } from "../Repository/Product.respository";
import { UserRepository } from "../Repository/User.repository";

let bidRepository = new BidRepository();
let productRepository = new ProductRepository();
let userRepository = new UserRepository();
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

    async getWinner(req: Request, res: Response){
        try {
            let productID = req.query.productID ? req.query.productID : '';
            let product = await productRepository.findOne({_id:productID});
            if(product){
                let data = await bidRepository.priceWiseBidCount(product._id,2);
                console.log(data);
                let user = await userRepository.find({_id:{$in:data.map((x)=>x.userID)}});
                return res.status(200).send({ data: user});
            }
            return res.status(200).send({ error: "Product Not Found"});
        }
        catch (ex) {
            console.log(ex);
            return res.status(500).send({ error: "Something went wrong" });
        }
    }
}