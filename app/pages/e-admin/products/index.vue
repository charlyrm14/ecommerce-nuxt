<script setup lang="ts">
    import Breadcrumb from '~/components/admin/layouts/Breadcrumb.vue';
    import DeleteProduct from '~/components/admin/products/DeleteProduct.vue';
    import PaginationProduct from '~/components/admin/products/PaginationProduct.vue';
    import Table from '~/components/admin/products/Table.vue';
    import { useProductsStore } from '~~/stores/products';
    import { useModalManager } from '~/composables/useModalManager';
    import type { Product } from '~~/types/Product';
    
    definePageMeta({
        layout: 'admin'
    })

    const productsStore = useProductsStore()

    const selectedProduct = ref<Product | null>(null)

    const { open, close, isOpen } = useModalManager()

    onMounted(async() => {
        try {

            await productsStore.fetchGetProducts()
            
        } catch (error) {
            console.error(error)
        }
    })

    const handlePageChange = (page: number) => {
        productsStore.fetchGetProducts(page)
    }

    const openDelete = (product: Product) => {
        selectedProduct.value = product
        open('delete')
    }

</script>

<template>
    <Breadcrumb
        main="Productos"
        secondary="Lista"/>

    <section class="mt-7">
        <div class="border border-gray-200 rounded-xl bg-white">
            <div class="p-4 border-b border-gray-200">

                <div class="flex justify-between items-center">

                    <div class="flex justify-between items-center gap-x-3">
                        <div class="relative">
                            <input 
                                type="text"
                                class="border border-gray-200 px-10 py-2 rounded-lg hidden md:block focus:outline-none"
                                placeholder="Search...">
                            <div class="absolute top-2 left-2 hidden md:block">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-gray-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </div>
                        </div>
                        <button class="bg-blue-100 text-blue-500 p-2 md:px-4 md:py-2 rounded-lg flex gap-x-2 font-light cursor-pointer hover:opacity-75">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                            </svg> Filters
                        </button>
                    </div>

                    <NuxtLink
                        to="/e-admin/products/new"
                        class="bg-blue-500 text-white font-light rounded-lg p-2 md:px-4 md:py-2 cursor-pointer hover:opacity-75 flex items-center gap-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg> Añadir producto
                    </NuxtLink>
                </div>

            </div>

            <div>
                <Table
                    v-if="productsStore?.products?.data?.length > 0"
                    :products="productsStore?.products?.data"
                    @openDeleteProduct="openDelete"/>

                <div 
                    v-else 
                    class="p-6 flex justify-center">
                    <NuxtLink 
                        
                        to="/e-admin/products/new"
                        class="text-xl underline text-pink-500 font-light cursor-pointer"> 
                            Aún no tienes productos, empieza agregando uno
                    </NuxtLink>
                </div>

            </div>

            <div class="p-4 border-t border-gray-200">
                <div class="flex justify-between items-center">

                    <p class="text-xs"> 
                        Mostrando 
                            <span class="font-bold"> {{ productsStore?.products?.per_page }} </span> productos por página 
                    </p>

                    <PaginationProduct
                        v-if="productsStore?.products?.links"
                        :links="productsStore?.products?.links"
                        @change="handlePageChange"/>

                </div>
            </div>

        </div>
    </section>

    <DeleteProduct
        v-if="isOpen('delete')"
        :product="selectedProduct"
        @closeDeleteProduct="close"/>

</template>
