import ProductDescription from "~/components/user/products/ProductDescription.vue"
import ProductReviews from "~/components/user/products/ProductReviews.vue"
import { useProductsStore } from "~~/stores/products"
import { useFilesStore } from "~~/stores/files"

type PayloadImages = {
    id: number
    is_main: boolean
}

export const sectionTabs = () => {

    return [
        { id: 1, title: 'Información', key: ProductDescription},
        { id: 2, title: 'Opiniones', key: ProductReviews},
    ]
}

export const payloadImages = (): PayloadImages[] => {

    const productsStore = useProductsStore()
    const filesStore = useFilesStore()

    /* There are uploaded files and the user select a main image */
    if (productsStore.form.images.length > 0) {
        return productsStore.form.images
    }

    /* 
    * There are files uploaded but the user has not selected a main image 
    * and the first uploaded image is assigned as the main image.
    */
    if(filesStore.files?.[0]?.length) { 

        return filesStore.files[0].map((file, index) => ({
            id: file.id,
            is_main: index === 0
        }))
    }
    
    // Are not uploaded files
    return [];
}