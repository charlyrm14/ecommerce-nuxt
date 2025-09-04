export default defineEventHandler(async(event) => {

    const body = await readBody<FormData>(event)
    const config = useRuntimeConfig();

    try {

        return await $fetch(`${config.public.apiBaseUrl}/files`, {
            method: 'POST',
            body
        })
        
    } catch (error) {

        console.error(error)

    }
});