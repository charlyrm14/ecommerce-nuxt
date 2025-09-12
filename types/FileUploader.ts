export type TypeFile = 'image' | 'pdf'

export type FileItem<T = unknown> = {
    id: string
    file: File
    progress: number
    status: 'pending' | 'uploading' | 'success' | 'error'
    response?: T
}

export type Variant = {
    id: number
    variant: string
    file_path: string
    size: string | null
    width: string | null
    height: string | null
    resolution: string | null
    original_name: string
    sizeMB?: number
}

export type UploadFile = {
    id: number
    file_path: string
    mime_type: string
    variant: string
    original_name: string
    variants: Variant[]
}

export type UploadFileResult = {
    data: UploadFile[]
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
    ) => Promise<UploadFileResult>
}