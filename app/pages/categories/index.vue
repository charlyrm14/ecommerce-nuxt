<script setup lang="ts">
    import CategoryItem from '~/components/user/CategoryItem.vue';
    import SectionHeader from '~/components/user/SectionHeader.vue';
    
</script>

<template>
    <SectionHeader title="Categorías"/>
    <section class="mt-14 px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <CategoryItem name="Electrónica"/>
            <CategoryItem name="Hogar"/>
            <CategoryItem name="Mujer"/>
            <CategoryItem name="Hombre"/>
        </div>
    </section>
</template>
