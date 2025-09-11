<script setup lang="ts">

    import Alert from '~/components/common/Alert.vue';
    import Breadcrumb from '~/components/admin/layouts/Breadcrumb.vue';
    import AddCategory from '~/components/admin/categories/AddCategory.vue';
    import DeleteCategory from '~/components/admin/categories/DeleteCategory.vue';
    import PaginationCategory from '~/components/admin/categories/PaginationCategory.vue';
    import Table from '~/components/admin/categories/Table.vue';
    import { useCategoriesStore } from '~~/stores/categories';
    import type { Category } from '~~/types/Product';

    definePageMeta({
        layout: 'admin'
    })

    const showCreateCategoryModal = ref<boolean>(false)
    const showDeleteCategoryModal = ref<boolean>(false)
    const selectedCategory = ref<Category | null>(null)
    
    const openCreateCategoryModal = () => {
        showCreateCategoryModal.value = true;
    }
    
    const closeCreateCategoryModal = () => {
        showCreateCategoryModal.value = false;
    }

    const openDeleteCategoryModal = (category: Category) => {
        selectedCategory.value = category
        showDeleteCategoryModal.value = true;
    }
    
    const closeDeleteCategoryModal = () => {
        showDeleteCategoryModal.value = false;
    }

    const categoriesStore = useCategoriesStore();

    onMounted(async() => {
        try {
            await categoriesStore.fetchGetCategories();
        } catch (error) {
            console.error(error)
        }
    })

    const handlePageChange = (page: number) => {
        categoriesStore.fetchGetCategories(page)
    }
    
</script>

<template>

    <Breadcrumb
        main="Categorías"
        secondary="Lista"/>

    <Alert
        v-if="categoriesStore.alert.status"
        :title="categoriesStore.alert.title"
        :description="categoriesStore.alert.description"
        :type="categoriesStore.alert.type"/>

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
                <Table
                    v-if="categoriesStore.categories?.data?.length > 0"
                    :categories="categoriesStore.categories?.data"
                    @openDeleteModal="openDeleteCategoryModal"/>

                <h2 
                    v-else
                    class="p-4 text-xl text-center underline text-pink-500 font-light cursor-pointer"
                    @click="openCreateCategoryModal()"> 
                        Aún no tienes categorías, empieza agregando una
                </h2>

            </div>

            <div class="p-4 border-t border-gray-200">
                <div class="flex justify-between items-center">
                    <p class="text-xs"> 
                        Mostrando 
                            <span class="font-bold"> {{ categoriesStore.categories?.per_page }} </span> categorías por página 
                    </p>

                    <PaginationCategory
                        v-if="categoriesStore.categories?.links"
                        :links="categoriesStore.categories.links"
                        @change="handlePageChange"/>
                </div>
            </div>

        </div>
    </section>

    <AddCategory
        v-if="showCreateCategoryModal"
        @closeCreateCategory="closeCreateCategoryModal()"/>

    <DeleteCategory
        v-if="showDeleteCategoryModal"
        :category="selectedCategory"
        @closeDeleteCategory="closeDeleteCategoryModal()"/>

</template>
