import { useFilesStore } from "~~/stores/files"
import type { 
    FileUploaderOptions, 
    UploadFileResult 
} from "~~/types/FileUploader"

export function useFileUploader (options: FileUploaderOptions) {

    type UploadProgress = 'pending' | 'uploading' | 'success' | 'error'
    
    const isDragging = ref<boolean>(false)
    const fileInput = ref<HTMLInputElement | null>(null)
    const uploadStatus = ref<UploadProgress>('pending')
    const uploadProgress = ref<number>(0)

    const config = useRuntimeConfig();
    const { message, handleMessage} = useMessageAlert()

    const filesStore = useFilesStore()

    const onDragOver = (e: DragEvent) => {
        e.preventDefault()
        isDragging.value = true
    }

    const onDragLeave = () => {
        isDragging.value = false
    }

    const onDrop = (e: DragEvent, opts: FileUploaderOptions) => {
        e.preventDefault()
        isDragging.value = false
        
        if (e.dataTransfer?.files) {
            handleFiles(e.dataTransfer?.files, opts)
        }
    }

    const openFileDialog = () => {
        console.log('From input...')
    }

    const handleFiles = (fileList: FileList, opts: FileUploaderOptions) => {

        const filesArray = Array.from(fileList)

        if (opts.maxFiles && filesArray.length > opts.maxFiles) {
            handleMessage(`Solo puedes subir un máximo de ${opts.maxFiles} archivo(s)`, 'warning')
            return
        }

        if (opts.maxFiles && filesStore.files.length >= opts.maxFiles) {
            handleMessage(`Solo puedes subir un máximo de ${opts.maxFiles} archivo(s)`, 'warning')
            return
        }

        const validFiles = filesArray.filter(file => {
            const sizeMB = file.size / (1024 * 1024)
            return sizeMB <= (opts.maxSizeMB ?? Infinity)
        })
        
        uploadFiles(validFiles.map(file => {
            const sizeMB = +(file.size / (1024 * 1024)).toFixed(2)
            return Object.assign(file, { sizeMB })
        }))
    }

    const uploadFiles = async(filesToUpload: File[]) => {

        try {
            
            const formData = new FormData()
            
            for (const file of filesToUpload) {
                formData.append('files[]', file);
            }

            const response = await $fetch<UploadFileResult>(`${config.public.apiBaseUrl}/files`, {
                method: 'POST',
                body: formData
            } as any)

            filesStore.files.push(response.data)

        } catch (error) {

            console.error(error)

        }
    }

    const removeFile = () => {
        console.log('Eliminando...')
    }
    
    return {
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
        handleFiles,
        removeFile
    }
}