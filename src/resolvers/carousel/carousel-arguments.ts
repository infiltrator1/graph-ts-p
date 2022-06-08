import { Field, InputType } from "type-graphql";
import { ObjectId } from "mongodb";

@InputType()
export class BaseCarouselInput {

    @Field()
    name: string;

    @Field(type => [String])
    imageList: string[];
}

@InputType()
export class CarouselInput extends BaseCarouselInput {
    
    @Field()
    _id: ObjectId;
}