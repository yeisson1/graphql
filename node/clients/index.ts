import { IOClients } from '@vtex/api';
import { BookClient } from './book';
import { PersonaClient } from './persona';
import { PaisClient } from './pais';


export class Clients extends IOClients{
    get book() {
        return this.getOrSet('book', BookClient);
    }

    get persona(){
        return this.getOrSet('persona', PersonaClient)
    }

    get pais(){
        return this.getOrSet('pais', PaisClient)
    }
}