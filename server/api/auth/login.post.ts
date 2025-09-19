import type { ApiResponse } from "~~/types/ApiResponse";
import type { Login } from '~~/types/Auth'

type LoginData = {
    email: string
    password: string
}

export default defineEventHandler(async(event) => {

    const body = await readBody<LoginData>(event)
    const config = useRuntimeConfig();

    try {

        return await $fetch<ApiResponse<Login>>(`${config.public.apiBaseUrl}/auth/login`, {
            method: 'POST',
            body
        })
        
    } catch (error) {
        
        console.error(error)
    }
});
