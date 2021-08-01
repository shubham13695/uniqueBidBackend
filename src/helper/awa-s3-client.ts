import {default as S3} from "aws-sdk/clients/s3";
import {ManagedUpload} from "aws-sdk/lib/s3/managed_upload";
import { v4 } from "uuid";

export class S3Client{

    protected client: S3;

    constructor() {
        this.client = new S3({
            signatureVersion: 'v4',
            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            region: process.env.S3_REGION
        });
    }

    public put(data: any, fileName: string, mimeType: string, encoding: string): Promise<ManagedUpload.SendData> {
        return this.client.upload({
            Bucket: `${process.env.S3_BUCKET}/uploads`,
            Key: fileName,
            Body: data,
            ContentType: `${mimeType}; charset=utf-8`,
            ACL: 'public-read',
            CacheControl: 'max-age=60',
            ContentEncoding: encoding
        }).promise();
    }

    async getUploadSignedUrl(fileName: string) {
        const fileNamePrefix = v4();
        const extension = this.extractExtention(fileName);
        return await this.client.getSignedUrlPromise('putObject', {
            Bucket: process.env.S3_BUCKET,
            Key: `uploads/${fileNamePrefix}.${extension}`,
            ACL: 'public-read'
        })
    }

    extractExtention(filename: string): string | undefined {
        const regex: RegExp = /(?:\.([^.]+))?$/;
        const extractedFilename = regex.exec(filename);
        if (extractedFilename) {
            return extractedFilename[1].toLowerCase();
        }
        return undefined;
    }

}