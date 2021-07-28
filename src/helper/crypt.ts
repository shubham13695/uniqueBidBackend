
import { randomBytes,createCipheriv,createDecipheriv } from "crypto";

const algorithm = 'aes-128-cbc';
const secretKey = process.env.ENCRYPTION_KEY ? process.env.ENCRYPTION_KEY : '';
const secret = Buffer.from(secretKey,'hex');
const iv = randomBytes(16);

export const encrypt = (data:string):Encrypt => {
    console.log(secret);
    const cipher = createCipheriv(algorithm, secret, iv);

    const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
    return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex')
    };
};

export const decrypt = (hash:Encrypt):string => {

    const decipher = createDecipheriv(algorithm,secret ,Buffer.from(hash.iv, 'hex'));

    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);

    return decrpyted.toString();
};

class Encrypt{
    iv!:string;
    content!:string;
}