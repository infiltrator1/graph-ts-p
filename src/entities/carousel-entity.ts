import { ObjectType, Field, InputType } from "type-graphql";
import { prop as Prop, getModelForClass } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

@ObjectType()
export class Carousel {

    @Field()
    readonly _id: ObjectId;

    @Prop({required: true})
    @Field()
    name: string;

    @Prop({required: true})
    @Field(type => [String])
    imageList: string[];

}

export const CarouselModel = getModelForClass(Carousel, { schemaOptions: { timestamps: true }})