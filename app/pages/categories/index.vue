<script setup lang="ts">
    import CategoryItem from '~/components/user/CategoryItem.vue';
    import SectionHeader from '~/components/user/SectionHeader.vue';
    import { useCategoriesStore } from '~~/stores/categories'

    const categoriesStore = useCategoriesStore();

    onMounted(async() => {
        try {
            await categoriesStore.fetchGetCategories();
        } catch (error) {
            console.error(error)
        }
    })
    
</script>

<template>
    <SectionHeader title="Categorías"/>
    <section class="mt-14 px-4">
        <div 
            v-if="categoriesStore.categories?.data"
            class="grid grid-cols-2 md:grid-cols-4 gap-3">
                <CategoryItem
                    v-for="category in categoriesStore.categories?.data"
                    :key="category.id"
                    :category="category"/>
        </div>
        <div v-else>
            <h1 class="text-2xl dark:text-white text-center"> Aquí veras las categorías más populares</h1>
        </div>
    </section>
</template>
