<script setup lang="ts">

    defineProps<{
        description: string
    }>()

</script>

<template>
    <div class="mt-4">
        <h4 class="text-base font-light dark:text-gray-400"> Descripción </h4>
        <p class="my-2 text-sm font-extralight dark:text-white">
            {{ description ?? 'No hay descripción' }}
        </p>
    </div>
</template>
