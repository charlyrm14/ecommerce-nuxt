export interface Category {
    id: number;
    name: string;
    slug: string;
    parent_id: number | null;
    status: number;
    created_at: string;
    updated_at: string;
}

export interface Brand {
    id: number;
    name: string;
    slug: string;
    description: string;
    status: number;
    created_at: string,
    updated_at: string;
}

export interface File {
    id: number;
    file_path: string;
    mime_type: string;
    variant: string;
    width: string | null
    height: string | null
    resolution: string | null
    parent_id: number | null
    mediaable_id: number | null
    mediaable_type: string | null
    created_at: string;
    updated_at: string;
    variants: File[]
}

export interface Product {
    id: number;
    name: string;
    slug: string;
    description: string;
    price: string;
    stock: number;
    sku: string;
    status: number;
    category_id: number;
    brand_id: number|null;
    uuid: string;
    created_at: string;
    updated_at: string;
    category: Category;
    brand: Brand | null;
    files: File[]
}