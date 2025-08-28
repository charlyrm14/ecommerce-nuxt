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
            console.log(error)
        }
    }

    return {
        categories,
        alert,
        fetchGetCategories,
        createCategory
    }
})
    