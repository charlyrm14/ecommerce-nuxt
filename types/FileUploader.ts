export type TypeFile = 'image' | 'pdf'

export type FileItem<T = unknown> = {
    id: string
    file: File
    progress: number
    status: 'pending' | 'uploading' | 'success' | 'error'
    response?: T
}

export type UploadImageResult = {
    data: {
        sizes: {
            original: {
                id: number
                original_name: string
                file_name: string
                file_path: string
                mime_type: string
            }
            thumbnail: {
                id: number
                original_name: string
                file_name: string
                file_path: string
                mime_type: string
            }
        }
    }
}

export type FileUploaderOptions = {
    accept?: string
    type?: TypeFile
    multiple?: boolean
    maxFiles?: number
    maxSizeMB?: number
    concurrency?: number
    uploadFn?: (
        file: File,
        onProgress?: (p: number) => void,
        signal?: AbortSignal
    ) => Promise<UploadImageResult>
}