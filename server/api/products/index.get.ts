import type { Product } from "~~/types/Product";
import type { Pagination } from '~~/types/Pagination'
import type { ApiResponse } from '~~/types/ApiResponse'

export default defineEventHandler(async(event) => {
    const config = useRuntimeConfig();
    
    return await $fetch<ApiResponse<Pagination<Product>>>(
        `${config.public.apiBaseUrl}/products`
    );
});