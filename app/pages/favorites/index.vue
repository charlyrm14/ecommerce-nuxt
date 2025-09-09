<script setup>
    import FavoriteItem from '~/components/user/favorites/FavoriteItem.vue';
    import SectionHeader from '~/components/user/layouts/SectionHeader.vue';
    import { useFavoritesStore } from '~~/stores/favorites';
    import Heart from '~/assets/media/chat-bubble.png'

    const favoritesStore = useFavoritesStore()

    onMounted(favoritesStore.getFavorites)

</script>

<template>
    <SectionHeader 
        title="Favoritos"/>

    <section class="mt-10 px-4">
        <div
            v-if="favoritesStore.favorites.length > 0"
            class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <FavoriteItem
                v-for="favorite in favoritesStore.favorites"
                :key="favorite.id"
                :favorite="favorite"/>
        </div>
        <div v-else>
            <div class="flex justify-center items-center">
                <img 
                    :src="Heart" 
                    alt="Heart" 
                    class="w-80 drop-shadow-2xl"/>
            </div>
            <h1 class="text-red-500 text-center text-base font-light mt-8">
                Aún no tienes productos en tu lista de favoritos. ¡Explora nuestro catálogo y guarda los que más te gusten!
            </h1>
        </div>
    </section>
    
</template>
