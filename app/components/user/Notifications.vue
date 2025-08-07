<script setup lang="ts">
    const showNotificationContent = ref<boolean>(false)
</script>

<template>
    <div class="border-b border-gray-300 dark:border-dark-extralight mt-7">
        <div class="flex justify-between items-center">
            <div class="flex justify-start items-center gap-x-4 mb-3">
                <div class="dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                    </svg>
                </div>
                <div>
                    <h4 class="dark:text-white text-base"> Notificaciones </h4>
                    <span class="dark:text-white text-xs md:text-sm font-extralight"> Administra como recibes notificaciones </span>
                </div>
            </div>
            <button 
                @click="showNotificationContent = !showNotificationContent"
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
                                :d="showNotificationContent ? 'm4.5 15.75 7.5-7.5 7.5 7.5' : 'm19.5 8.25-7.5 7.5-7.5-7.5'"/>
                    </svg>
            </button>
        </div>
        <div v-if="showNotificationContent">
            <div class="flex justify-between items-center my-3">
                <div>
                    <p class="dark:text-white text-sm font-light"> Notificaciones de nuevos productos </p>
                </div>
                <div>
                    <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" class="sr-only peer">
                        <div class="w-11 h-6 bg-gray-300 peer-checked:bg-red-500 rounded-full relative transition-colors duration-300">
                            <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                        </div>
                    </label>
                </div>
            </div>
            <div class="flex justify-between items-center my-3">
                <div>
                    <p class="dark:text-white text-sm font-light"> Notificaciones de ofertas </p>
                </div>
                <div>
                    <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" class="sr-only peer">
                        <div class="w-11 h-6 bg-gray-300 peer-checked:bg-red-500 rounded-full relative transition-colors duration-300">
                            <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>