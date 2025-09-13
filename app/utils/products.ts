import ProductDescription from "~/components/user/products/ProductDescription.vue"
import ProductReviews from "~/components/user/products/ProductReviews.vue"

export const sectionTabs = () => {

    return [
        { id: 1, title: 'Información', key: ProductDescription},
        { id: 2, title: 'Opiniones', key: ProductReviews},
    ]
}