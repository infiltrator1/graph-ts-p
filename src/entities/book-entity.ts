import { ObjectType, Field, InputType } from "type-graphql";
import { prop as Prop, getModelForClass } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

@ObjectType()
export class Book {

    @Field()
    readonly _id: ObjectId;

    @Prop({required: true})
    @Field()
    name: string;

    @Prop({required: true})
    @Field()
    author: string;

    @Prop({required: true})
    @Field()
    genre: string;

    @Prop({required: true})
    @Field()
    description: string;

    @Prop({required: true})
    @Field()
    image: string;

}

export const BookModel = getModelForClass(Book, { schemaOptions: { timestamps: true }})