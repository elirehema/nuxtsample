import type { $Fetch, FetchOptions } from 'ofetch';

class FetchFactory{
    private $fetch: $Fetch;


    constructor(fetcher: $Fetch){
        this.$fetch = fetcher;
    }

    async call(
        method: string, 
        url: string, 
        data?: object, 
        fetchOptions?: FetchOptions<'json'>): Promise<T>{
            return this.$fetch(url,
                {
                    method, 
                    body: data, 
                    ...fetchOptions
                }
            )
        }
}
export default FetchFactory;