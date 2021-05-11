import {PersonaInput} from '../typings/custom';

interface Arg {
    persona:PersonaInput
}

export const newPersona =(
    _:any,
    { persona }:Arg,
    { clients: {persona:personaClient }}:Context

 ) => personaClient.newPersona(persona)