import { defineStore } from 'pinia'
import type { Category } from "~~/types/Product";
import type { Pagination } from "~~/types/Pagination";
import type { ApiResponse } from "~~/types/ApiResponse";

export const useCategoriesStore = defineStore('categories', () => {

    const config = useRuntimeConfig();
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

    return {
        categories,
        fetchGetCategories
    }
})
    