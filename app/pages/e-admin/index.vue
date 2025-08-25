<script setup lang="ts">
    import Breadcrumb from '~/components/admin/Breadcrumb.vue';
    
    definePageMeta({
        layout: 'admin'
    })

</script>

<template>
    <Breadcrumb/>
    <section>
        <h2 class="mb-4 text-xl font-bold">Dashboard</h2>
        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <article class="h-32 rounded-lg border border-gray-200 bg-white"></article>
            <article class="h-32 rounded-lg border border-gray-200 bg-white"></article>
            <article class="h-32 rounded-lg border border-gray-200 bg-white"></article>
            <article class="h-32 rounded-lg border border-gray-200 bg-white"></article>
        </div>
    </section>
    <section class="mt-7">
        <div class="grid gap-6 md:grid-cols-1 xl:grid-cols-2">
            <article class="h-62 rounded-lg border border-gray-200 bg-white"></article>
            <article class="h-62 rounded-lg border border-gray-200 bg-white"></article>
        </div>
    </section>
    <section class="mt-7">
        <div class="grid gap-6 md:grid-cols-1 xl:grid-cols-2">
            <article class="h-62 rounded-lg border border-gray-200 bg-white"></article>
            <article class="h-62 rounded-lg border border-gray-200 bg-white"></article>
        </div>
    </section>
    <section class="mt-7">
        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <article class="h-32 rounded-lg border border-gray-200 bg-white"></article>
            <article class="h-32 rounded-lg border border-gray-200 bg-white"></article>
            <article class="h-32 rounded-lg border border-gray-200 bg-white"></article>
            <article class="h-32 rounded-lg border border-gray-200 bg-white"></article>
        </div>
    </section>
    <section class="mt-7">
        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <article class="h-32 rounded-lg border border-gray-200 bg-white"></article>
            <article class="h-32 rounded-lg border border-gray-200 bg-white"></article>
            <article class="h-32 rounded-lg border border-gray-200 bg-white"></article>
            <article class="h-32 rounded-lg border border-gray-200 bg-white"></article>
        </div>
    </section>
</template>