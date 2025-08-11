import type { Product } from "~~/types/Product";

export default defineEventHandler(async(event) => {

    const uuid = event.context.params?.uuid as string;
    const config = useRuntimeConfig();

    if (!uuid) {
        throw createError({ 
            statusCode: 400, 
            statusMessage: 'UUID is required' 
        });
    }

    try {
        
        return await $fetch<Product>(`${config.public.apiBaseUrl}/products/${uuid}`);

    } catch (error: any) {

        if (error?.statusCode === 404) {
            throw createError({ 
                statusCode: 404, 
                statusMessage: `Es posible que la pagina que estas buscando haya sido eliminada, haya cambiado de nombre o no esté disponible temporalmente..`
            });
        }

        throw error;
    }
})