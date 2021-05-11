import { ExternalClient, IOContext, InstanceOptions } from '@vtex/Api';
import {Persona, PersonaInput} from '../../typings/custom';

export class PersonaClient extends ExternalClient{
    constructor(context:IOContext, options?:InstanceOptions){
        super("", context, options);
    }


    public personas = ({from, to}:{from:number, to:number}) =>{
        console.log(from, to);
        return [];
    }

    public newPersona = (persona:PersonaInput):Persona => {
        return persona;
    }
}