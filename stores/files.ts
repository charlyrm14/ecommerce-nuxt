import { defineStore } from 'pinia'
import type { UploadFile } from '~~/types/FileUploader'

export const useFilesStore = defineStore('files', () => {

    const files = ref<UploadFile[]>([])
    const selectFiles = ref<boolean>(false)

    return {
        files,
        selectFiles
    }
})