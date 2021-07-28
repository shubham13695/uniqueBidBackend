import { getModelForClass, mongoose, prop } from "@typegoose/typegoose";
import { ObjectID } from "mongodb";

export class User{

    readonly _id!:ObjectID;

    @prop({type:mongoose.Schema.Types.String})
    slug!:string;
    
    @prop({type:mongoose.Schema.Types.String,default:null})
    name!: string;

    @prop({type:mongoose.Schema.Types.String,unique:true})
    email!: string;

    @prop({type:mongoose.Schema.Types.Boolean,default:false})
    isAdmin!:boolean;

    @prop({type:mongoose.Schema.Types.String,unique:true})
    phoneNumber!:string;

    @prop({type:mongoose.Schema.Types.String,default:null})
    image!:string;

    @prop({type:mongoose.Schema.Types.Boolean,default:true})
    status!:boolean;
} 

export const UserModal = getModelForClass(User,{schemaOptions:{timestamps:true}});

export class CreateUser{
    
    name?: string|null = null;

    email:string|null = null;

    image:string|null = null;

    phoneNumber?:string|null = null;
}

