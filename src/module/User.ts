import { Request,Response } from "express";
import { User, UserModal } from "../entity/User";
class _UserModule{

    async CreateUser(req:Request,res:Response){
        try{
            return res.status(200).send({data:"",msg:"User created Successfully"});
        }
        catch(ex){
            console.log(ex);
            return res.status(500).send({error:"Something went wrong"});

        }
    }

}

export const UserModule = new _UserModule();