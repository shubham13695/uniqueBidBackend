import { Request, Response } from "express";
import { ProductRepository } from "../Repository/Product.respository";


let productRepository = new ProductRepository();

export class ProductModule {

    async create(req: Request, res: Response) {
        try {
            await productRepository.create(
                {
                    bannerImage: req.body.bannerImage,
                    cutOffPrice: req.body.cutOffPrice,
                    endDate: req.body.endDate,
                    images: req.body.images,
                    longDesc: req.body.longDesc,
                    name: req.body.name,
                    numberBid: req.body.numberBid,
                    numberEnteries: req.body.numberEnteries,
                    price: req.body.price,
                    shortDesc: req.body.shortDesc,
                    startDate: req.body.startDate
                }
            );
            return res.status(200).send({ data: true, msg: "Product created sucessfully" });
        }
        catch (ex) {
            console.log(ex);
            return res.status(500).send({ error: "Something went wrong" });

        }
    }

    async get(req: Request, res: Response) {
        try {
            const baseFilter: any = {
                $and: [
                    { status: true },
                ]
            };
            let query = req.query;
            let page = 1;
            if (query.page) {
                page = parseInt(query.page as string)
            }
            let limit = 18;
            let skip = (limit * page) - limit;

            let filterdData = await productRepository.getPaginatedList(baseFilter, -1, skip, limit);
            let total: number = await productRepository.count(baseFilter);

            let data = {
                total: total,
                currentPage: page,
                data: filterdData,
                startPage: (limit * page) - limit + 1,
                endPage: (limit * page) - (limit - filterdData.length),
                length: limit,
                lastPage: Math.ceil(total / limit)
            };
            return res.status(200).send({ data: data, msg: "Product fetched sucessfully" });
        }
        catch (ex) {
            console.log(ex);
            return res.status(500).send({ error: "Something went wrong" });
        }
    }

}