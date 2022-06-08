import { Field, InputType } from "type-graphql";
import { ObjectId } from "mongodb";

@InputType()
export class BaseHomeInput {

    @Field()
    name: string;

    @Field()
    image: string;
}

@InputType()
export class HomeInput extends BaseHomeInput {
    
    @Field()
    _id: ObjectId;
}