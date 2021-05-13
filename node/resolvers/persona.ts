
interface Arg {
    from:number
    to:number
}

export const personas = (
    _:any,
    arg:Arg,
    {
        clients:{
            persona
        }
    }:Context
) => persona.personas(arg)