import { CreateProduct,ProductModal,Product } from "../entity/Product";
import { slugifyProduct } from "../helper/slug";

export class ProductRepository{

    async create(data:CreateProduct):Promise<Product>{
        return await ProductModal.create({
            name:data.name,
            slug:slugifyProduct(data.name),
            shortDesc: data.shortDesc,
            longDesc: data.longDesc,
            price: data.price,
            cutOffPrice: data.cutOffPrice,
            bannerImage: data.bannerImage,
            images: data.images,
            startDate: data.startDate,
            endDate: data.endDate,
            numberEnteries: data.numberEnteries,
            numberBid:data.numberBid
        });
    }

    async findOne(query:any):Promise<Product|null>{
        return  await ProductModal.findOne({...query,status:true});
    }

    async find(query:any):Promise<Product[]|null>{
        return await ProductModal.find({...query,status:true});
    }

    async exists(query:any):Promise<boolean>{
        return await ProductModal.exists({...query});
    }


}