import { Length, MinLength } from "class-validator";
import { Field, InputType } from "type-graphql";
import { ObjectId } from "mongodb";

@InputType()
export class BaseClothesInput {

    @Field()
    type: string;

    @Field({nullable: true})
    typeKids?: string;

    @Field()
 //   @Length(2,60)
    name: string;

    @Field()
    category: string;

    @Field()
    refNumber: string;

    @Field()
    price: string;

    @Field(type => [String])
    size: string[];

    @Field()
    image: string;

    @Field(type => [String])
    imageList: string[];
}

@InputType()
export class ClothesInput extends BaseClothesInput {
    
    @Field()
    _id: ObjectId;
    

/*    @Field({nullable: true})
    type?: string;

    @Field({nullable: true})
 //   @Length(2,60)
    name?: string;

    @Field({nullable: true})
    category?: string;

    @Field({nullable: true})
    refNumber?: string;

    @Field({nullable: true})
    price?: string;

    @Field(type => [String], {nullable: true})
    size?: string[];

    @Field({nullable: true})
    image?: string;

    @Field(type => [String], {nullable: true})
    imageList?: string[];
    */
}

@InputType()
export class ClothesFilterInput {
    
    @Field(type => String, {nullable: true})
    type?: string;

    @Field(type => [String], {nullable: true})
    category?: string[];

    @Field(type => [String], {nullable: true})
    size?: string[];

    @Field(type => [String], {nullable: true})
    typeKids?: string[];
}
