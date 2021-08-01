import { Request,Response } from "express";
import { ProductRepository } from "../Repository/Product.respository";


let productRepository = new ProductRepository();

export class ProductModule{

    async create(req:Request,res:Response){
        try{    
                 await productRepository.create(
                    {
                        bannerImage:req.body.bannerImage,
                        cutOffPrice:req.body.cutOffPrice,
                        endDate:req.body.endDate,
                        images:req.body.images,
                        longDesc:req.body.longDesc,
                        name:req.body.name,
                        numberBid:req.body.numberBid,
                        numberEnteries:req.body.numberEnteries,
                        price:req.body.price,
                        shortDesc:req.body.shortDesc,
                        startDate:req.body.startDate
                    }
                );
            return res.status(200).send({data:true,msg:"Product created sucessfully"});
        }
        catch(ex){
            console.log(ex);
            return res.status(500).send({error:"Something went wrong"});

        }
    }

}