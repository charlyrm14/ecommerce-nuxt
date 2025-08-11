<script setup lang="ts">

    import type { NuxtError } from '#app'

    const props = defineProps<{
        error: NuxtError
    }>()

</script>

<template>
    <div class="min-h-screen bg-gray-100 dark:bg-dark px-4">
        <div class="flex flex-col items-center justify-center h-screen">
            <svg 
                viewBox="0 0 400 200" 
                xmlns="http://www.w3.org/2000/svg" 
                class="w-120 md:w-240 h-auto">
                <path 
                    fill="#8e51ff" 
                    d="M40.8,-71.5C51.8,-64.4,58.8,-51.2,66.6,-38.2C74.5,-25.3,83.2,-12.6,84.4,0.7C85.5,14,79.1,27.9,70.7,40C62.3,52,52,62.1,39.9,70C27.8,78,13.9,83.7,-1.3,85.9C-16.5,88.2,-33,86.9,-44,78.4C-55.1,69.9,-60.7,54.1,-66.1,39.8C-71.5,25.5,-76.7,12.8,-77.6,-0.5C-78.6,-13.8,-75.2,-27.6,-68,-38.8C-60.8,-50,-49.8,-58.5,-37.8,-65.1C-25.8,-71.6,-12.9,-76.2,1,-77.9C14.9,-79.7,29.9,-78.7,40.8,-71.5Z" 
                    transform="translate(200 100)" />
                        <text 
                            x="200" 
                            y="115" 
                            text-anchor="middle" 
                            font-size="72" 
                            fill="#FFF" 
                            font-weight="bold" 
                            font-family="Arial, sans-serif"> {{ error.statusCode }} </text>
            </svg>
            <h1 class="dark:text-slate-300 text-xl md:text-4xl text-center font-light"> ¡Oops! Página no encontrada. </h1>
            <p class="mt-2 mb-12 text-center dark:text-slate-400 font-extralight"> {{ error.statusMessage }} </p>
            <NuxtLink
                to="/"
                class="bg-violet-500 px-4 py-3 text-white rounded-lg cursor-pointer hover:opacity-75"> Regresar a inicio </NuxtLink>
        </div>
    </div>
</template>
