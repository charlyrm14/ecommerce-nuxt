<script setup>
    import FavoriteItem from '~/components/user/favorites/FavoriteItem.vue';
    import SectionHeader from '~/components/user/layouts/SectionHeader.vue';
</script>

<template>
    <SectionHeader 
        title="Favoritos"/>

    <section class="mt-10 px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <FavoriteItem/>
        </div>
    </section>
    
</template>
