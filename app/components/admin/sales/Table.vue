<script setup lang="ts">
    import TableItem from '../sales/TableItem.vue';

    
</script>

<template>
    <table class="border-collapse w-full">
        <thead>
            <tr>
                <th class="border-b border-gray-100 text-gray-400 font-bold text-sm text-start px-4 py-2"> Orden ID </th>
                <th class="border-b border-gray-100 text-gray-400 font-bold text-sm text-start px-4 py-2"> Cliente </th>
                <th class="border-b border-gray-100 text-gray-400 font-bold text-sm text-start px-4 py-2"> Status </th>
                <th class="border-b border-gray-100 text-gray-400 font-bold text-sm text-start px-4 py-2"> Fecha </th>
                <th class="border-b border-gray-100 text-gray-400 font-bold text-sm text-start px-4 py-2"> Acciones </th>
            </tr>
        </thead>
        <tbody>
            <TableItem/>
            <TableItem/>
        </tbody>
    </table>
</template>
