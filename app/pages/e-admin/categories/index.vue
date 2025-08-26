<script setup lang="ts">
    import Breadcrumb from '~/components/admin/Breadcrumb.vue';
    import AddCategory from '~/components/admin/categories/AddCategory.vue';
    import DeleteCategory from '~/components/admin/categories/DeleteCategory.vue';
    
    definePageMeta({
        layout: 'admin'
    })

    const isCreateCategoryModalOpen = ref<boolean>(false)
    const isDeleteCategoryModalOpen = ref<boolean>(false)

    const menuActions = ref<boolean>(false)
    
    const openCreateCategoryModal = () => {
        isCreateCategoryModalOpen.value = true;
    }
    
    const closeCreateCategoryModal = () => {
        isCreateCategoryModalOpen.value = false;
    }

    const openDeleteCategoryModal = () => {
        isDeleteCategoryModalOpen.value = true;
    }
    
    const closeDeleteCategoryModal = () => {
        isDeleteCategoryModalOpen.value = false;
    }

</script>

<template>
    <Breadcrumb
        main="Categorías"
        secondary="Lista"/>

    <section class="mt-7">
        <div class="border border-gray-200 rounded-xl bg-white">
            <div class="p-4 border-b border-gray-200">
                <div class="flex justify-between items-center">
                    <div class="flex justify-between items-center gap-x-3">
                        <input 
                            type="text"
                            class="border border-gray-200 px-4 py-2 rounded-lg hidden md:block"
                            placeholder="Search...">
                        <button class="bg-blue-100 text-blue-500 p-2 md:px-4 md:py-2 rounded-lg flex gap-x-2 font-light cursor-pointer hover:opacity-75">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                            </svg> Filters
                        </button>
                    </div>
                    <button 
                        @click="openCreateCategoryModal()"
                        class="bg-blue-500 text-white font-light rounded-lg p-2 md:px-4 md:py-2 cursor-pointer hover:opacity-75 flex items-center gap-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg> Añadir categoría
                    </button>
                </div>
            </div>
            <div>
                <table class="border-collapse w-full">
                    <thead>
                        <tr>
                            <th class="border-b border-gray-100 text-gray-400 font-bold text-sm text-start px-4 py-2"> Nombre </th>
                            <th class="border-b border-gray-100 text-gray-400 font-bold text-sm text-start px-4 py-2"> Estatus </th>
                            <th class="border-b border-gray-100 text-gray-400 font-bold text-sm text-start px-4 py-2"> Acciones </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b border-gray-100">
                            <td class="px-4 py-3">
                                <div class="flex items-start gap-x-2">
                                    <div class="bg-gray-100 border border-gray-200 rounded-lg text-gray-600 p-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="text-gray-600 text-base"> 
                                            Electrónica 
                                                <span class="text-xs block"> 2025-12-01 </span>
                                        </p>                                    
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span class="bg-green-100 text-green-500 px-4 py-0.5 rounded-lg border border-green-200 font-bold cursor-pointer hover:opacity-75 text-sm"> Activa </span>
                            </td>
                            <td>
                                <div class="relative">
                                    <button
                                        @click="menuActions = !menuActions"
                                        class="bg-gray-100 text-gray-600 border border-gray-200 rounded-lg px-4 py-2 cursor-pointer hover:opacity-75 flex items-center gap-x-1 text-sm">
                                            Actions 
                                                <svg 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    fill="none" 
                                                    viewBox="0 0 24 24" 
                                                    stroke-width="1.5" 
                                                    stroke="currentColor" 
                                                    class="size-4">
                                                        <path 
                                                            stroke-linecap="round" 
                                                            stroke-linejoin="round" 
                                                            :d="menuActions ? 'm4.5 15.75 7.5-7.5 7.5 7.5' : 'm19.5 8.25-7.5 7.5-7.5-7.5'" />
                                                </svg>
                                    </button>
                                    <div
                                        v-if="menuActions"
                                        class="absolute -bottom-25 -left-14 bg-white border border-gray-200 w-40 z-50 rounded-lg shadow-lg">
                                        <div class="px-2 my-2">
                                            <button class="hover:bg-gray-100 hover:rounded-lg w-full cursor-pointer px-2 py-1 border-b border-gray-100 text-start font-light flex items-center gap-x-2"> 
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                                </svg> Editar 
                                            </button>
                                        </div>
                                        <div class="px-2 my-2">
                                            <button 
                                                @click="openDeleteCategoryModal()"
                                                class="hover:bg-red-100 hover:text-red-500 hover:rounded-lg w-full cursor-pointer px-2 py-1 border-b border-gray-100 text-start font-light flex items-center gap-x-2"> 
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                    </svg> Eliminar 
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="px-4 py-3">
                                <div class="flex items-start gap-x-2">
                                    <div class="bg-gray-100 border border-gray-100 rounded-lg text-gray-600 p-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="text-gray-600 text-base"> 
                                            Electrónica 
                                                <span class="text-xs block"> 2025-12-01 </span>
                                        </p>                                    
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span class="bg-green-100 text-green-500 px-4 py-0.5 rounded-lg border border-green-200 font-bold cursor-pointer hover:opacity-75 text-sm"> Activa </span>
                            </td>
                            <td>
                                <button class="bg-gray-100 text-gray-600 border border-gray-200 rounded-lg px-4 py-2 cursor-pointer hover:opacity-75 flex items-center gap-x-1 text-sm ">
                                    Actions 
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="p-4 border-t border-gray-200">
                <div class="flex justify-between items-center">
                    <p class="text-xs"> Mostrando <span class="font-bold"> 10 </span> categorías por página </p>
                    <div class="flex justify-between items-center gap-x-3">
                        <button class="text-gray-500 rounded-lg cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <button class="bg-gray-100 text-gray-500 border border-gray-200 px-2 rounded-lg cursor-pointer"> 1 </button>
                        <button class="text-gray-500 cursor-pointer"> 2 </button>
                        <button class="text-gray-500 cursor-pointer"> 3 </button>
                        <button class="text-gray-500 cursor-pointer"> ... </button>
                        <button class="text-gray-500 rounded-lg cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <AddCategory
        v-if="isCreateCategoryModalOpen"
        @closeCreateCategory="closeCreateCategoryModal()"/>

    <DeleteCategory
        v-if="isDeleteCategoryModalOpen"
        @closeDeleteCategory="closeDeleteCategoryModal()"/>

</template>
