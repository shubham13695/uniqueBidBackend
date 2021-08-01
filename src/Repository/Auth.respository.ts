import { sign } from "jsonwebtoken";
import { ObjectID } from "mongodb";

export class AuthRespository{

    async generateAccessToken(id:ObjectID){
        return sign({ userId: id }, process.env.TOKEN_SECRET!, {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN!
        });
    }


}