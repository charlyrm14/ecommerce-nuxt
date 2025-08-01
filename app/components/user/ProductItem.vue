<script setup>
    import Headphones from '~/assets/media/headphones.png'
</script>

<template>
    <NuxtLink
        to="/products/13bd3802-2d17-4015-a242-4e8b7be60321" 
        class="relative bg-red-100 border border-red-200 rounded-lg">
        <div class="relative">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FD8C92" d="M40.8,-71.5C51.8,-64.4,58.8,-51.2,66.6,-38.2C74.5,-25.3,83.2,-12.6,84.4,0.7C85.5,14,79.1,27.9,70.7,40C62.3,52,52,62.1,39.9,70C27.8,78,13.9,83.7,-1.3,85.9C-16.5,88.2,-33,86.9,-44,78.4C-55.1,69.9,-60.7,54.1,-66.1,39.8C-71.5,25.5,-76.7,12.8,-77.6,-0.5C-78.6,-13.8,-75.2,-27.6,-68,-38.8C-60.8,-50,-49.8,-58.5,-37.8,-65.1C-25.8,-71.6,-12.9,-76.2,1,-77.9C14.9,-79.7,29.9,-78.7,40.8,-71.5Z" transform="translate(100 100)" />
            </svg>
            <div
                class="absolute top-8 right-6 md:top-12 md:right-12">
                    <img 
                        :src="Headphones" 
                        alt="Headphones" 
                        class="w-40 md:w-60 m-auto cursor-pointer"/>
            </div>
        </div>
        <div class="mb-2">
            <h2 class="text-center font-light text-gray-800"> Sony WHXM-4000 </h2>
            <h2 class="text-center text-red-500 font-bold text-lg"> $6,000.00 </h2>
        </div>
        <div class="absolute top-4 right-4 md:top-10 md:right-8">
            <button class="rounded-full p-1 text-red-500 cursor-pointer hover:opacity-75">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#fb2c36" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 md:size-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            </button>
        </div>
    </NuxtLink>
</template>