export type TypeFile = 'image' | 'pdf'

export type FileItem<T = unknown> = {
    id: string
    file: File
    progress: number
    status: 'pending' | 'uploading' | 'success' | 'error'
    response?: T
}

export type UploadFileResult = Array<{
    data: {
        id: number
        type: string
        mime_type: string
        variants: {
            original: {
                id: number
                file_path: string,
                size?: number,
                width?: number,
                height?: number,
                resolution?: string,
                original_name: string
            },
            thumbnail?: {
                id: number
                file_path: string
                size?: number
                width?: number
                height?: number
                resolution?: string
                original_name: string
            }
        }
    }
}>

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
    ) => Promise<UploadFileResult>
}