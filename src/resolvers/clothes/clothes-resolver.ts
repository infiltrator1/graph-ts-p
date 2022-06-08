import { Resolver, Query, Mutation, Arg, Authorized } from "type-graphql";
import { Clothes, ClothesModel } from "../../entities/clothes-entity";
import { UserRoles } from "../user/user-roles";
import { BaseClothesInput, ClothesInput, ClothesFilterInput } from "./clothes-arguments";

@Resolver()
export class ClothesResolver {

  @Query(returns => [Clothes])
  async clothes(@Arg("filter") filter : ClothesFilterInput):Promise<Clothes[]> {
    interface LooseObject {
        [key: string]: any
    }
  
    let queryFilter: LooseObject = {};
    if(filter.type) {
      queryFilter.type = filter.type;
    }
    if(filter.category) {
      queryFilter.category = { "$in" : filter.category}
    }
    if(filter.size) {
      queryFilter.size = { "$in" : filter.size}
    }
    return await ClothesModel.find(queryFilter)
  }

  @Query(returns => Clothes)
  async clothesOne(@Arg("_id") _id: string):Promise<Clothes> {
    return await ClothesModel.findById(_id);
  }

  @Mutation(returns => Clothes)
  async createClothes(@Arg("data") data: BaseClothesInput):Promise<Clothes> {
    const newClothes = new ClothesModel(data);
    await newClothes.save();
    return newClothes
  }

  @Authorized([UserRoles.ADMIN, UserRoles.SUPER_ADMIN]) 
  @Mutation(returns => Clothes)
  async deleteClothes(@Arg("_id") _id: string):Promise<Clothes> {
    return await ClothesModel.findByIdAndRemove(_id);
  }

  @Mutation(returns => Clothes)
  async editClothes(@Arg("_id") _id: string, @Arg("data") data: ClothesInput):Promise<Clothes> {
    return await ClothesModel.findByIdAndUpdate(_id, data, {new: true});
  }

}