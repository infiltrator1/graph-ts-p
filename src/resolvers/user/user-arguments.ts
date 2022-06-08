import { MaxLength, MinLength, IsEmail } from "class-validator";
import { Field, InputType } from "type-graphql";
import { ClothesInput } from "../clothes/clothes-arguments";

@InputType()
export class CreateUserInput {
  @Field()
  @MaxLength(60)
  name: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @MinLength(6)
  password: string;
  
  @Field()
  adress: string;
  
  @Field()
  city: string;
  
  @Field()
  zip: string;
}

@InputType()
export class EditUserInput {
    
  @Field({nullable: true})
  @MaxLength(60)
  name?: string;

  @Field({nullable: true})
  @IsEmail()
  email?: string;

  @Field({nullable: true})
  @MinLength(6)
  password?: string;
  
  @Field({nullable: true})
  adress?: string;
  
  @Field({nullable: true})
  city?: string;
  
  @Field({nullable: true})
  zip?: string;

  @Field(type => [ClothesInput])
  clothes?: ClothesInput[];
}