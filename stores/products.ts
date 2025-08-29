import { defineStore } from 'pinia'
import type { Product } from "~~/types/Product";
import type { Pagination } from "~~/types/Pagination";
import type { ApiResponse } from "~~/types/ApiResponse";

export const useProductsStore = defineStore('products', () => {

    const config = useRuntimeConfig();

    const products = ref<Pagination<Product> | null>(null);

    const fetchGetProducts = async(page = 1) => {
        try {

            const response = await $fetch<ApiResponse<Pagination<Product>>>(
                `${config.public.apiBaseUrl}/products?page=${page}`
            );

            products.value = response.data;
            
        } catch (error) {
            console.error(error)
        }
    }

    return {
        products, 
        fetchGetProducts
    }
})
