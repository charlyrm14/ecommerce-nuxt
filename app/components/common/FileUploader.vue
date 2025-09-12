<script setup lang="ts">

    import type { FileUploaderOptions } from '~~/types/FileUploader'
    import { useFileUploader } from '~/composables/useFileUploader';
    import MessageAlert from '../common/MessageAlert.vue';  
    import { useFilesStore } from '~~/stores/files';
    import FiletransferImg from '~/assets/media/file-transfer.png'
    import { isImage } from '~/utils/files'

    const props = defineProps<FileUploaderOptions>()
    
    const {
        isDragging,
        fileInput,
        config,
        message,
        onDragOver,
        onDragLeave,
        onDrop,
        openFileDialog,
        removeFile,
    } = useFileUploader(props)

    const filesStore = useFilesStore();

</script>

<template>
    <div>
        <div>
            <div
                @dragover.prevent="onDragOver"
                @dragleave.prevent="onDragLeave"
                @drop.prevent="e => onDrop(e, props)"
                class="w-full p-8  rounded-lg"
                :class=" isDragging 
                    ? 'bg-blue-200 border-2 border-dashed border-blue-300' 
                    :  'bg-gray-50 border border-dashed border-gray-300' ">
                        <div class="cursor-pointer">
                            <div class="flex justify-center items-center">
                                <img 
                                    :src="FiletransferImg" 
                                    alt="Upload file" 
                                    class="w-40 drop-shadow-2xl">
                            </div>
                            <div class="flex justify-center items-center mt-3">
                                <p class="text-center text-xs text-gray-500"> 
                                    Suelta tus archivos aquí,
                                        <span 
                                            @click="openFileDialog"
                                            class="underline text-pink-500"> o haz click para buscarlos </span>
                                </p>
                            </div>
                            <div class="flex justify-center items-center">
                                <input 
                                    ref="fileInput" 
                                    type="file" 
                                    :accept="accept"  
                                    :multiple="multiple"
                                    class="hidden"/>
                            </div>
                        </div>
            </div>
        </div>

        <MessageAlert
            v-if="message.status"
            :title="message.title"
            :type="message.type"/>


        <div class="my-6" v-if="filesStore.files.length > 0">
            <div>
                <h4 class="text-sm font-light text-gray-500"> Archivos cargados </h4>
            </div>
            <div
                v-for="file in filesStore.files?.[0]"
                class="border border-gray-200 px-3 pt-2 my-2 rounded-lg">
                    <div class="flex justify-between items-start">
                        <div class="flex justify-start gap-x-2">
                            <div class="bg-gray-200 rounded-lg p-1">
                                <img
                                    v-if="isImage(file?.mime_type)"
                                    :src="`${config.public.storageBase}/${file?.variants?.[0]?.file_path}`" 
                                    alt="1"
                                    class="w-15 h-15 rounded-lg">
                                <svg
                                    v-else
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke-width="1.5" 
                                    stroke="currentColor" 
                                    class="w-15 h-15 text-gray-400">
                                        <path 
                                            stroke-linecap="round" 
                                            stroke-linejoin="round" 
                                            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>
                            </div>
                            <p class="text-base text-gray-700 truncate"> 
                                {{ file?.original_name ?? 'Unknown' }}
                                    <span class="block text-base text-gray-400"> 
                                        5MB
                                    </span>
                            </p>
                        </div>
                        <div>
                            <button
                                class="text-gray-300 hover:text-red-500 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="w-full rounded-lg h-2 my-2 bg-green-500" >
                        <div class="h-2 rounded-lg transition-all duration-200" style="width: 100%"></div>
                    </div>
            </div>
        </div>

    </div>
</template>