import { Length, MinLength } from "class-validator";
import { Field, InputType } from "type-graphql";
import { ObjectId } from "mongodb";

@InputType()
export class BaseBookInput {

    @Field()
    @Length(2,30)
    name: string;

    @Field()
    author: string;

    @Field()
    genre: string;

    @Field()
    @Length(2,500)
    description: string;

    @Field()
    @MinLength(5)
    image: string;
}

@InputType()
export class BookInput extends BaseBookInput {
    
    @Field()
    _id: ObjectId;
}
