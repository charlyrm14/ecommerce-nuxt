<script setup lang="ts">
    import Breadcrumb from '~/components/admin/layouts/Breadcrumb.vue';
    import AddCategory from '~/components/admin/categories/AddCategory.vue';
    import ProductDetails from '~/components/admin/products/ProductDetails.vue';
    import { useProductsStore } from '~~/stores/products';
    import Alert from '~/components/common/Alert.vue';
    import UploadProductFiles from '~/components/admin/products/UploadProductFiles.vue';
    import CreateProductForm from '~/components/admin/products/CreateProductForm.vue';
    import { useModalManager } from '#imports';
        
    definePageMeta({
        layout: 'admin'
    })

    type Errors = {
        text: string
        status: boolean
    }

    const tabs = ref<number>(1)

    const productsStore = useProductsStore()

    const { isOpen, close } = useModalManager()

    const closeCategoryModal = () => {
        close()
    }
    
    const toggleStatusProduct = () => {
        productsStore.form.status = productsStore.form.status === 1 ? 0 : 1
    }

    const onCategorySelected = (id: number) => {
        console.log("Categoría seleccionada " + id);
    }

</script>

<template>
    <Breadcrumb
        main="Productos"
        secondary="Nuevo producto"/>

    <Alert
        v-if="productsStore.alert.status"
        :title="productsStore.alert.title"
        :description="productsStore.alert.description"
        :type="productsStore.alert.type"/>

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
                            :class="productsStore.form.status  === 1 ? 'bg-blue-500 border-blue-500' : 'bg-gray-200 border-gray-300'">
                                <span 
                                    class="inline-block h-6 w-7 transform rounded-full bg-white transition-transform duration-300 ease-in-out peer-checked:translate-x-6"
                                    :class="productsStore.form.status  === 1 ? 'translate-x-8' : 'translate-x-1'"></span>
                        </button>
                    </div>
                </div>

                <ProductDetails
                    @categorySelected="onCategorySelected"/>

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

                <CreateProductForm
                    v-if="tabs === 1"/>

                <UploadProductFiles
                    v-if="tabs === 2"/>

            </main>
        </div>
    </section>

    <AddCategory
        v-if="isOpen('categoryModal')"
        @closeCreateCategory="closeCategoryModal()"/>

</template>
