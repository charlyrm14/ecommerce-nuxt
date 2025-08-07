<script setup>
    import Header from '~/components/layout/header.vue';
    import CategoryTeaser from '~/components/user/CategoryTeaser.vue';
    import ProductItem from '~/components/user/ProductItem.vue';   
    
</script>

<template>
    <Header/>
    <CategoryTeaser/>
    <section>
        <div class="px-3 mt-7">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 pb-24">
                <ProductItem/>
                <ProductItem/>
            </div>
        </div>
    </section>
</template>