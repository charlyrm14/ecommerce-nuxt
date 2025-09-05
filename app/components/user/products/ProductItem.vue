<script setup>
    import Headphones from '~/assets/media/headphones.png'
</script>

<template>
    <div class="bg-white dark:bg-dark-extralight border border-gray-200 dark:border-none p-1.5 rounded-lg">
        <div class="bg-gray-100 dark:bg-dark-soft rounded-lg relative">
            <NuxtLink 
                to="/products/13bd3802-2d17-4015-a242-4e8b7be60321">
                    <div >
                        <img 
                            :src="Headphones" 
                            alt="Headphones" 
                            class="w-35 md:w-50 m-auto cursor-pointer"/>
                    </div>
            </NuxtLink>
            <div class="absolute top-1 right-2">
                <button class="text-red-500">
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
        </div>
    </div>
</template>