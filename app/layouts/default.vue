<script setup>
    import Footer from '~/components/layout/footer.vue';

    const route = useRoute()

    const hideFooter = computed(() => {
        return route.path.startsWith('/products/') && route.params.slug
    })

</script>

<template>
    <div class="min-h-screen bg-gray-100 dark:bg-slate-900">
        <main class="flex-1 px-4 py-2">
            <slot />
        </main>
        <Footer v-if="!hideFooter"/>
    </div>
</template>