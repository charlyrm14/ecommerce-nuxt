export default defineEventHandler(async(event) => {

    const config = useRuntimeConfig();

    const { id } = event.context.params as { id: string }

    if (!id) {
        throw createError({
            statusCode: 400,
            statusMessage: 'ID category not found'
        })
    }

    try {

        return await $fetch(`${config.public.apiBaseUrl}/categories/${id}`, {
            method: 'DELETE'
        })
        
    } catch (error) {
        console.error(error)
    }
});
