import { Request, Response,NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { UserModal } from "../entity/User";


export const authenticateJWT = (req:Request, res:Response, next:NextFunction) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];

        verify(token, process.env.TOKEN_SECRET!!, async (err, data:any) => {
            if (err) {
                return res.status(403).send({errors:"Forbidden"});
            }
            let user = await UserModal.findById(data?.userId!!);
            req.body.user = user;
            next();
        });
    } else {
        res.status(401).send({errors:"Unauthorized"});
    }
};
