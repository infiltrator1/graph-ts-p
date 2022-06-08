import { Resolver, Query, Mutation, Arg, Authorized } from "type-graphql";
import { Home, HomeModel } from "../../entities/home-entity";
import { UserRoles } from "../user/user-roles";
import { BaseHomeInput, HomeInput } from "./home-arguments";

@Resolver()
export class HomeResolver {

  @Query(returns => [Home])
  async carousel():Promise<Home[]> {
    return await HomeModel.find({})
  }

  @Query(returns => Home)
  async Home(@Arg("_id") _id: string):Promise<Home> {
    return await HomeModel.findById(_id);
  }

  @Mutation(returns => Home)
  async createHome(@Arg("data") data: BaseHomeInput):Promise<Home> {
    const newHome = new HomeModel(data);
    await newHome.save();
    return newHome
  }

  @Authorized([UserRoles.ADMIN, UserRoles.SUPER_ADMIN]) 
  @Mutation(returns => Home)
  async deleteHome(@Arg("_id") _id: string):Promise<Home> {
    return await HomeModel.findByIdAndRemove(_id);
  }

  @Mutation(returns => Home)
  async editHome(@Arg("_id") _id: string, @Arg("data") data: HomeInput):Promise<Home> {
    return await HomeModel.findByIdAndUpdate(_id, data, {new: true});
  }

}