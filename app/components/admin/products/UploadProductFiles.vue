<script setup lang="ts">
    import FileUploader from '~/components/common/FileUploader.vue';
    import FileGallery from '~/components/common/FileGallery.vue';
</script>

<template>
    <div class="mt-7 rounded-lg border border-gray-200 bg-white p-4">
        <div class="mb-3">
            <h2 class="font-light text-gray-400"> 
                Agrega fotos a tu producto para destacar sus características y generar más interés entre tus compradores
            </h2>
        </div>

        <FileUploader
            accept="image/*"
            type="image"
            :multiple="false"
            :maxFiles="5"
            :maxSizeMB="5"
            :concurrency="1"/>

        <FileGallery/>

    </div>
</template>
