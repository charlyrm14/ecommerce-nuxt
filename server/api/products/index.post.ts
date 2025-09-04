import type { ApiResponse } from "~~/types/ApiResponse";
import type { Product } from "~~/types/Product";

type NewProduct = {
    name: string
    description: string
    price: number
    stock: number
    status: number
    category_id: number
    brand_id: number
    images: Array<number>
}

export default defineEventHandler(async(event) => {

    const body = await readBody<NewProduct>(event)
    const config = useRuntimeConfig();

    try {

        return await $fetch<ApiResponse<Product>>(`${config.public.apiBaseUrl}/products`, {
            method: 'POST',
            body
        })
        
    } catch (error) {
        
        console.error(error)
    }
});
