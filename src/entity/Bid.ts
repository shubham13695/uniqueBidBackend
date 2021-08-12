import { getModelForClass, mongoose, prop, Ref } from "@typegoose/typegoose";
import { ObjectID } from "mongodb";
import { Product } from "./Product";
import { User } from "./User";

export class Bid{
    
    @prop({ref:User})
    userID!:Ref<User>;

    @prop({ref:Product})
    productID!:Ref<Product>;

    @prop({type:mongoose.Schema.Types.Number})
    bidPrice!:number;

    @prop({type:mongoose.Schema.Types.Boolean,default:true})
    status!:boolean;
} 

export const BidModal = getModelForClass(Bid,{schemaOptions:{timestamps:true}});

export class CreateBid {
    productID!: ObjectID;
    bidPrice!:  number;
    userID!:ObjectID;
}
