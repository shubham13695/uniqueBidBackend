import { Request,Response } from "express";
import { UploadRepository } from "../Repository/Upload.respository";
import { UploadedFile } from "express-fileupload";

let uploadRepository:UploadRepository = new UploadRepository();

export class UploadModule{

    async upload(req:Request,res:Response){
        try{
            let files = req.files;
            if(files){
                let location = await uploadRepository.upload(<UploadedFile>(files.file));
                return res.status(200).send({data:{location:location},msg:"Upload sucessfully."});
            }
            return res.status(422).send({data:false,error:"Provide file"}); 
        }
        catch(ex){
            console.log(ex);
            return res.status(500).send({data:false,error:"Something Went Wrong!"});
        }
    }

}