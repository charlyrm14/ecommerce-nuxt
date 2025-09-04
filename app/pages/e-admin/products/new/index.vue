<script setup lang="ts">
    import Breadcrumb from '~/components/admin/layouts/Breadcrumb.vue';
    import AddCategory from '~/components/admin/categories/AddCategory.vue';
    import AddProductFiles from '~/components/admin/products/AddProductFiles.vue';
    import CoverProductImage from '~/components/admin/products/CoverProductImage.vue';
    import ProductDetails from '~/components/admin/products/ProductDetails.vue';
    import { useProductsStore } from '~~/stores/products';
    import Alert from '~/components/common/Alert.vue';
    
        
    definePageMeta({
        layout: 'admin'
    })

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

    type Errors = {
        text: string
        status: boolean
    }

    const isSubmitting = ref<boolean>(false)
    const showCreateCategoryModal = ref<boolean>(false)
    const showUploadFilesModal = ref<boolean>(false)
    const statusProduct = ref<number>(0)
    const categorySelected = ref<number>(0)

    const errors = reactive<Errors>({
        text: '',
        status: false
    })

    const productsStore = useProductsStore()

    const openCreateCategoryModal = () => {
        showCreateCategoryModal.value = true;
    }
    
    const closeCreateCategoryModal = () => {
        showCreateCategoryModal.value = false;
    }

    const openUploadFileModal = () => {
        showUploadFilesModal.value = true;
    }

    const closeUploadFileModal = () => {
        showUploadFilesModal.value = false
    }

    const handleSubmit = async(data: NewProduct) => {

        isSubmitting.value = true

        if (categorySelected.value === 0) {
            errors.status = true
            errors.text = 'Selecciona una categoría'
            isSubmitting.value = false
            return
        }

        errors.status = false
        errors.text = ''

        const formData = {
            ...data,
            status: statusProduct.value,
            category_id: categorySelected.value,
            images: []
        }

        try {

            await productsStore.createProduct(formData)

        } catch (error) {

            console.error(error)

        } finally {

            isSubmitting.value = false
        }
    }

    const toggleStatusProduct = () => {
        statusProduct.value = statusProduct.value === 1 ? 0 : 1
    }

    const onCategorySelected = (id: number) => {
        categorySelected.value = id
    }

</script>

<template>
    <Breadcrumb
        main="Productos"
        secondary="Nuevo producto"/>

    <Alert
        v-if="productsStore.alert.status"
        :title="productsStore.alert.title"
        :description="productsStore.alert.description"
        :type="productsStore.alert.type"/>

    <section class="mt-7">
        <div class="flex flex-col gap-6 md:flex-row">
            <aside class="md:basis-[20%]">

                <CoverProductImage
                    @openFileModal="openUploadFileModal"/>
                
                <div class="mt-7 rounded-lg border border-gray-200 bg-white p-2">
                    <div class="flex justify-between items-center gap-x-3">
                        <div class="py-2 px-4">
                            <h2 class="font-bold text-lg"> 
                                Estatus <span class="block text-xs text-gray-400 font-normal"> Define la visibildad del producto </span>
                            </h2>
                        </div>
                        <button 
                            type="button" 
                            @click="toggleStatusProduct"
                            class="relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 ease-in-out focus:outline-none peer cursor-pointer"
                            :class="statusProduct  === 1 ? 'bg-blue-500 border-blue-500' : 'bg-gray-200 border-gray-300'">
                                <span 
                                    class="inline-block h-6 w-7 transform rounded-full bg-white transition-transform duration-300 ease-in-out peer-checked:translate-x-6"
                                    :class="statusProduct  === 1 ? 'translate-x-8' : 'translate-x-1'"></span>
                        </button>
                    </div>
                </div>

                <ProductDetails
                    @openCategoryModal="openCreateCategoryModal"
                    @categorySelected="onCategorySelected"
                    :error="errors"/>

            </aside>

            <main class="md:basis-[80%]">

                <div class="flex justify-start items-center gap-x-3">
                    <div class="border-b-3 border-blue-500">
                        <h2 class="text-blue-500 text-lg hover:opacity-75 cursor-pointer"> General </h2>
                    </div>
                </div>

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
                                        input-class="w-full bg-gray-50 text-gray-500 border border-gray-200 px-2 py-3 mt-1 focus:outline-none rounded-lg"
                                        message-class="text-red-500 text-sm m-1.5 font-light"
                                        placeholder="Ej: Televisión, playera, cocina"
                                        validation="required|length:3,100"
                                        :validation-messages="{
                                            required: 'Ingresa un nombre',
                                            length: 'El nombre debe contener entre 3 y 100 caracteres'
                                        }"
                                        :disabled="isSubmitting"/>
                                    <span class="text-xs text-gray-400 mt-1 block">
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
                                                placeholder="Escribe aquí..."
                                                input-class="w-full bg-gray-50 text-gray-600 focus:outline-none h-39 p-1.5"
                                                message-class="text-red-500 text-sm my-1.5 font-light"
                                                validation="required|length:4,500"
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
                                        input-class="w-full bg-gray-50 text-gray-500 border border-gray-200 px-2 py-3 mt-1 focus:outline-none rounded-lg"
                                        message-class="text-red-500 text-sm m-1.5 font-light"
                                        placeholder="Ej: 1299.99"
                                        validation="required"
                                        :validation-messages="{
                                            required: 'Ingresa un precio'
                                        }"
                                        :disabled="isSubmitting"/>
                                    <span class="text-xs text-gray-400 mt-1 block">
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
                                        input-class="w-full bg-gray-50 text-gray-500 border border-gray-200 px-2 py-3 mt-1 focus:outline-none rounded-lg"
                                        message-class="text-red-500 text-sm m-1.5 font-light"
                                        placeholder="Ej: 5"
                                        validation="required|min:1"
                                        :validation-messages="{
                                            required: 'Ingresa el stock',
                                            min: 'El stock debe tener al menos 1 producto en stock'
                                        }"/>
                                    <span class="text-xs text-gray-400 mt-1 block">
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

            </main>
        </div>
    </section>

    <AddProductFiles
        v-if="showUploadFilesModal"
        @closeFileModal="closeUploadFileModal"/>

    <AddCategory
        v-if="showCreateCategoryModal"
        @closeCreateCategory="closeCreateCategoryModal()"/>

</template>
