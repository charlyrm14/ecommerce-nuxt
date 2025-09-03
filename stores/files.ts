import { defineStore } from 'pinia'
import type { FileItem } from '~~/types/FileUploader'
import type { UploadImageResult } from '~~/types/FileUploader'

export const useFilesStore = defineStore('files', () => {

    const files = ref<FileItem<UploadImageResult>[]>([])
    const selectFiles = ref<boolean>(false)

    return {
        files,
        selectFiles
    }
})