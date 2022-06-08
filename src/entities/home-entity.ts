import { ObjectType, Field, InputType } from "type-graphql";
import { prop as Prop, getModelForClass } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

@ObjectType()
export class Home {

    @Field()
    readonly _id: ObjectId;

    @Prop({required: true})
    @Field()
    name: string;

    @Prop({required: true})
    @Field()
    image: string;

}

export const HomeModel = getModelForClass(Home, { schemaOptions: { timestamps: true }})