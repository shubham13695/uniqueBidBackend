import { getModelForClass, mongoose, prop } from "@typegoose/typegoose";
import { ObjectId } from "mongoose";

export class Product {
    readonly _id!:ObjectId;

    @prop({ type: mongoose.Schema.Types.String })
    slug!: string;

    @prop({ type: mongoose.Schema.Types.String })
    name!: string;

    @prop({ type: ()=>[mongoose.Schema.Types.String] })
    shortDesc!:  string[];

    @prop({ type: mongoose.Schema.Types.String })
    longDesc!: string;

    @prop({ type: mongoose.Schema.Types.Number })
    price!: number;

    @prop({ type: mongoose.Schema.Types.Number })
    cutOffPrice!: number;

    @prop({ type: mongoose.Schema.Types.String })
    bannerImage!: string;

    @prop({ type: ()=>[mongoose.Schema.Types.String]})
    images!: string[];

    @prop({ type: mongoose.Schema.Types.Date })
    startDate!: Date;

    @prop({ type: mongoose.Schema.Types.Date })
    endDate!: Date;

    @prop({ type: mongoose.Schema.Types.Number, default: 1 })
    numberEnteries!: number;

    @prop({ type: mongoose.Schema.Types.Number, default: 1 })
    numberBid!: number;

    @prop({ type: mongoose.Schema.Types.Boolean, default: true })
    status!: boolean;
}

export const ProductModal = getModelForClass(Product, { schemaOptions: { timestamps: true } });


export class CreateProduct {
    name!: string;
    shortDesc!:  string[];
    longDesc!: string;
    price!: number;
    cutOffPrice!: number;
    bannerImage!: string;
    images!:  string[];
    startDate!: Date;
    endDate!: Date;
    numberEnteries!: number;
    numberBid!: number;
}