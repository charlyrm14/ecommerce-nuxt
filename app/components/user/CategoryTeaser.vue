<script setup lang="ts">

    interface CategoryTeaserProps {
        title?: string;
        subtitle?: string;
        link?: string;
    }

    const props = withDefaults(defineProps<CategoryTeaserProps>(), {
        title: 'Encuentra tu Producto',
        subtitle: 'Descubre todos los productos organizados por lo que más te interesa. ¡Encuentra lo que buscas fácilmente!',
        link: 'categories',
    })

</script>

<template>
    <section class="px-3 mt-40">
        <div class="bg-white dark:bg-dark-light border border-gray-200 dark:border-none p-4 rounded-lg shadow">
            <div class="w-[60%] md:w-full">
                <h2 class="dark:text-white text-xl font-bold"> {{ title }} </h2>
                <p class="dark:text-white text-xs md:text-sm font-extralight my-3"> {{ subtitle }} </p>
            </div>
            <NuxtLink
                :to="link" 
                class="bg-red-500 text-white px-4 py-1 rounded-4xl font-extralight cursor-pointer hover:opacity-75">
                    Explorar ahora
            </NuxtLink>
        </div>
    </section>
</template>