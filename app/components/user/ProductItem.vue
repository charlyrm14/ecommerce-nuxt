<script setup>
    import Headphones from '~/assets/media/headphones.png'
</script>

<template>
    <div class="bg-white dark:bg-dark-extralight border border-gray-200 dark:border-none p-1.5 rounded-lg">
        <div class="bg-red-100 border border-red-200 rounded-lg relative">
            <NuxtLink 
                to="/products/13bd3802-2d17-4015-a242-4e8b7be60321"
                class="relative">
                    <svg viewBox="-5 15 210 177" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FD8C92" d="M40.8,-71.5C51.8,-64.4,58.8,-51.2,66.6,-38.2C74.5,-25.3,83.2,-12.6,84.4,0.7C85.5,14,79.1,27.9,70.7,40C62.3,52,52,62.1,39.9,70C27.8,78,13.9,83.7,-1.3,85.9C-16.5,88.2,-33,86.9,-44,78.4C-55.1,69.9,-60.7,54.1,-66.1,39.8C-71.5,25.5,-76.7,12.8,-77.6,-0.5C-78.6,-13.8,-75.2,-27.6,-68,-38.8C-60.8,-50,-49.8,-58.5,-37.8,-65.1C-25.8,-71.6,-12.9,-76.2,1,-77.9C14.9,-79.7,29.9,-78.7,40.8,-71.5Z" transform="translate(100 100)" />
                    </svg>
                    <div class="absolute top-4 right-6 md:right-12">
                        <img 
                            :src="Headphones" 
                            alt="Headphones" 
                            class="w-35 md:w-50 m-auto cursor-pointer"/>
                    </div>
            </NuxtLink>
            <div class="absolute top-1 right-2">
                <button class="bg-white p-0.5 md:p-1 rounded-full border border-gray-200 cursor-pointer hover:text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 md:size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </button>
            </div>
        </div>
        <div class="px-2 flex justify-between items-center">
            <div class="mt-2">
                <NuxtLink 
                    to="/products/13bd3802-2d17-4015-a242-4e8b7be60321"
                    class="text-sm dark:text-white font-extralight"> 
                        Sony WHXM-4000 
                </NuxtLink>
                <p class="mt-1 text-lg text-red-500 font-bold"> $6,000.00 </p>
            </div>
            <NuxtLink 
                to="/products/13bd3802-2d17-4015-a242-4e8b7be60321"
                class="bg-gray-100 dark:bg-dark-soft dark:text-gray-300 border border-gray-200 dark:border-none p-2 rounded-full cursor-pointer hover:opacity-75">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
            </NuxtLink>
        </div>
    </div>
</template>