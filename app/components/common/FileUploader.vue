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
        message,
        onDragOver,
        onDragLeave,
        onDrop,
        openFileDialog,
    } = useFileUploader(props)

    const filesStore = useFilesStore();

</script>

<template>
    <div>
        <div
            @dragover.prevent="onDragOver"
            @dragleave.prevent="onDragLeave"
            @drop.prevent="e => onDrop(e, props)"
            class="w-full p-6 rounded-lg"
            :class="{
                'bg-blue-200 border-2 border-dashed border-blue-300': isDragging,
                'bg-green-50 border border-dashed border-green-300': uploadStatus === 'success' && !isDragging,
                'bg-red-100 border border-dashed border-red-300': uploadStatus === 'error' && !isDragging,
                'bg-gray-50 border border-dashed border-gray-300': uploadStatus === 'pending' && !isDragging
            }">
                <div
                    v-if="uploadStatus === 'pending' || uploadStatus === 'error'"
                    class="flex flex-col items-center justify-center text-center">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke-width="1.5" 
                            stroke="currentColor" 
                            class="w-40 text-gray-400 mb-3">
                                <path stroke-linecap="round" stroke-linejoin="round" 
                                d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                        </svg>
                        <p class="text-sm text-gray-600">
                            Arrastra y suelta tus archivos aquí 
                                <span class="block text-xs text-gray-400">Máximo 5MB por archivo</span>
                        </p>
                        <button 
                            @click="openFileDialog"
                            class="mt-3 border border-pink-500 text-pink-500 px-3 py-1.5 
                                rounded-lg text-sm hover:bg-pink-500 hover:text-white 
                                transition-colors cursor-pointer">
                            Elige tus archivos
                        </button>
                        <input 
                            ref="fileInput" 
                            type="file" 
                            :accept="accept"  
                            :multiple="multiple"
                            class="hidden"/>
                </div>
                <div 
                    v-if="uploadStatus === 'success'"
                    class="flex flex-col items-center justify-center text-center">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke-width="1.5" 
                            stroke="currentColor" 
                            class="w-30 rotate-10 text-green-300/80 drop-shadow-2xl">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
                        </svg>
                        <p class="text-sm font-extralight mt-3"> 
                            ({{ filesStore?.files?.[0].length ?? 0 }}) <span> archivos subidos con éxito </span>
                        </p>
                        <button
                            @click="uploadStatus = 'pending'"
                            class="mt-3 bg-gray-200 text-gray-500 border border-gray-200 px-3 py-0.5 rounded-lg text-sm transition-colors cursor-pointer inline-flex items-center gap-x-2 hover:opacity-75">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                            </svg> Cargar mas
                        </button>
                </div>
        </div>

        <MessageAlert
            v-if="message.status"
            :title="message.title"
            :type="message.type"/>

    </div>
</template>