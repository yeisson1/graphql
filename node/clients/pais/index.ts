import { ExternalClient, IOContext, InstanceOptions } from '@vtex/api';


export class PaisClient extends ExternalClient{
    constructor(context:IOContext, options?:InstanceOptions){
        super("", context, options);
    }


    public paises =  async () =>{
        
        const response = await this.http.get("https://api.printful.com/countries");
        

        if (response?.code === 200){
            return response?.result;
        }

        return [];
    }

  
}