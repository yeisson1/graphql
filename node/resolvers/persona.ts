


interface Arg {
    from:number
    to:number
}

export const persona = (
    _:any,
    arg:Arg,
    {
        clients:{
            persona
        }
    }:Context
) => persona.personas(arg)