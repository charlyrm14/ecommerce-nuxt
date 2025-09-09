<script setup lang="ts">
    import { useProductsStore } from '~~/stores/products';
    import ProductItem from './ProductItem.vue';

    const productsStore = useProductsStore()

    onMounted(async() => {
        try {
            
            await productsStore.fetchGetProducts()

        } catch (error) {
            console.error(error)
        }
    })

</script>

<template>
    <section class="px-4 mt-14">
        <div class="my-3 flex justify-between items-center">
            <h2 class="dark:text-white"> Productos populares </h2>
            <NuxtLink 
                to="/products/13bd3802-2d17-4015-a242-4e8b7be60321"
                class="text-red-500 inline-flex items-center gap-x-2 font-light cursor-pointer"> 
                    Ver todo 
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
            </NuxtLink>
        </div>
        <div class="flex gap-x-4 gap-y-6 overflow-x-auto">
            <ProductItem
                v-if="productsStore?.products?.data"
                v-for="product in productsStore?.products?.data?.slice(0, 4)"
                :key="product.id"
                :product="product"/>
        </div>
    </section>
</template>
