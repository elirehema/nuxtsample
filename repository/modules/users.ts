import type { FetchOptions } from 'ofetch';
import type { AsyncDataOptions } from '#app';

import FetchFactory from '../factory';


type IUser = {
    id: number,
    email: string,
    username: string,
    
}
class UsersModule extends FetchFactory{
    private RESOURCE = '/users';

    async getUsers(AsyncDataOptions: AsyncDataOptions<IUser[]>){
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
        }, AsyncDataOptions)
    }
}
export default UsersModule;