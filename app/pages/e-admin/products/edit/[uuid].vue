<script setup lang="ts">
    import Breadcrumb from '~/components/admin/layouts/Breadcrumb.vue'
    import EditProductForm from '~/components/admin/products/EditProductForm.vue'
    import ProductDetails from '~/components/admin/products/ProductDetails.vue'
    import UploadProductFiles from '~/components/admin/products/UploadProductFiles.vue'
    import type { ApiResponse } from '~~/types/ApiResponse'
    import type { Product } from '~~/types/Product'
    
    definePageMeta({
        layout: 'admin'
    })

    const route = useRoute()
    const uuid = route.params.uuid
    
    const { data, error } = await useAsyncData<ApiResponse<Product>>(`product-${uuid}`, () =>
        $fetch<ApiResponse<Product>>(`/api/products/${uuid}`)
    )

    if (error.value) {
        throw error.value
    }

    const product = ref<Product | null>(data?.value?.data ?? null)
    const status = ref<number | 0>(data?.value?.data?.status ?? 0)
    const tabs = ref<number>(1)

    const toggleStatusProduct = () => {
        status.value = status.value === 1 ? 0 : 1
    }

</script>

<template>
    <Breadcrumb
        main="Productos"
        :secondary="`Editar ${product?.name ?? ''}`"/>
        
    <section class="mt-7">
        <div class="flex flex-col gap-6 md:flex-row">

            <aside class="md:basis-[20%]">
                <div class="mt-1 rounded-lg border border-gray-200 bg-white p-2">
                    <div class="flex justify-between items-center gap-x-3">
                        <div class="py-2 px-4">
                            <h2 class="font-bold text-lg"> 
                                Estatus <span class="block text-xs text-gray-400 font-normal"> Define la visibildad del producto </span>
                            </h2>
                        </div>
                        <button 
                            type="button" 
                            @click="toggleStatusProduct"
                            class="relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 ease-in-out focus:outline-none peer cursor-pointer"
                            :class="status  === 1 ? 'bg-blue-500 border-blue-500' : 'bg-gray-200 border-gray-300'">
                                <span 
                                    class="inline-block h-6 w-7 transform rounded-full bg-white transition-transform duration-300 ease-in-out peer-checked:translate-x-6"
                                    :class="status === 1 ? 'translate-x-8' : 'translate-x-1'"></span>
                        </button>
                    </div>
                </div>
                <ProductDetails/>
            </aside>

            <main class="md:basis-[80%]">
                <div class="flex justify-start items-center gap-x-3 w-auto max-w-full bg-white mt-1 p-1 rounded-lg border border-gray-200">
                    <button 
                        class="px-4 py-2 cursor-pointer"
                        :class="tabs === 1 ? 'bg-blue-500 rounded-lg text-white': 'text-gray-400 hover:opacity-75'"
                        @click="tabs = 1"> 
                            General 
                    </button>
                    <button
                        class="px-4 py-2 cursor-pointer"
                        :class="tabs === 2 ? 'bg-blue-500 rounded-lg text-white': 'text-gray-400 hover:opacity-75'"
                        @click="tabs = 2">
                            Multimedia
                    </button>
                </div>

                <EditProductForm
                    v-if="tabs === 1"
                    :product="product"/>

                <UploadProductFiles
                    v-if="tabs === 2"/>

            </main>
        </div>
    </section>
</template>
