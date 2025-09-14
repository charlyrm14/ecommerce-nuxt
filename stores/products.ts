import { defineStore } from 'pinia'
import type { Product } from "~~/types/Product";
import type { Pagination } from "~~/types/Pagination";
import type { ApiResponse } from "~~/types/ApiResponse";

export const useProductsStore = defineStore('products', () => {

    type ImageData = {
        id: number
        is_main: boolean
    }

    type NewProductForm = {
        name: string
        description: string
        price: number
        stock: number
        status: number
        category_id: number
        brand_id: number
        images: Array<ImageData>
    }

    const config = useRuntimeConfig();

    const products = ref<Pagination<Product> | { data: Product[] } | null>(null);
    const error = ref<boolean>(false)
    const form = reactive<NewProductForm>({
        name: '',
        description: '',
        price: 0,
        stock: 0,
        status: 0,
        category_id: 0,
        brand_id: 0,
        images: []
    })

    const { alert, handleAlert } = useAlert()

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

    const createProduct = async(data: NewProductForm) => {
        try {

            const response = await $fetch<ApiResponse<Product>>(`${config.public.apiBaseUrl}/products`, {
                method: 'POST',
                body: data
            })

            if (!products.value) {
                products.value = {
                    data: [response.data],
                }
            } else {
                products.value.data.push(response.data)
            }

            products.value?.data.push(response.data)

            await navigateTo('/e-admin/products')

            handleAlert('Éxito', 'Producto creado con éxito', 'success')
            
        } catch (error) {

            console.error(error)
            handleAlert('Error', 'Error al crear producto', 'error')
        }
    }

    return {
        products, 
        error,
        form,
        alert,
        fetchGetProducts,
        createProduct
    }
})
