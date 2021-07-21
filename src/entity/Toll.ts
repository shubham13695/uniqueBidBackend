
import { mongoose, prop, getModelForClass } from '@typegoose/typegoose';

export enum WAYTYPE{
    ONEWAY='ONEWAY',
    TWOWAY='TWOWAY'
}

export enum AMOUNT{
    ONEWAY=100,
    TWOWAY=200
}

export class Toll{
    
    @prop({type:mongoose.Schema.Types.String})
    ticket!: string;

    @prop({type:mongoose.Schema.Types.String})
    vehicleNo!: string;

    @prop({type:mongoose.Schema.Types.String})
    amount!:number;

    @prop({type:mongoose.Schema.Types.String})
    way!:WAYTYPE;

}

export const TollModel = getModelForClass(Toll, { schemaOptions: { timestamps: true } });