import { ExternalClient, IOContext, InstanceOptions } from '@vtex/api';
import {Book, BookInput} from '../../typings/custom';



export class BookClient extends ExternalClient{

    constructor(context:IOContext, options?:InstanceOptions){
        super("", context, options);
    }

    public newBook = (book: BookInput): Book => {

        const newBook = {
            ...book,
            id:'Juan'
        }

        console.log("newBook", book);
        return newBook;
    }

    public books = () => {
        console.log("BookClient::books")
        return []
    }

}



