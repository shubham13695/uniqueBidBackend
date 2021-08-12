import { Request,Response } from "express";
import { AuthRespository } from "../Repository/Auth.respository";

import { UserRepository } from "../Repository/User.repository";

let userRepository:UserRepository =  new UserRepository();
let authRespository:AuthRespository = new AuthRespository();

export class UserModule{

    async login(req:Request,res:Response){
        try{
            let user = await userRepository.findOne({email:req.body.email});
            if(!user){
                user = await userRepository.create(
                    {
                        email:req.body.email,
                        image:req.body.image,
                    }
                );
            }
            let data = {
                accessToken:await authRespository.generateAccessToken(user._id),
                expire:process.env.ACCESS_TOKEN_EXPIRES_IN
            }
            return res.status(200).send({data:data,msg:"Logged in sucessfully"});
        }
        catch(ex){
            console.log(ex);
            return res.status(500).send({error:"Something went wrong"});
        }
    }

    async me(req:Request,res:Response){
        try{
            let user = req.body.user;
            let resData={
                email:user.email,
                image:user.image
            };
            return res.status(200).send({data:resData});
        }
        catch(ex){
            console.log(ex);
            return res.status(500).send({error:"Something went wrong"});
        }
    }

}