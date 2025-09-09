<script setup lang="ts"> 
    import Headphones from '~/assets/media/headphones.png'
    import type { Product } from '~~/types/Product';
    import { formatCurrency } from '#imports';
    import { useFavoritesStore } from '~~/stores/favorites'
    
    defineProps<{
        product: Product
    }>()

    const favoritesStore = useFavoritesStore()

</script>

<template>
    <div class="bg-white dark:bg-dark-extralight border border-gray-200 dark:border-none p-1.5 rounded-lg w-full">
        <div class="bg-gray-100 dark:bg-dark-soft rounded-lg relative w-50 md:w-full">
            <NuxtLink 
                :to="`/products/${product?.uuid}`">
                    <div >
                        <img 
                            :src="Headphones" 
                            alt="Headphones" 
                            class="w-40 md:w-60 m-auto cursor-pointer"/>
                    </div>
            </NuxtLink>
            <div class="absolute top-1 right-2">
                <button 
                    @click="favoritesStore.addProduct(product)"
                    class="text-red-500 cursor-pointer">
                        <svg
                            v-if="favoritesStore.existsInFavorites(product)"
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="currentColor" 
                            class="size-6">
                                <path 
                                d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>
                        <svg
                            v-else
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke-width="1.5" 
                            stroke="currentColor" 
                            class="size-6">
                                <path 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                </button>
            </div>
        </div>
        <div class="px-2 flex justify-between items-center">
            <div class="mt-2">
                <NuxtLink 
                    to="/products/13bd3802-2d17-4015-a242-4e8b7be60321"
                    class="text-sm dark:text-white font-extralight"> 
                        {{ product?.name ?? 'Unknown' }}
                </NuxtLink>
                <p class="mt-1 text-lg text-red-500 font-bold"> {{ formatCurrency(product?.price) ?? '--'}} </p>
            </div>
        </div>
    </div>
</template>