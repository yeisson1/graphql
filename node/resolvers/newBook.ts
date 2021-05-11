import { BookInput } from '../typings/custom';

interface Arg {
    book: BookInput
}

export const newBook = (_:any,{ book }:Arg, {
    clients:{
        book:bookClient
    }
}:Context) => bookClient.newBook(book)