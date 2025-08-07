<script setup lang="ts">
    const showThemeContent = ref<boolean>(false)
</script>

<template>
    <div class="border-b border-gray-300 dark:border-dark-extralight">
        <div class="flex justify-between items-center">
            <div class="flex justify-start items-center gap-x-4 mb-3">
                <div class="dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                    </svg>
                </div>
                <div>
                    <h4 class="dark:text-white text-base"> Tema </h4>
                    <span class="dark:text-white text-xs md:text-sm font-extralight"> Administra el color de la pantalla </span>
                </div>
            </div>
            <button 
                @click="showThemeContent = !showThemeContent"
                class="bg-white dark:bg-dark-extralight border border-gray-200 dark:border-none p-1.5 rounded-full dark:text-white cursor-pointer hover:opacity-75">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none"
                        viewBox="0 0 24 24" 
                        stroke-width="1.5" 
                        stroke="currentColor" 
                        class="size-6">
                            <path 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                :d="showThemeContent ? 'm4.5 15.75 7.5-7.5 7.5 7.5' : 'm19.5 8.25-7.5 7.5-7.5-7.5'"/>
                    </svg>
            </button>
        </div>
        <div 
            v-if="showThemeContent"
            class="flex justify-start items-center mt-6 mb-3 gap-x-6">
                <div class="bg-white border border-gray-200 p-4 rounded-lg flex justify-start gap-x-3 cursor-pointer hover:opacity-75 shadow-lg">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>
                    </div>
                    <div>
                        <p class="font-light"> Tema claro </p>
                    </div>
                </div>
                <div class="bg-dark dark:bg-dark-extralight border-2 border-blue-500 p-4 rounded-lg flex justify-start gap-x-3 cursor-pointer hover:opacity-75 shadow-lg">
                    <div class="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                    </div>
                    <div>
                        <p class="font-light text-white"> Tema obscuro </p>
                    </div>
                </div>
        </div>
    </div>
</template>