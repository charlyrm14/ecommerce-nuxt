<script setup lang="ts">
    import { useCategoriesStore } from '~~/stores/categories';
    import FileUploader from '~/components/common/FileUploader.vue';

    type CategoryForm = {
        name: string
    }

    const emit = defineEmits(['closeCreateCategory'])

    const isSubmitting = ref<boolean>(false);
    const statusCategory = ref<number>(1)
    const showFileUploader = ref<boolean>(false)

    const categoriesStore = useCategoriesStore()

    const handleSubmit = async( data: CategoryForm ) => {
        isSubmitting.value = true

        const formData = {
            ...data,
            status: statusCategory.value
        }

        try {

            await categoriesStore.createCategory(formData)

            emit('closeCreateCategory')

        } catch (error) {

            console.error(error)
            
        } finally {
            
            isSubmitting.value = false
            statusCategory.value = 1
        }
    }

    const toggleStatusCategory = () => {
        statusCategory.value = statusCategory.value === 1 ? 0 : 1
    }

</script>

<template>
    <div class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-[90%] max-w-md p-6 mx-4">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-extralight text-slate-800 dark:text-white flex items-center gap-2"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>  Nueva categoría
                </h2>
                <button
                    :disabled="isSubmitting"
                    @click="$emit('closeCreateCategory')"
                    class="text-slate-400 hover:text-red-500 transition cursor-pointer">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            class="h-5 w-5" 
                            fill="none" 
                            viewBox="0 0 24 24"
                            stroke="currentColor" 
                            stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>

            <FormKit
                type="form"
                id="createCategory"
                :actions="false"
                incomplete-message="* Revisa los campos marcados con error *"
                message-class="text-red-500 my-5 text-xs font-light"
                @submit="handleSubmit">

                <div class="my-6">
                    <div class="mb-3">
                        <label for="name" class="font-light uppercase"> Nombre <span class="text-red-500 font-bold"> * </span> </label>
                        <FormKit 
                            type="text"
                            id="name"
                            name="name"
                            input-class="w-full bg-gray-50 text-gray-500 border border-gray-200 px-2 py-3 mt-1 focus:outline-none rounded-lg"
                            message-class="text-red-500 text-sm m-1.5 font-light"
                            placeholder="Ej: Electrónica, deportes, cocina"
                            validation="required|length:3,100"
                            :validation-messages="{
                                required: 'Ingresa un nombre',
                                length: 'El nombre debe contener menos de 100 caracteres'
                            }"
                            :disabled="isSubmitting"/>
                    </div>
                    <div class="flex justify-between items-center gap-x-3">
                        <p class="uppercase my-3 font-light"> 
                            Estatus <span class="block text-sm text-gray-400 normal-case"> Define la visibildad de la categoría </span>
                        </p>
                        <button 
                            type="button" 
                            @click="toggleStatusCategory"
                            class="relative inline-flex h-8 w-13 items-center rounded-full transition-colors duration-300 ease-in-out focus:outline-none peer cursor-pointer border"
                            :class="statusCategory  === 1 ? 'bg-blue-500 border-blue-500' : 'bg-gray-200 border-gray-300'">
                                <span 
                                    class="inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ease-in-out peer-checked:translate-x-6"
                                    :class="statusCategory  === 1 ? 'translate-x-6' : 'translate-x-1'"></span>
                        </button>
                    </div>
                </div>

                <div class="my-6">
                    <button 
                        @click.prevent="showFileUploader = !showFileUploader"
                        class="bg-pink-200 text-pink-400 px-2 py-1 font-light text-sm flex items-center gap-x-2 rounded cursor-pointer hover:opacity-75 mb-3"> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg> Agregar imagenes
                    </button>
                    <div v-if="showFileUploader">
                        <FileUploader/>
                    </div>
                </div>

                <div class="mt-6">
                    <div class="flex justify-end gap-x-4">
                        <button 
                            :disabled="isSubmitting"
                            @click.prevent="$emit('closeCreateCategory')"
                            class="bg-white text-gray-400 px-4 py-2 rounded-lg hover:opacity-75 cursor-pointer"> Cerrar </button>
                        <button
                            type="submit"
                            :disabled="isSubmitting"
                            class="px-4 py-2 rounded-lg hover:opacity-75 transition"
                            :class="!isSubmitting ? 'bg-blue-500 text-white cursor-pointer ' : 'bg-blue-300 text-white cursor-not-allowed'">
                                {{ !isSubmitting ? 'Crear categoría' : 'Creando...' }}
                        </button>
                    </div>
                </div>

            </FormKit>

        </div>
    </div>
</template>