import { ObjectId } from "mongoose";
import { Bid, BidModal, CreateBid } from "../entity/Bid";


export class BidRepository {

    async create(data: CreateBid): Promise<Bid> {
        return await BidModal.create({
            productID: data.productID,
            bidPrice: data.bidPrice,
            userID:data.userID
        });
    }

    async priceWiseBidCount(productId: ObjectId,limit:number) {
        return await BidModal.aggregate([
            {
                $match: {
                    productID: productId,
                    status: true
                }
            },
            {
                $group: {
                    _id: "$bidPrice",
                    priceEnteries: {
                        $push: {
                            bidPrice: "$bidPrice",
                            productID: "$productID",
                            userID: "$userID"
                        }
                    }
                }
            },
            {
                $add:{
                    bidPriceCount: {$size:"$priceEnteries"},
                    bidPrice:{$first:"$priceEnteries.bidPrice"},
                    userID:{$first:"$priceEnteries.userID"}
                }
            },
            {
                $count: {
                    "bidPriceCount": 1,
                    "priceEnteries.bidPrice": 1
                }
            },
            {
                $limt:limit
            }
        ]);
    }


}