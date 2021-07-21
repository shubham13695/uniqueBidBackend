import { getModelForClass, mongoose, prop } from "@typegoose/typegoose";

export class Product{

    @prop({type:mongoose.Schema.Types.String})
    slug!:string;
    
    @prop({type:mongoose.Schema.Types.String})
    name!: string;

    @prop({type:mongoose.Schema.Types.String})
    ShortDesc!: string;

    @prop({type:mongoose.Schema.Types.String})
    longDesc!: string;

    @prop({type:mongoose.Schema.Types.Number})
    price!: number;

    @prop({type:mongoose.Schema.Types.Number})
    cutOffPrice!: number;

    @prop({type:mongoose.Schema.Types.String})
    image!: string;

    @prop({type:mongoose.Schema.Types.String})
    startDate!:Date;

    @prop({type:mongoose.Schema.Types.String})
    endDate!:Date;

    @prop({type:mongoose.Schema.Types.Number,default:1})
    numberEnteries!:number;

    @prop({type:mongoose.Schema.Types.Number,default:1})
    numberBid!:number;

    @prop({type:mongoose.Schema.Types.Boolean,default:false})
    status!:boolean;
} 

export const ProductModal = getModelForClass(Product,{schemaOptions:{timestamps:true}});