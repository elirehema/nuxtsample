import type { FetchOptions } from 'ofetch';
import type { AsyncDataOptions } from '#app';

import FetchFactory from '../factory';

type IProduct ={
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating:{
        rate: number,
        count: number
    }
}

class ProductsModule extends FetchFactory{
    private RESOURCE = '/products';

    async getProducts(){
        return useAsyncData(()=>{
            const fetchOptions: FetchOptions<'json'> ={
                headers:{
                    'Accept-Language':'un-US'
                }
            };
            return this.call('GET',
                `${this.RESOURCE}`,
                undefined,
                fetchOptions
            )
        },)
    }
    async getUsers(){
        return useAsyncData(()=>{
            const fetchOptions: FetchOptions<'json'> ={
                headers:{
                    'Accept-Language':'un-US'
                }
            };
            return this.call('GET',
                `/users`,
                undefined,
                fetchOptions
            )
        })
    }
}
export default ProductsModule