import { getModelForClass, mongoose, prop, Ref } from "@typegoose/typegoose";
import { Product } from "./Product";
import { User } from "./User";

export class Bid{
    
    @prop({ref:User})
    userID!:Ref<User>;

    @prop({ref:Product})
    productID!:Ref<Product>;

    @prop({type:mongoose.Schema.Types.Number})
    bidPrice!:Number;

    @prop({type:mongoose.Schema.Types.Number,default:1})
    numberBid!:number;

    @prop({type:mongoose.Schema.Types.Boolean,default:false})
    status!:boolean;
} 

export const BidModal = getModelForClass(Bid,{schemaOptions:{timestamps:true}});