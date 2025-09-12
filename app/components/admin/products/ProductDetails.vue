<script setup lang="ts">

    import { useCategoriesStore } from '~~/stores/categories';
    
    type Error = {
        text: string
        status: boolean
    }

    type Category = {
        id: number
        name: string
    }

    defineProps<{
        error?: Error
    }>()

    const emit = defineEmits<{
        (e: 'openCategoryModal'): void,
        (e: 'categorySelected', id: number): void
    }>()

    const showCategoriesList = ref<boolean>(false)
    const selectedCategory = ref<Category | null>(null)

    const categoriesStore = useCategoriesStore();

    onMounted(async() => {
        try {
            await categoriesStore.fetchGetCategories();
        } catch (error) {
            console.error(error)
        }
    })

    const selectCategory = (category: Category) => {
        selectedCategory.value = category
        categoriesStore.query = category.name
    }

</script>

<template>
    <div class="mt-7 rounded-lg border border-gray-200 bg-white p-2">

        <div class="py-2 px-4">
            <h2 class="font-bold text-lg"> Detalles del producto </h2>
        </div>

        <div class="px-4">
            <div>

                <div class="relative w-72">

                    <label for="category_id" class="text-sm text-blue-500"> Categorías </label>
                    
                    <input
                        v-model="categoriesStore.query"
                        type="text"
                        placeholder="Seleccionar categoría"
                        name="category_id"
                        id="category_id"
                        class="w-full border border-gray-200 p-2 rounded-lg mt-2 text-gray-600 mb-0.5 focus:outline-none"
                        @click="showCategoriesList = !showCategoriesList"/>

                    <ul 
                        v-if="categoriesStore.query.length >= 0 && showCategoriesList"
                        class="absolute mt-1 w-full bg-white border border-gray-200  rounded-lg shadow-lg max-h-60 overflow-auto z-10 px-2 py-1">
                            <li 
                                v-for="category in categoriesStore.filteredCategories"
                                :key="category.id"
                                @click="selectCategory(category)"
                                class="px-3 py-2 cursor-pointer text-gray-600 hover:bg-blue-500 hover:text-white transition-colors font-light rounded-lg my-1">
                                    {{ category?.name }}
                            </li>
                    </ul>

                    <p  
                        v-if="selectedCategory"
                        class="mt-2 text-sm text-gray-500">
                            Seleccionado: <span class="font-light bg-blue-400 text-white rounded-lg px-2 py-0.5 hover:opacity-75"> {{ selectedCategory.name }} </span>
                    </p> 

                </div>
                
                <span 
                    v-if="error?.status"
                    class="my-1 text-red-500 text-sm block">
                        {{ error?.text }}
                </span>

            </div>
        </div>

        <div class="px-4 mt-4">
            <button
                @click="emit('openCategoryModal')"
                class="bg-blue-100 text-blue-500 text-sm px-4 py-2 flex justify-center items-center gap-x-2 w-full rounded-lg hover:opacity-75 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg> Crear nueva categoría
            </button>
        </div>

        <div class="px-4 mt-4">
            <div>
                <label for="brand_id" class="text-sm text-purple-500"> Marca </label>
                <select 
                    name="brand_id" 
                    id="brand_id"
                    class="w-full border border-gray-200 p-2 rounded-lg mt-2 text-gray-600 mb-0.5 focus:outline-none">
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
                class="bg-purple-100 text-purple-500 text-sm px-4 py-2 flex justify-center items-center gap-x-2 w-full rounded-lg hover:opacity-75 cursor-pointer mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />
                    </svg> Crear nueva marca
            </button>
        </div>

    </div>
</template>
