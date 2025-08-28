import { defineStore } from 'pinia'
import type { Category } from "~~/types/Product";
import type { Pagination } from "~~/types/Pagination";
import type { ApiResponse } from "~~/types/ApiResponse";
import { useAlert } from '~/composables/useAlert';

export const useCategoriesStore = defineStore('categories', () => {

    type NewCategory = {
        name: string
        status: number
    }

    type DeleteCategory = {
        id: number
        name: string
    }
    
    const config = useRuntimeConfig();
    const { alert, handleAlert } = useAlert()

    const categories = ref<Pagination<Category> | null>(null);

    const fetchGetCategories = async(page = 1) => {
        try {

            const response = await $fetch<ApiResponse<Pagination<Category>>>(
                `${config.public.apiBaseUrl}/categories?page=${page}`
            );

            categories.value = response.data;
            
        } catch (error) {
            console.error(error)
        }
    }

    const createCategory = async(data: NewCategory) => {
        try {

            const response = await $fetch<ApiResponse<Category>>(`${config.public.apiBaseUrl}/categories`, {
                method: 'POST',
                body: data
            })

            categories.value?.data.push(response.data)

            handleAlert('Éxito', 'Categoría creada con éxito', 'success')
            
        } catch(error) {
            console.error(error)
        }
    }

    const deleteCategory = async(data: DeleteCategory) => {
        try {

            const { id, name } = data

            await $fetch(`${config.public.apiBaseUrl}/categories/${id}`, {
                method: 'DELETE'
            })
            
            if(categories.value) {
                categories.value.data = categories.value.data.filter(c => c.id !== id)
            }

            handleAlert('Éxito', `Categoría ${name} eliminada con éxito`, 'success')

        } catch (error) {
            console.error(error)
        }
    }

    return {
        categories,
        alert,
        fetchGetCategories,
        createCategory,
        deleteCategory
    }
})
    