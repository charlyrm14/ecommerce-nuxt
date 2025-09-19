<script setup lang="ts">
    import type { ApiResponse } from '~~/types/ApiResponse';
    import type { Login } from '~~/types/Auth';

    const config = useRuntimeConfig();

    type FormLoginData = {
        email: string
        password: string
    }

    const isSubmitting = ref<boolean>(false);

    const handleSubmit = async(data: FormLoginData) => {

        isSubmitting.value = true

        try {
            
            const response = await $fetch<ApiResponse<Login>>(`${config.public.apiBaseUrl}/auth/login`, {
                method: 'POST',
                body: data
            })

        } catch (error) {
            console.error(error)
        } finally {
            isSubmitting.value = false
        }
    }

</script>

<template>
    <FormKit
        type="form"
        id="login"
        :actions="false"
        incomplete-message="* Revisa los campos marcados con error *"
        message-class="text-red-500 my-5 text-xs font-light"
        @submit="handleSubmit">
            <div>
                <div class="my-2">
                    <label for="email" class="font-light dark:text-white"> Correo electrónico </label>
                    <FormKit 
                        type="email"
                        id="email"
                        name="email"
                        input-class="w-full bg-gray-100 dark:bg-dark-extralight rounded-lg p-4 focus:outline-none dark:text-slate-400 mt-2"
                        message-class="text-red-500 text-sm m-2 font-light"
                        placeholder="correo@correo.com"
                        validation="required|email"
                        :validation-messages="{
                            required: 'Ingresa un correo electrónico',
                            email: 'Ingresa un correo electrónico valido'
                        }"
                        :disabled="isSubmitting"/>
                </div>
                <div class="mt-6">
                    <label for="password" class="font-light dark:text-white"> Contraseña </label>
                    <FormKit 
                        type="password"
                        id="password"
                        name="password"
                        input-class="w-full bg-gray-100 dark:bg-dark-extralight rounded-lg p-4 focus:outline-none dark:text-slate-400 mt-2"
                        message-class="text-red-500 text-sm m-2 font-light"
                        placeholder="********"
                        validation="required"
                        :validation-messages="{
                            required: 'Ingresa tu contraseña'
                        }"
                        :disabled="isSubmitting"/>
                </div>
                <div class="mt-6">
                    <p class="text-xs underline text-blue-500 cursor-pointer hover:opacity-75"> Olvidaste tu contraseña? </p>
                </div>
                <div class="mt-6">
                    <button
                        type="submit"
                        :disabled="isSubmitting"
                        class="text-lg w-full p-4 rounded-4xl hover:opacity-75 transition"
                        :class="!isSubmitting ? 'bg-red-500 text-white cursor-pointer' : 'bg-red-300 text-white cursor-not-allowed'">
                            {{ !isSubmitting ? 'Iniciar sesión' : 'Iniciando sesión' }}
                    </button>
                </div>
                <div class="w-full border border-gray-100 dark:border-dark-soft mt-6"></div>
                <div>
                    <button class="border border-gray-200 dark:border-dark-soft dark:text-white p-4 rounded-4xl w-full font-bold cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-extralight my-6"> Google </button>
                    <button class="border border-gray-200 dark:border-dark-soft dark:text-white p-4 rounded-4xl w-full font-bold cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-extralight"> Facebook </button>
                </div>
            </div>
    </FormKit>
</template>
