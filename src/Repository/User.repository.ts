import { CreateUser, User, UserModal } from "../entity/User";
import { slugify } from "../helper/slug";

export class UserRepository{

    async create(data:CreateUser):Promise<User>{
        return await UserModal.create({
            name:data.name,
            email:data.email,
            phoneNumber:data.phoneNumber,
            slug:slugify(data.email!!),
            image:data.image
        });
    }

    async findOne(query:any):Promise<User|null>{
        return  await UserModal.findOne({...query,status:true});
    }

    async find(query:any):Promise<User[]|null>{
        return await UserModal.find({...query,status:true});
    }

    async exists(query:any):Promise<boolean>{
        return await UserModal.exists({...query});
    }


}