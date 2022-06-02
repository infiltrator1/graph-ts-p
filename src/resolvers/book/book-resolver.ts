import { Resolver, Query, Mutation, Arg, Authorized } from "type-graphql";
import { Book, BookModel } from "../../entities/book-entity";
import { UserRoles } from "../user/user-roles";
import { BaseBookInput, BookInput } from "./book-arguments";

@Resolver()
export class BookResolver {

  @Query(returns => [Book])
  async books():Promise<Book[]> {
    return await BookModel.find({})
  }

  @Query(returns => Book)
  async book(@Arg("_id") _id: string):Promise<Book> {
    return await BookModel.findById(_id);
  }

  @Mutation(returns => Book)
  async createBook(@Arg("data") data: BaseBookInput):Promise<Book> {
    const newBook = new BookModel(data);
    await newBook.save();
    return newBook
  }

  @Authorized([UserRoles.ADMIN, UserRoles.SUPER_ADMIN]) 
  @Mutation(returns => Book)
  async deleteBook(@Arg("_id") _id: string):Promise<Book> {
    return await BookModel.findByIdAndRemove(_id);
  }

  @Mutation(returns => Book)
  async editBook(@Arg("_id") _id: string, @Arg("data") data: BookInput):Promise<Book> {
    return await BookModel.findByIdAndUpdate(_id, data, {new: true});
  }

}