import { IOClients } from '@vtex/api';
import { BookClient } from './book';
import { PersonaClient } from './persona';

export class Clients extends IOClients{
    get book() {
        return this.getOrSet('book', BookClient);
    }

    get persona(){
        return this.getOrSet('persona', PersonaClient)
    }
}