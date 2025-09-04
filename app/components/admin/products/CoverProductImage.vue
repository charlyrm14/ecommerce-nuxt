<script setup lang="ts">    
    import { useFilesStore } from '~~/stores/files';

    const emit = defineEmits<{
        (e: 'openFileModal'): void
    }>()

    const filesStore = useFilesStore()
    const config = useRuntimeConfig();

    watch(() => filesStore.files, (newFiles) => {
    }, { deep: true });

    const removeFiles = () => {
        filesStore.selectFiles = false
        filesStore.files = []
    }

</script>

<template>
    <div class="rounded-lg border border-gray-200 bg-white p-2">
        <div class="py-2 px-4">
            <h2 class="font-bold text-lg"> Portada </h2>
        </div>
        <div
            v-if="!filesStore.selectFiles">
            <div
                @click="emit('openFileModal')"
                class="flex justify-center hover:opacity-75 cursor-pointer relative">
                <div class="shadow-xl border border-gray-200 p-6 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16 text-gray-400 rotate-15">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                </div>
                <div class="absolute -top-4 right-15 shadow-xl rounded-full p-1.5 border border-gray-200 bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                </div>
            </div>
            <div class="px-4 mt-4 mb-2">
                <p class="text-xs text-gray-400"> Agrega una imagen para este producto en formato *.png, *.jpg and *.jpeg </p>
            </div>
        </div>
        <div 
            v-else>
            <div class="flex justify-center">
                <div
                    v-for="file in filesStore.files" 
                    :key="file.id"
                    class="shadow-xl border border-gray-200 p-1 rounded-lg">
                        <img 
                            :src="`${config.public.storageBase}/${file?.response?.[0]?.data?.variants?.thumbnail?.file_path}`" 
                            :alt="file?.id" 
                            class="h-30 w-30 object-cover"/>
                </div>
            </div>
            <div class="flex justify-center">
                <button
                    @click="removeFiles" 
                    class="p-1 mt-2 rounded-full bg-red-500 text-white hover:opacity-75 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                </button>
            </div>
        </div>
    </div>
</template>
