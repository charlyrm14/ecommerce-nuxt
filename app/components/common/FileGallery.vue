<script setup lang="ts">
    import { useFilesStore } from '~~/stores/files';
    import { isImage } from '#imports';
    import { useProductsStore } from '~~/stores/products';

    const filesStore = useFilesStore()
    const productStore = useProductsStore()
    const config = useRuntimeConfig();

    const selectedImage = (id: number): void => {
        filesStore?.files?.[0].forEach(file => {
            file.is_main = file.id === id
        })

        productStore.form.images = filesStore?.files?.[0].map(file => ({
            id: file.id,
            is_main: file.is_main
        }))
    }

</script>

<template>
    <div
        v-if="filesStore?.files?.[0]"
        class="my-6">
        <div class="mb-3">
            <h2 class="font-light text-indigo-500 text-sm"> 
                Selecciona la imagen principal
                    <span class="block text-xs text-gray-600">
                        Si no eliges ninguna, se asignará automáticamente.
                    </span>
            </h2>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
        
            <div
                v-for="file in filesStore?.files?.[0]"
                :key="file?.id"
                @click="file && isImage(file?.mime_type) && selectedImage(file?.id)"
                class="bg-white rounded-lg p-2"
                :class="file?.is_main ? 'border-2 border-blue-500' : 'border border-gray-200'">
                    <div
                        v-if="file && isImage(file?.mime_type)"
                        class="w-full h-40 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center cursor-pointer">
                        <img
                            :src="`${config.public.storageBase}/${file?.file_path}`" 
                            :alt="file?.original_name + '-' + file?.id"
                            class="w-full h-full rounded-lg"/>
                    </div>
                    <div
                        v-else
                        class="w-full h-40 rounded-lg bg-gray-200 flex items-center justify-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-30 h-30 text-gray-400/60">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg>
                    </div>
                    <div class="px-2 mt-3">
                        <div class="flex justify-between items-start">
                            <p class="text-gray-600 text-sm truncate"> 
                                {{ file?.original_name ?? 'Unknown' }} <span class="block text-sm text-gray-400"> 2MB </span>
                            </p>
                            <button class="text-gray-400 cursor-pointer hover:text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>
