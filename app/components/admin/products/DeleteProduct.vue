<script setup lang="ts">

    const emit = defineEmits(['closeDeleteProduct'])

    const isSubmitting = ref<boolean>(false);

    const handleSubmit = () => {
        isSubmitting.value = true

        setTimeout(() => {
            isSubmitting.value = false
        }, 3000);
    }

</script>

<template>
    <div class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-[90%] max-w-md p-6 mx-4">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-extralight text-slate-800 dark:text-white flex items-center gap-2"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>  Eliminar producto
                </h2>
                <button
                    @click="$emit('closeDeleteProduct')"
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

            <div class="text-slate-600 dark:text-slate-300">
                <div class="bg-amber-100 flex items-start py-2 px-4 gap-x-3 rounded-lg">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 text-amber-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                        </svg>
                    </div>
                    <p class="text-sm text-slate-400 dark:text-slate-400 font-light">
                        Los productos seguirán apareciendo en los carritos de los usuarios.
                    </p>
                </div>
                <p class="text-lg font-light text-red-500 text-center my-3">
                    ¿Estás seguro de querer eliminar el producto
                    <span class="font-bold"> TV 4k </span>?
                </p>
            </div>

            <div class="mt-6">
                <div class="flex justify-between">
                    <button 
                        @click="$emit('closeDeleteProduct')"
                        class="bg-gray-200 text-gray-400 px-4 py-2 rounded-lg hover:opacity-75 cursor-pointer"> Cerrar </button>
                    <button
                        @click="handleSubmit()"
                        :disabled="isSubmitting"
                        class="px-4 py-2 rounded-lg hover:opacity-75 transition"
                        :class="!isSubmitting ? 'bg-red-500 text-white cursor-pointer ' : 'bg-red-300 text-white cursor-not-allowed'">
                            {{ !isSubmitting ? 'Si, eliminar' : 'Eliminando...' }}
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>