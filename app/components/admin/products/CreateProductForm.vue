<script setup lang="ts">
    import { useProductsStore } from '~~/stores/products';
    import { useFilesStore } from '~~/stores/files';

    type NewProduct = {
        name: string
        description: string
        price: number
        stock: number
        status: number
        category_id: number
        brand_id: number
        images: Array<number>
    }

    const isSubmitting = ref<boolean>(false)

    const productsStore = useProductsStore()
    const filesStore = useFilesStore()

    const handleSubmit = async(data: NewProduct) => {

        isSubmitting.value = true

        if (productsStore.form.category_id === 0) {
            productsStore.error = true
            isSubmitting.value = false
            return
        }

        productsStore.error = false

        try {

            const formData = {
                ...data,
                status: productsStore.form.status,
                category_id: productsStore.form.category_id,
                images: filesStore.files.length > 0
                    ? filesStore.files?.[0].flatMap(file => file.variants.map(variant => variant.id))
                    : []
            }

            console.log(formData)
            await productsStore.createProduct(formData)

        } catch (error) {

            console.error(error)

        } finally {

            isSubmitting.value = false
        }
    }

</script>

<template>
    <div class="mt-7 rounded-lg border border-gray-200 bg-white p-4">
        <FormKit
            type="form"
            id="createProduct"
            :actions="false"
            incomplete-message="* Revisa los campos marcados con error *"
            message-class="text-red-500 my-5 text-xs font-light"
            @submit="handleSubmit">

                <div class="py-2 px-4">
                    <div class="mb-3">
                        <label for="name" class="text-base"> Nombre <span class="text-red-500"> * </span> </label>
                        <FormKit 
                            type="text"
                            id="name"
                            name="name"
                            v-model="productsStore.form.name"
                            input-class="w-full bg-gray-50 text-gray-500 border border-gray-200 px-2 py-3 mt-1 focus:outline-none rounded-lg"
                            message-class="text-red-500 text-sm m-1.5 font-light"
                            placeholder="Ej: Sudadera, televisón"
                            validation="required|length:3,100"
                            :validation-messages="{
                                required: 'Ingresa un nombre',
                                length: 'El nombre debe contener entre 3 y 100 caracteres'
                            }"
                            :disabled="isSubmitting"/>
                        <span class="text-xs text-gray-400 mt-1 block px-1">
                            Establece el nombre del producto
                        </span>
                    </div>
                </div>

                <div class="py-2 px-4">
                    <div class="mb-3">
                        <label for="description" class="text-base"> Descripción <span class="text-red-500"> * </span> </label>
                        <div class="border border-gray-200 mt-2 rounded-lg h-50">
                            <div class="flex justify-start items-center gap-x-3 border-b border-gray-200 px-4 py-2">
                                <button 
                                    class="text-gray-400 cursor-pointer hover:opacity-75 text-sm"> 
                                        Normal 
                                </button>
                                <button 
                                    class="text-gray-400 font-bold cursor-pointer hover:opacity-75 text-sm"> 
                                        B 
                                </button>
                                <button 
                                    class="text-gray-400 italic cursor-pointer hover:opacity-75 text-sm"> 
                                        I 
                                </button>
                                <button 
                                    class="text-gray-400 underline cursor-pointer hover:opacity-75 text-sm"> 
                                        U 
                                </button>
                            </div>
                            <div class="p-0.5 cursor-text">
                                <FormKit
                                    type="textarea"
                                    name="description" 
                                    id="description"
                                    v-model="productsStore.form.description"
                                    placeholder="Escribe aquí..."
                                    input-class="w-full bg-gray-50 text-gray-600 focus:outline-none h-39 p-1.5"
                                    message-class="text-red-500 text-sm my-1.5 font-light"
                                    validation="required|length:4,1000"
                                    :validation-messages="{
                                        required: 'Ingresa una descripción',
                                        length: 'La descripción debe tener entre 4 y 500 caracteres'
                                    }"
                                    :disabled="isSubmitting"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="py-2 px-4">
                    <div class="mb-3">
                        <label for="price" class="text-base"> 
                            Precio <span class="text-red-500"> * </span> 
                        </label>
                        <FormKit 
                            type="number"
                            name="price"
                            id="price"
                            v-model="productsStore.form.price"
                            number="float"
                            input-class="w-full bg-gray-50 text-gray-500 border border-gray-200 px-2 py-3 mt-1 focus:outline-none rounded-lg"
                            message-class="text-red-500 text-sm m-1.5 font-light"
                            placeholder="Ej: 1299.99"
                            step="0.01"
                            validation="required"
                            :validation-messages="{
                                required: 'Ingresa un precio'
                            }"
                            :disabled="isSubmitting"/>
                        <span class="text-xs text-gray-400 mt-1 block px-1">
                            Establece el precio del producto con decimales
                        </span>
                    </div>
                </div>

                <div class="py-2 px-4">
                    <div class="my-3">
                        <label for="stock" class="text-base"> Stock <span class="text-red-500"> * </span> </label>
                        <FormKit 
                            type="number"
                            id="stock"
                            name="stock"
                            v-model="productsStore.form.stock"
                            input-class="w-full bg-gray-50 text-gray-500 border border-gray-200 px-2 py-3 mt-1 focus:outline-none rounded-lg"
                            message-class="text-red-500 text-sm m-1.5 font-light"
                            placeholder="Ej: 5"
                            validation="required|min:1"
                            :validation-messages="{
                                required: 'Ingresa el stock',
                                min: 'El stock debe tener al menos 1 producto en stock'
                            }"/>
                        <span class="text-xs text-gray-400 mt-1 block px-1">
                            Establece el stock disponible del producto
                        </span>
                    </div>
                </div>

                <div class="py-2 px-4 mt-7">
                    <div class="flex justify-between items-center">
                        <NuxtLink
                            to="/e-admin/products"
                            class="text-gray-400 px-4 py-2 rounded-lg hover:opacity-75 cursor-pointer">
                                Cancelar
                        </NuxtLink>
                        <button
                            type="submit"
                            :disabled="isSubmitting"
                            class="px-4 py-2 rounded-lg hover:opacity-75 cursor-pointer"
                            :class="!isSubmitting ? 'bg-blue-500 text-white cursor-pointer ' : 'bg-blue-300 text-white cursor-not-allowed'">
                                {{ !isSubmitting ? 'Crear producto' : 'Creando...' }}
                        </button>
                    </div>
                </div>

        </FormKit>
    </div>
</template>
