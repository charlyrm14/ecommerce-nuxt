<script setup lang="ts">

    import type { Category } from '~~/types/Product';
    import TableItem from './TableItem.vue';
    
    defineProps<{
        categories: Category[]
    }>()

    const emit = defineEmits<{
        (e: 'openDeleteModal', category: Category): void
    }>()
</script>

<template>
    <table class="border-collapse w-full">
        <thead>
            <tr>
                <th class="border-b border-gray-100 text-gray-400 font-bold text-sm text-start px-4 py-2"> Nombre </th>
                <th class="border-b border-gray-100 text-gray-400 font-bold text-sm text-start px-4 py-2"> Estatus </th>
                <th class="border-b border-gray-100 text-gray-400 font-bold text-sm text-start px-4 py-2"> Acciones </th>
            </tr>
        </thead>
        <tbody>
            <TableItem
                v-for="category in categories"
                :key="category.id"
                :category="category"
                @openDeleteModal="emit('openDeleteModal', category)"/>
        </tbody>
    </table>
</template>
