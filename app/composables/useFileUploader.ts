import { useFilesStore } from "~~/stores/files"
import type { 
    FileItem, 
    FileUploaderOptions, 
    UploadImageResult 
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

        filesStore.files.push(
            ...validFiles.map<FileItem<UploadImageResult>>(file => ({
                id: crypto.randomUUID(),
                file,
                progress: uploadProgress.value,
                status: uploadStatus.value
            }))
        )

        if (opts.type === 'image') {
            uploadImages(validFiles)
        } else {
            uploadFiles(validFiles)
        }
    }

    const uploadImages = async(filesToUpload: File[]) => {

        for (const file of filesToUpload) {
            
            const item = filesStore.files.find(f => f.file === file)
            if (!item) continue

            try {

                const formData = new FormData()
                formData.append('file', file)

                const response = await $fetch<UploadImageResult>(`${config.public.apiBaseUrl}/files/images`, {
                    method: 'POST',
                    body: formData,
                    onRequestProgress: (event) => {
                        if (event.total) {
                            uploadProgress.value = Math.round((event.loaded / event.total) * 100)
                            uploadStatus.value = 'uploading'
                        }
                    }
                } as any)

                item.response = response
                uploadStatus.value = 'success'
                uploadProgress.value = 100

            } catch (error) {

                console.error(error)
                uploadStatus.value = 'error'
                uploadProgress.value = 0
            } 
        }
    }

    const uploadFiles = async(dataFiles: File[]) => {
        try {
            console.log(dataFiles)
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
        uploadFiles,
        removeFile
    }
}