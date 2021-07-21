import { getModelForClass, mongoose, prop } from "@typegoose/typegoose";

export class User{

    @prop({type:mongoose.Schema.Types.String})
    slug!:string;
    
    @prop({type:mongoose.Schema.Types.String})
    name!: string;

    @prop({type:mongoose.Schema.Types.String})
    email!: string;

    @prop({type:mongoose.Schema.Types.String})
    password!:string;

    @prop({type:mongoose.Schema.Types.Boolean})
    isAdmin!:boolean;

    @prop({type:mongoose.Schema.Types.String})
    phoneNumber!:string;

    @prop({type:mongoose.Schema.Types.Boolean,default:true})
    status!:boolean;
} 

export const UserModal = getModelForClass(User,{schemaOptions:{timestamps:true}});

