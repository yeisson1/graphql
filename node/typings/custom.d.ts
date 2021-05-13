import { ServiceContext } from '@vtex/api';

export interface Book {
    authors:string[]
    cacheId?:string
    id:string
    name:string
}

export interface BookInput {
    authors:Book['authors']
    name: Book['name']
}


export interface Persona {
    nombre:String
    apellido: String
    edad: number
}

export interface PersonaInput {
    nombre:Persona['nombre']
    apellido:Persona['apellido']
    edad: Persona['edad']
}

export interface Pais {
    name:String
    code:String
    states:String
}
