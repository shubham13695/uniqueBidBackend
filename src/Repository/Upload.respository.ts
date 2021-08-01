import { S3Client } from "../helper/awa-s3-client";
import { UploadedFile } from "express-fileupload";
import { v4 } from "uuid";
let s3 = new S3Client();
export class UploadRepository{

    async upload(file:UploadedFile):Promise<string>{
       let _file=await s3.put(file.data,v4(),file.mimetype,file.encoding);
        return _file.Location;
    }

}
