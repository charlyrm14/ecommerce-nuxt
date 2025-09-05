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
                <button class="bg-white p-0.5 md:p-1 rounded-full border border-gray-200 cursor-pointer text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 md:size-8">
                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                    </svg>
                </button>
            </div>
        </div>
        <div class="px-2 mt-2">
            <NuxtLink 
                to="/products/13bd3802-2d17-4015-a242-4e8b7be60321"
                class="text-sm dark:text-white font-extralight"> 
                    Sony WHXM-4000 
            </NuxtLink>
            <p class="mt-1 text-lg text-red-500 font-bold"> $6,000.00 </p>
        </div>
        <div class="mt-3 mb-1">
            <button class="w-full flex justify-center items-center gap-x-3 text-base md:text-xl bg-red-500 text-white px-3 py-1 rounded-4xl hover:opacity-75 cursor-pointer font-light">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg> Agregar a carrito
            </button>
        </div>
    </div>
</template>