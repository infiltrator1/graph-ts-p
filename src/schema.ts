import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/user/user-resolver";
import { AuthResolver } from "./resolvers/auth/auth-resolver";
import { ClothesResolver } from "./resolvers/clothes/clothes-resolver";
import { TypegooseMiddleware } from "./typegoose-middleware";
import { ObjectId } from "mongodb";
import { ObjectIdScalar } from "./object-id.scalar";
import { authChecker} from "./resolvers/auth/auth-checker"; 

import * as path from "path"
import { HomeResolver} from "./resolvers/home/home-resolver";
import { CarouselResolver } from "./resolvers/carousel/carousel-resolver";

export const getSchema = async () => {
    const schema = await buildSchema({
        resolvers: [
            UserResolver,
            AuthResolver,
            ClothesResolver,
            HomeResolver,
            CarouselResolver,
        ],
        emitSchemaFile: path.resolve(__dirname, "schema.gql"),
        // use document converting middleware
        globalMiddlewares: [TypegooseMiddleware],
        // use ObjectId scalar mapping
        scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }],
        authChecker,
    
      });
    return schema
}