export const isImage = (mimeType: string): boolean => {
    return mimeType.toLowerCase().includes("image")
}