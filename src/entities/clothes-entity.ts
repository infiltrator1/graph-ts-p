import { ObjectType, Field, InputType } from "type-graphql";
import { prop as Prop, getModelForClass } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

@ObjectType()
export class Clothes {

    @Field()
    readonly _id: ObjectId;

    @Prop({required: true})
    @Field()
    type: string;

    @Prop({nullable: true})
    @Field()
    typeKids?: string;


    @Prop({required: true})
    @Field()
    category: string;

    @Prop({required: true})
    @Field()
    name: string;

    @Prop({required: true})
    @Field()
    refNumber: string;

    @Prop({required: true})
    @Field()
    price: string;

    @Prop({required: true})
    @Field(type => [String])
    size: string[];

    @Prop({required: true})
    @Field()
    image: string;

    @Prop({required: true})
    @Field(type => [String])
    imageList: string[];

}

export const ClothesModel = getModelForClass(Clothes, { schemaOptions: { timestamps: true }})