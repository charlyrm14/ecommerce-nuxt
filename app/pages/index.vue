<script setup>
    import Header from '~/components/layout/header.vue';
    import Categories from '~/components/user/Categories.vue';
    import ProductItem from '~/components/user/ProductItem.vue';   
</script>

<template>
    <Header/>
    <Categories/>
    <section>
        <div class="px-3 mt-12">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 pb-24">
                <ProductItem/>
                <ProductItem/>
            </div>
        </div>
    </section>
</template>