import { ObjectType, Field, Authorized } from "type-graphql";
import { prop as Prop, getModelForClass, modelOptions, Severity } from "@typegoose/typegoose";
import { ObjectId} from "mongodb";
import { Clothes } from "./clothes-entity";
import { UserRoles } from "../resolvers/user/user-roles";

@modelOptions({ options: { allowMixed: Severity.ALLOW } })

@ObjectType()
export class User {

    @Field()
    readonly _id: ObjectId;

    @Prop({required: true})
    @Field()
    name: string;

    @Prop({required: true})
    @Field()
    email: string;

    @Prop({required: true})
    @Field()
    password: string;

    @Prop({required: true})
    @Field()
    adress: string;

    @Prop({required: true})
    @Field()
    city: string;

    @Prop({required: true})
    @Field()
    zip: string;

    @Field()
    @Prop({default: Date.now()})
    lastLogin?: number;

    @Field(type => [Clothes])
    @Prop({default: []})
    clothes?: Clothes[];

    @Authorized([UserRoles.SUPER_ADMIN])
    @Field(type => [String])
    @Prop({default: [UserRoles.USER]})
    roles?: string[]

}

export const UserModel = getModelForClass(User, { schemaOptions: { timestamps: true }})
