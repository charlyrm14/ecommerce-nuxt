<script setup lang="ts">

    import type { FileUploaderOptions } from '~~/types/FileUploader'
    import { useFileUploader } from '~/composables/useFileUploader';
    import MessageAlert from '../common/MessageAlert.vue';  
    import { useFilesStore } from '~~/stores/files';
    
    const props = defineProps<FileUploaderOptions>()
    
    const {
        isDragging,
        fileInput,
        uploadStatus,
        uploadProgress,
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
                    :  'bg-gray-100 border border-dashed border-gray-300' ">
                        <div class="cursor-pointer">
                            <div class="flex justify-center items-center">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke-width="1.5" 
                                    stroke="currentColor" 
                                    class="size-20"
                                    :class="isDragging ? 'text-blue-300' : 'text-gray-300'">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                                </svg>
                            </div>
                            <div class="flex justify-center items-center">
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

        <div
            v-if="filesStore.files.length > 0"
            class="my-6">
                <div>
                    <h4 class="text-sm font-light text-gray-500"> Archivos cargados </h4>
                </div>
                <div
                    v-for="file in filesStore.files" 
                    :key="file.id"
                    class="border border-gray-200 px-3 pt-2 my-2 rounded-lg">
                        <div class="flex justify-between items-center">
                            <div class="flex justify-start gap-x-2">
                                <p>{{ file?.response?.data?.variants?.thumbnail?.file_path }}</p>
                                <div 
                                    class="bg-gray-200 rounded-lg p-1">
                                    <img
                                        v-if="props.type === 'image'"
                                        :src="`${config.public.storageBase}/${file?.response?.[0]?.data?.variants?.thumbnail?.file_path}`" 
                                        :alt="file?.id"
                                        class="w-15 h-15 rounded-lg">
                                </div>
                                <p 
                                    v-if="props.type === 'image'"
                                    class="text-sm text-gray-700 truncate"> 
                                        {{ file?.response?.[0]?.data?.variants?.thumbnail?.original_name }}
                                            <span class="block text-xs text-gray-400"> 
                                                {{ (file.file.size / 1024 / 1024).toFixed(2) }} MB | 
                                                    <span class="font-bold text-green-700"> {{ uploadProgress }} % </span> 
                                            </span>
                                </p>
                            </div>
                            <div>
                                <button
                                    @click="removeFile"
                                    class="text-gray-300 hover:text-red-500 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div 
                            class="w-full rounded-lg h-2 my-2" 
                            :class="{
                                'bg-gray-100': uploadStatus === 'pending',
                                'bg-blue-500': uploadStatus === 'uploading',
                                'bg-green-500': uploadStatus === 'success',
                                'bg-red-500': uploadStatus === 'error'}">
                                <div
                                    class="h-2 rounded-lg transition-all duration-200"
                                    :style="{ width: uploadProgress + '%' }"></div>
                        </div>
                </div>
        </div>

    </div>
</template>