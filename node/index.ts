import { ServiceContext, Service } from '@vtex/api';

import { Clients} from './clients';

import { newBook} from './resolvers/newBook';
import { books } from './resolvers/books';

declare global {
    type Context = ServiceContext<Clients>
}

const MEDIUM_TIMEOUT_MS = 2 * 1000;

export default new Service({
    clients:{
        implementation:Clients,
        options:{
            default:{
                timeout:MEDIUM_TIMEOUT_MS
            }
        }
    },
    graphql:{
        resolvers:{
            Mutation: {
                newBook

            },
            Query:{
                books
            }
        }
    }
})