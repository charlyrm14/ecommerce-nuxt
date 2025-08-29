<script setup lang="ts">

    import TableItem from '../products/TableItem.vue';
    import type { Product } from '~~/types/Product';

    defineProps<{
        products: Product[]
    }>()

    const emit = defineEmits(['openDeleteProduct'])
    
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
                v-for="product in products"
                :key="product.id"
                :product="product"
                @openDeleteProduct="emit('openDeleteProduct')"/>
        </tbody>
    </table>
</template>
