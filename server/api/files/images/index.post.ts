export default defineEventHandler(async(event) => {

    const body = await readBody<FormData>(event)
    const config = useRuntimeConfig();

    try {

        return await $fetch(`${config.public.apiBaseUrl}/files/images`, {
            method: 'POST',
            body
        })
        
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Error to upload image'
        })
    }
});