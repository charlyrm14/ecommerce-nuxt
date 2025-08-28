import type { ApiResponse } from "~~/types/ApiResponse";
import type { Category } from "~~/types/Product";

type NewCategory = {
    name: string
    status: boolean
}

export default defineEventHandler(async(event) => {

    const body = await readBody<NewCategory>(event)
    const config = useRuntimeConfig();

    try {

        return await $fetch<ApiResponse<Category>>(`${config.public.apiBaseUrl}/categories`, {
            method: 'POST',
            body
        })
        
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Error to create category'
        })
    }
});
