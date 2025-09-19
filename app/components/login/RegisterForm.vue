<script setup lang="ts">

</script>

<template>
    <div class="p-4">
        <div class="my-2 relative">
            <label for="email" class="font-light dark:text-white"> Nombre </label>
            <input 
                type="text"
                name="email"
                class="w-full bg-gray-100 dark:bg-dark-extralight rounded-lg px-12 py-4 focus:outline-none dark:text-slate-400 mt-2"
                placeholder="Juan Perez">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 absolute bottom-4 left-2 text-gray-300 dark:text-slate-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
        </div>
        <div class="mt-6 relative">
            <label for="email" class="font-light dark:text-white"> Correo electrónico </label>
            <input 
                type="text"
                name="email"
                class="w-full bg-gray-100 dark:bg-dark-extralight rounded-lg px-12 py-4 focus:outline-none dark:text-slate-400 mt-2"
                placeholder="correo@correo.com">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 absolute bottom-4 left-2 text-gray-300 dark:text-slate-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
        </div>
        <div class="mt-6 relative">
            <label for="password" class="font-light dark:text-white"> Contraseña </label>
            <input 
                type="password"
                name="password"
                class="w-full bg-gray-100 dark:bg-dark-extralight rounded-lg px-12 py-4 focus:outline-none dark:text-slate-400 mt-2"
                placeholder="***********">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 absolute bottom-4 left-2 text-gray-300 dark:text-slate-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
        </div>
        <div class="mt-6">
            <button
                class="bg-red-500 text-white text-lg w-full p-4 rounded-4xl cursor-pointer hover:opacity-75">
                    Registrarse
            </button>
        </div>
    </div>
</template>
