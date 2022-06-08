import { Resolver, Query, Mutation, Arg, Authorized } from "type-graphql";
import { Carousel, CarouselModel } from "../../entities/carousel-entity";
import { UserRoles } from "../user/user-roles";
import { BaseCarouselInput, CarouselInput } from "./carousel-arguments";

@Resolver()
export class CarouselResolver {

  @Query(returns => [Carousel])
  async carousel():Promise<Carousel[]> {
    return await CarouselModel.find({})
  }

  @Query(returns => Carousel)
  async Carousel(@Arg("_id") _id: string):Promise<Carousel> {
    return await CarouselModel.findById(_id);
  }

  @Mutation(returns => Carousel)
  async createCarousel(@Arg("data") data: BaseCarouselInput):Promise<Carousel> {
    const newCarousel = new CarouselModel(data);
    await newCarousel.save();
    return newCarousel
  }

  @Authorized([UserRoles.ADMIN, UserRoles.SUPER_ADMIN]) 
  @Mutation(returns => Carousel)
  async deleteCarousel(@Arg("_id") _id: string):Promise<Carousel> {
    return await CarouselModel.findByIdAndRemove(_id);
  }

  @Mutation(returns => Carousel)
  async editCarousel(@Arg("_id") _id: string, @Arg("data") data: CarouselInput):Promise<Carousel> {
    return await CarouselModel.findByIdAndUpdate(_id, data, {new: true});
  }

}