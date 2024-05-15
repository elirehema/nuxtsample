import { $fetch, FetchOptions } from 'ofetch';
import UsersModule from '~/repository/modules/users';
import CartsModule from '~/repository/modules/users';

import ProductsModule from '~/repository/modules/products';
interface IApriInstance{
    products: ProductsModule;
    users: UsersModule;
}

export default defineNuxtPlugin((nuxtApp)=>{
    const config = useRuntimeConfig();
    const fetchOptions: FetchOptions = {
        baseURL: config.public.apiBaseUrl,
        headers:{
            'Authorizatrion':'Authorizatrion'
        }
    };

    const apiFetcher = $fetch.create(fetchOptions);
    const modules: IApriInstance = {
        products: new ProductsModule(apiFetcher),
        users: new UsersModule(apiFetcher)
    }
    return {
        provide:{
            api: modules
        }
    }

});