<script setup lang="ts">
    import Breadcrumb from '~/components/admin/layouts/Breadcrumb.vue';
    import AddCategory from '~/components/admin/categories/AddCategory.vue';
    import AddProductFiles from '~/components/admin/products/AddProductFiles.vue';
    import CoverProductImage from '~/components/admin/products/CoverProductImage.vue';
    import ProductDetails from '~/components/admin/products/ProductDetails.vue';
    
    definePageMeta({
        layout: 'admin'
    })

    const isSubmitting = ref<boolean>(false)
    const showCreateCategoryModal = ref<boolean>(false)
    const showUploadFilesModal = ref<boolean>(false)

    const openCreateCategoryModal = () => {
        showCreateCategoryModal.value = true;
    }
    
    const closeCreateCategoryModal = () => {
        showCreateCategoryModal.value = false;
    }

    const openUploadFileModal = () => {
        showUploadFilesModal.value = true;
    }

    const closeUploadFileModal = () => {
        showUploadFilesModal.value = false
    }

    const handleSubmit = () => {
        isSubmitting.value = true

        setTimeout(() => {
            isSubmitting.value = false
        }, 3000);
    }

</script>

<template>
    <Breadcrumb
        main="Productos"
        secondary="Nuevo producto"/>

    <section class="mt-7">
        <div class="flex flex-col gap-6 md:flex-row">
            <aside class="md:basis-[20%]">

                <CoverProductImage
                    @openFileModal="openUploadFileModal"/>
                
                <div class="mt-7 rounded-lg border border-gray-200 bg-white p-2">
                    <div class="flex justify-between items-center gap-x-3">
                        <div class="py-2 px-4">
                            <h2 class="font-bold text-lg"> 
                                Estatus <span class="block text-xs text-gray-400 font-normal"> Define la visibildad del producto </span>
                            </h2>
                        </div>
                        <button 
                            type="button" 
                            class="relative inline-flex h-8 w-16 items-center rounded-full bg-blue-500 transition-colors duration-300 ease-in-out focus:outline-none peer cursor-pointer">
                                <span class="inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ease-in-out translate-x-1 peer-checked:translate-x-6"></span>
                        </button>
                    </div>
                </div>

                <ProductDetails
                    @openCategoryModal="openCreateCategoryModal"/>

            </aside>

            <main class="md:basis-[80%]">

                <div class="flex justify-start items-center gap-x-3">
                    <div class="border-b-3 border-blue-500">
                        <h2 class="text-blue-500 text-lg hover:opacity-75 cursor-pointer"> General </h2>
                    </div>
                </div>

                <div class="mt-7 rounded-lg border border-gray-200 bg-white p-4">

                    <FormKit
                        type="form"
                        id="createProduct"
                        :actions="false"
                        incomplete-message="* Revisa los campos marcados con error *"
                        message-class="text-red-500 my-5 text-xs font-light"
                        @submit="handleSubmit">

                            <div class="py-2 px-4">
                                <div>
                                    <label for="name" class="text-base"> Nombre <span class="text-red-500"> * </span> </label>
                                    <FormKit 
                                        type="text"
                                        id="name"
                                        name="name"
                                        input-class="w-full border border-gray-200 text-gray-600 p-2.5 rounded-lg my-2 focus:outline-none"
                                        message-class="text-red-500 text-sm m-1.5 font-light"
                                        placeholder="Ej: Televisión, playera, cocina"
                                        validation="required"/>
                                </div>
                            </div>

                            <div class="py-2 px-4">
                                <div>
                                    <label for="description" class="text-base"> Descripción <span class="text-red-500"> * </span> </label>
                                    <div class="border border-gray-200 mt-2 rounded-lg h-50">
                                        <div class="flex justify-start items-center gap-x-3 border-b border-gray-200 px-4 py-2">
                                            <p class="text-gray-400 cursor-pointer hover:opacity-75 text-sm"> Normal </p>
                                            <p class="text-gray-400 cursor-pointer hover:opacity-75 text-sm"> B </p>
                                            <p class="text-gray-400 italic cursor-pointer hover:opacity-75 text-sm"> I </p>
                                            <p class="text-gray-400 underline cursor-pointer hover:opacity-75 text-sm"> U </p>
                                        </div>
                                        <div class="p-4 cursor-text">
                                            <p class="text-xs text-gray-400"> Escribe aquí ... </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="py-2 px-4">
                                <div>
                                    <label for="price" class="text-base"> Precio <span class="text-red-500"> * </span> </label>
                                    <FormKit 
                                        type="number"
                                        id="price"
                                        name="price"
                                        input-class="w-full border border-gray-200 text-gray-600 p-2.5 rounded-lg my-2 focus:outline-none"
                                        message-class="text-red-500 text-sm m-1.5 font-light"
                                        placeholder="Ej: 1299.99"
                                        step="0.01"
                                        validation="required"/>
                                    <span class="text-xs text-gray-400">
                                        Establece el precio del producto con decimales
                                    </span>
                                </div>
                            </div>

                            <div class="py-2 px-4">
                                <div>
                                    <label for="stock" class="text-base"> Stock <span class="text-red-500"> * </span> </label>
                                    <FormKit 
                                        type="number"
                                        id="stock"
                                        name="stock"
                                        input-class="w-full border border-gray-200 text-gray-600 p-2.5 rounded-lg my-2 focus:outline-none"
                                        message-class="text-red-500 text-sm m-1.5 font-light"
                                        placeholder="Ej: 5"
                                        min="0"
                                        max="15"
                                        validation="required"/>
                                    <span class="text-xs text-gray-400">
                                        Establece el stock disponible del producto
                                    </span>
                                </div>
                            </div>

                            <div class="py-2 px-4 mt-7">
                                <div class="flex justify-between items-center">
                                    <NuxtLink
                                        to="/e-admin/products"
                                        class="bg-gray-200 text-gray-400 px-4 py-2 rounded-lg hover:opacity-75 cursor-pointer">
                                            Cancelar
                                    </NuxtLink>
                                    <button
                                        type="submit"
                                        :disabled="isSubmitting"
                                        class="px-4 py-2 rounded-lg hover:opacity-75 cursor-pointer"
                                        :class="!isSubmitting ? 'bg-blue-500 text-white cursor-pointer ' : 'bg-blue-300 text-white cursor-not-allowed'">
                                            {{ !isSubmitting ? 'Crear producto' : 'Creando...' }}
                                    </button>
                                </div>
                            </div>

                    </FormKit>

                </div>

            </main>
        </div>
    </section>

    <AddProductFiles
        v-if="showUploadFilesModal"
        @closeFileModal="closeUploadFileModal"/>

    <AddCategory
        v-if="showCreateCategoryModal"
        @closeCreateCategory="closeCreateCategoryModal()"/>

</template>
