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

export interface Product {
    id: number;
    name: string;
    slug: string;
    description: string;
    price: string;
    stock: number;
    sku: string;
    status: boolean;
    category_id: number;
    brand_id: number|null;
    uuid: string;
    created_at: string;
    updated_at: string;
    category: Category;
    brand: Brand | null
}