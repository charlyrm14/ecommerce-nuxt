import type { Product } from '../../../types/Product'

export default defineEventHandler(async(event) => {
    const uuid = event.context.params?.uuid as string;
    const config = useRuntimeConfig();

    if (!uuid) {
        throw createError({ statusCode: 400, statusMessage: 'UUID is required' });
    }

    return await $fetch<Product>(`${config.public.apiBaseUrl}/products/${uuid}`);
})