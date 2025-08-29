<script setup lang="ts">
    import Breadcrumb from '~/components/admin/Breadcrumb.vue';
    import AddCategory from '~/components/admin/categories/AddCategory.vue';
    import AddProductFiles from '~/components/admin/products/AddProductFiles.vue';
    import UploadFiles from '~/components/admin/FileUploader.vue';
    
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

                <div class="rounded-lg border border-gray-200 bg-white p-4">
                    <div class="py-2 px-4">
                        <h2 class="font-bold text-lg"> Portada </h2>
                    </div>
                    <div
                        @click="showUploadFilesModal = !showUploadFilesModal"
                        class="flex justify-center hover:opacity-75 cursor-pointer relative">
                        <div class="shadow-xl border border-gray-200 p-6 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16 text-gray-400 rotate-15">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </div>
                        <div class="absolute -top-4 right-15 shadow-xl rounded-full p-1.5 border border-gray-200 hover:border-blue-500  bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                            </svg>
                        </div>
                    </div>
                    <div class="px-4 mt-4">
                        <p class="text-xs text-gray-400"> Agrega una imagen para este producto en formato *.png, *.jpg and *.jpeg </p>
                    </div>
                </div>
                
                <div class="mt-7 rounded-lg border border-gray-200 bg-white p-4">
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
                <div class="mt-7 rounded-lg border border-gray-200 bg-white p-4">
                    <div class="py-2 px-4">
                        <h2 class="font-bold text-lg"> Detalles del producto </h2>
                    </div>
                    <div class="px-4">
                        <div>
                            <label for="category_id" class="text-sm"> Categorías </label>
                            <select 
                                name="category_id" 
                                id="category_id"
                                class="w-full border border-gray-200 p-2 rounded-lg mt-2 text-gray-600 mb-2 focus:outline-none">
                                    <option value=""> Selecciona una categoría </option>
                                    <option value="1"> Electrónica </option>
                            </select>
                            <span class="text-xs text-gray-400">
                                Relaciona un producto a una categoría
                            </span>
                        </div>
                    </div>
                    <div class="px-4 mt-4">
                        <button
                            @click="openCreateCategoryModal"
                            class="bg-blue-100 text-blue-500 text-sm px-4 py-2 flex justify-center items-center gap-x-2 w-full rounded-lg hover:opacity-75 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg> Crear nueva categoría
                        </button>
                    </div>
                    <div class="px-4 mt-4">
                        <div>
                            <label for="brand_id" class="text-sm"> Marca </label>
                            <select 
                                name="brand_id" 
                                id="brand_id"
                                class="w-full border border-gray-200 p-2 rounded-lg mt-2 text-gray-600 mb-2 focus:outline-none">
                                    <option value=""> Selecciona una marca </option>
                                    <option value="1"> Sony </option>
                            </select>
                            <span class="text-xs text-gray-400">
                                Relaciona un producto a una marca
                            </span>
                        </div>
                    </div>
                    <div class="px-4 mt-4">
                        <button
                            class="bg-purple-100 text-purple-500 text-sm px-4 py-2 flex justify-center items-center gap-x-2 w-full rounded-lg hover:opacity-75 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />
                                </svg> Crear nueva marca
                        </button>
                    </div>
                </div>
            </aside>

            <main class="md:basis-[80%]">
                <div class="flex justify-start items-center gap-x-3">
                    <div class="border-b-3 border-blue-500">
                        <h2 class="text-blue-500 text-lg hover:opacity-75 cursor-pointer"> General </h2>
                    </div>
                </div>
                <div class="mt-7 rounded-lg border border-gray-200 bg-white p-4">
                    <div class="py-2 px-4">
                        <div>
                            <label for="name" class="text-base"> Nombre <span class="text-red-500"> * </span> </label>
                            <input 
                                type="text"
                                name="name" 
                                id="name"
                                class="w-full border border-gray-200 text-gray-600 p-2.5 rounded-lg my-2 focus:outline-none"
                                placeholder="Ej: Televisión, playera, cocina"/>
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
                            <input 
                                type="text"
                                name="price" 
                                id="price"
                                class="w-full border border-gray-200 text-gray-600 p-2.5 rounded-lg my-2 focus:outline-none"
                                placeholder="Ej: 1299.99"/>
                            <span class="text-xs text-gray-400">
                                Establece el precio del producto con decimales
                            </span>
                        </div>
                    </div>
                    <div class="py-2 px-4">
                        <div>
                            <label for="stock" class="text-base"> Stock <span class="text-red-500"> * </span> </label>
                            <input 
                                type="text"
                                name="stock" 
                                id="stock"
                                class="w-full border border-gray-200 text-gray-600 p-2.5 rounded-lg my-2 focus:outline-none"
                                placeholder="Ej: 5"/>
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
                                @click="handleSubmit()"
                                :disabled="isSubmitting"
                                class="px-4 py-2 rounded-lg hover:opacity-75 cursor-pointer"
                                :class="!isSubmitting ? 'bg-blue-500 text-white cursor-pointer ' : 'bg-blue-300 text-white cursor-not-allowed'">
                                    {{ !isSubmitting ? 'Crear producto' : 'Creando...' }}
                            </button>
                        </div>
                    </div>
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
