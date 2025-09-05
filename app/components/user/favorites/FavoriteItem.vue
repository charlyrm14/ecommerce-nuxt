<script setup>
    import Headphones from '~/assets/media/headphones.png'
</script>

<template>
    <div class="bg-white dark:bg-dark-extralight border border-gray-200 dark:border-none p-1.5 rounded-lg">
        <div class="bg-gray-100 dark:bg-dark-soft rounded-lg relative p-1">
            <NuxtLink 
                to="/products/13bd3802-2d17-4015-a242-4e8b7be60321">
                    <img 
                        :src="Headphones" 
                        alt="Headphones" 
                        class="w-35 md:w-50 m-auto cursor-pointer"/>
            </NuxtLink>
            <div class="absolute top-1 right-2">
                <button class="p-0.5 md:p-1 rounded-full cursor-pointer text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 md:size-8">
                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                    </svg>
                </button>
            </div>
        </div>
        <div class="px-2 mt-2">
            <NuxtLink 
                to="/products/13bd3802-2d17-4015-a242-4e8b7be60321"
                class="text-lg dark:text-white"> 
                    Sony WHXM-4000 
            </NuxtLink>
        </div>
        <div class="mt-3 mb-1">
            <div class="flex justify-between items-center py-1 bg-gray-100 dark:bg-dark-soft rounded-4xl">
                <p class="text-xl text-red-500 font-semibold pl-4"> $6,000.00 </p>
                <div class="pr-1">
                    <button 
                        to="/cart"
                        class="md:text-xl bg-red-500 text-white dark:text-slate-300 p-1.5 rounded-full hover:opacity-75 cursor-pointer font-extralight">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>