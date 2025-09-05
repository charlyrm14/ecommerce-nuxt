<script setup>
    import Header from '~/components/layout/user/header.vue';
    import PopularCategories from '~/components/user/categories/PopularCategories.vue';
    import ProductItem from '~/components/user/products/ProductItem.vue';   
    
</script>

<template>
    <Header/>
    <PopularCategories/>

    <section class="px-4 mt-7">
        <div class="my-3">
            <h2 class="dark:text-white"> Productos populares </h2>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 pb-24 overflow-x-auto">
            <ProductItem/>
            <ProductItem/>
        </div>
    </section>
</template>