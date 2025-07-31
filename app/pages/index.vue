<script setup>
    import Header from '~/components/layout/header.vue';
    import ProductItem from '~/components/user/ProductItem.vue';    
</script>

<template>
    <Header/>
    <section>
        <div class="px-3 mt-52">
            <div class="h-[calc(100vh-90px-52px)] overflow-y-auto">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 pb-24">
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                </div>
            </div>
        </div>
    </section>
</template>