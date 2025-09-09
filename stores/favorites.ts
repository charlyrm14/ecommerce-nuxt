import { defineStore } from 'pinia'
import type { Product } from "~~/types/Product";

const STORAGE_KEY = 'favorites'

export const useFavoritesStore = defineStore('favorites', () => {

    const favorites = ref<Product[]>([])

    const getFavorites = () => {
        const data = localStorage.getItem(STORAGE_KEY)
        favorites.value = data ? (JSON.parse(data) as Product[]) : []
    }

    const addProduct = (product: Product) => {
        if(!existsInFavorites(product)) {
            favorites.value.push(product)
            storeInLocalStorage()
        } else {
            removeFromFavorites(product.id)
        }        
    }

    const storeInLocalStorage = () => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites.value))
    }

    const existsInFavorites = (product: Product) => {
        return favorites.value.some(favorite => favorite.id === product.id)
    }

    const removeFromFavorites = (productId: Product['id'] | number | string) => {
        favorites.value = favorites.value.filter(favorite => favorite.id !== productId)
        storeInLocalStorage()
    }

    return {
        favorites,
        getFavorites,
        addProduct,
        existsInFavorites,
        removeFromFavorites
    }
})